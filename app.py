from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
import os
app = Flask(__name__)
CORS(app)


# ============================================================
# DATABASE CONNECTION
# ============================================================

def get_db_connection():
    return psycopg2.connect(
        host="localhost",
        database="medinexus_db",
        user="postgres",
       password=os.getenv("DB_PASSWORD"),
        port="5432"
    )


# ============================================================
# HOME / DATABASE TEST
# ============================================================

@app.route("/")
def home():
    try:
        connection = get_db_connection()
        connection.close()

        return jsonify({
            "message": "MediNexus Backend is Running!",
            "database": "PostgreSQL Connected",
            "status": "success"
        })

    except Exception as error:
        return jsonify({
            "message": "MediNexus Backend is Running!",
            "database": "Connection Failed",
            "error": str(error),
            "status": "error"
        })


# ============================================================
# MEDICINES API
# ============================================================

@app.route("/api/medicines")
def get_medicines():

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT
            medicine_id,
            medicine_name,
            rxcui,
            synonym,
            term_type,
            language,
            suppress
        FROM medicines
        ORDER BY medicine_id
    """)

    rows = cursor.fetchall()

    medicines = []

    for row in rows:
        medicines.append({
            "medicine_id": row[0],
            "medicine_name": row[1],
            "rxcui": row[2],
            "synonym": row[3],
            "term_type": row[4],
            "language": row[5],
            "suppress": row[6]
        })

    cursor.close()
    connection.close()

    return jsonify({
        "count": len(medicines),
        "medicines": medicines
    })


# ============================================================
# INVENTORY API
# ============================================================

@app.route("/api/inventory")
def get_inventory():

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT
            inventory_id,
            medicine_id,
            medicine_name,
            current_stock,
            daily_consumption,
            days_remaining,
            reorder_level,
            expiry_months,
            stock_status,
            risk_level
        FROM inventory
        ORDER BY inventory_id
    """)

    rows = cursor.fetchall()

    inventory = []

    for row in rows:
        inventory.append({
            "inventory_id": row[0],
            "medicine_id": row[1],
            "medicine_name": row[2],
            "current_stock": row[3],
            "daily_consumption": row[4],
            "days_remaining": float(row[5]) if row[5] is not None else 0,
            "reorder_level": row[6],
            "expiry_months": row[7],
            "stock_status": row[8],
            "risk_level": row[9]
        })

    cursor.close()
    connection.close()

    return jsonify({
        "count": len(inventory),
        "inventory": inventory
    })


# ============================================================
# SUPPLIERS API
# ============================================================

@app.route("/api/suppliers")
def get_suppliers():

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT
            supplier_id,
            supplier_name,
            unit_price,
            delivery_days,
            reliability_score,
            availability_score,
            approval_status,
            risk_level
        FROM suppliers
        ORDER BY supplier_id
    """)

    rows = cursor.fetchall()

    suppliers = []

    for row in rows:
        suppliers.append({
            "supplier_id": row[0],
            "supplier_name": row[1],
            "unit_price": float(row[2]) if row[2] is not None else 0,
            "delivery_days": row[3],
            "reliability_score": row[4],
            "availability_score": row[5],
            "approval_status": row[6],
            "risk_level": row[7]
        })

    cursor.close()
    connection.close()

    return jsonify({
        "count": len(suppliers),
        "suppliers": suppliers
    })


# ============================================================
# PROCUREMENT DECISION ENGINE
# ============================================================

@app.route("/api/procurement/analyze", methods=["GET"])
def analyze_procurement():

    medicine_name = request.args.get("medicine")
    required_quantity = request.args.get("quantity", type=int)
    required_days = request.args.get("days", type=int)

    # ---------------------------------------------------------
    # 1. Validate procurement request
    # ---------------------------------------------------------

    if not medicine_name or not required_quantity or not required_days:
        return jsonify({
            "status": "error",
            "message": "medicine, quantity and days are required"
        }), 400

    if required_quantity <= 0 or required_days <= 0:
        return jsonify({
            "status": "error",
            "message": "quantity and days must be greater than zero"
        }), 400

    connection = get_db_connection()
    cursor = connection.cursor()

    # ---------------------------------------------------------
    # 2. Find medicine in inventory
    # ---------------------------------------------------------

    normalized_medicine = medicine_name.lower()

    cursor.execute("""
        SELECT
            medicine_name,
            current_stock,
            daily_consumption,
            days_remaining,
            reorder_level,
            expiry_months,
            stock_status,
            risk_level
        FROM inventory
        WHERE
            LOWER(medicine_name) LIKE LOWER(%s)
            OR
            regexp_replace(
                LOWER(medicine_name),
                '[^a-z0-9]',
                '',
                'g'
            ) LIKE %s
        LIMIT 1
    """, (
        f"%{medicine_name}%",
        f"%{''.join(ch for ch in normalized_medicine if ch.isalnum())}%"
    ))

    inventory_row = cursor.fetchone()

    if not inventory_row:
        cursor.close()
        connection.close()

        return jsonify({
            "status": "error",
            "message": "Medicine not found in inventory"
        }), 404

    inventory = {
        "medicine_name": inventory_row[0],
        "current_stock": inventory_row[1],
        "daily_consumption": inventory_row[2],
        "days_remaining": float(inventory_row[3]),
        "reorder_level": inventory_row[4],
        "expiry_months": inventory_row[5],
        "stock_status": inventory_row[6],
        "risk_level": inventory_row[7]
    }

    # ---------------------------------------------------------
    # 3. Determine procurement urgency
    # ---------------------------------------------------------

    days_remaining = inventory["days_remaining"]

    if days_remaining <= required_days:
        urgency_level = "Critical"
        urgency_message = (
            "Current inventory runway is shorter than or equal to "
            "the requested procurement window."
        )

    elif days_remaining <= required_days + 3:
        urgency_level = "High"
        urgency_message = (
            "Inventory has limited runway, so deadline compliance "
            "and supplier reliability were prioritized."
        )

    else:
        urgency_level = "Normal"
        urgency_message = (
            "Inventory has sufficient runway, allowing delivery, "
            "reliability, availability and cost to influence the decision."
        )

    # ---------------------------------------------------------
    # 4. Load approved suppliers
    # ---------------------------------------------------------

    cursor.execute("""
        SELECT
            supplier_id,
            supplier_name,
            unit_price,
            delivery_days,
            reliability_score,
            availability_score,
            approval_status,
            risk_level
        FROM suppliers
        WHERE approval_status = 'Approved'
    """)

    supplier_rows = cursor.fetchall()

    suppliers = []

    # ---------------------------------------------------------
    # 5. Evaluate every supplier
    # ---------------------------------------------------------

    for row in supplier_rows:

        supplier_id = row[0]
        supplier_name = row[1]
        unit_price = float(row[2])
        delivery_days = row[3]
        reliability = row[4]
        availability = row[5]
        approval_status = row[6]
        supplier_risk = row[7]

        # -----------------------------------------------------
        # Delivery score
        # Faster delivery receives a higher score.
        # -----------------------------------------------------

        delivery_score = max(
            0,
            100 - ((delivery_days - 1) * 10)
        )

        # -----------------------------------------------------
        # Deadline feasibility
        # -----------------------------------------------------

        deadline_feasible = delivery_days <= required_days

        if deadline_feasible:
            deadline_status = "Meets deadline"
            deadline_score = 100
        else:
            deadline_status = "Misses deadline"

            # Strong penalty for suppliers that cannot meet
            # the requested delivery window.
            days_late = delivery_days - required_days

            deadline_score = max(
                0,
                100 - (days_late * 30)
            )

        # -----------------------------------------------------
        # Price score
        # -----------------------------------------------------

        price_score = max(
            0,
            100 - ((unit_price - 1.50) / 1.00 * 100)
        )

        # -----------------------------------------------------
        # Supplier risk score
        # -----------------------------------------------------

        risk_score = {
            "Low": 100,
            "Medium": 70,
            "High": 40
        }.get(supplier_risk, 50)

        # -----------------------------------------------------
        # Quantity-aware procurement value
        #
        # The supplier table does not contain actual supplier
        # inventory quantities, so we do NOT claim that a supplier
        # has a specific number of units available.
        #
        # Quantity is used to calculate the estimated order value.
        # -----------------------------------------------------

        estimated_total_cost = round(
            unit_price * required_quantity,
            2
        )

        # -----------------------------------------------------
        # Availability score
        #
        # This represents the availability indicator stored in
        # the synthetic supplier dataset.
        # -----------------------------------------------------

        quantity_feasibility = (
            "Availability indicator supports procurement"
            if availability >= 90
            else "Availability indicator requires review"
        )

        # -----------------------------------------------------
        # Final weighted decision score
        #
        # Deadline compliance is now explicitly included.
        # -----------------------------------------------------

        final_score = (
            delivery_score * 0.25 +
            deadline_score * 0.25 +
            reliability * 0.20 +
            availability * 0.15 +
            price_score * 0.10 +
            risk_score * 0.05
        )

        # Additional urgency adjustment.
        if days_remaining <= required_days:
            final_score += max(
                0,
                5 - delivery_days
            )

        # Strongly penalize suppliers that miss the deadline.
        if not deadline_feasible:
            final_score -= 20

        final_score = max(
            0,
            min(100, final_score)
        )

        suppliers.append({
            "supplier_id": supplier_id,
            "supplier_name": supplier_name,
            "unit_price": unit_price,
            "delivery_days": delivery_days,
            "reliability_score": reliability,
            "availability_score": availability,
            "approval_status": approval_status,
            "risk_level": supplier_risk,

            "delivery_score": round(delivery_score, 1),
            "deadline_score": round(deadline_score, 1),
            "price_score": round(price_score, 1),
            "risk_score": risk_score,

            "deadline_feasible": deadline_feasible,
            "deadline_status": deadline_status,

            "estimated_total_cost": estimated_total_cost,
            "quantity_requested": required_quantity,
            "quantity_feasibility": quantity_feasibility,

            "final_score": round(final_score, 1)
        })

    # ---------------------------------------------------------
    # 6. Rank suppliers
    #
    # Deadline-feasible suppliers are preferred first.
    # Then the AI decision score determines the ranking.
    # ---------------------------------------------------------

    suppliers.sort(
        key=lambda supplier: (
            supplier["deadline_feasible"],
            supplier["final_score"]
        ),
        reverse=True
    )

    recommended_supplier = suppliers[0] if suppliers else None

    # ---------------------------------------------------------
    # 7. Generate explainable AI decision
    # ---------------------------------------------------------

    explanation = ""

    if recommended_supplier:

        supplier = recommended_supplier["supplier_name"]
        score = recommended_supplier["final_score"]
        delivery = recommended_supplier["delivery_days"]
        total_cost = recommended_supplier["estimated_total_cost"]

        if recommended_supplier["deadline_feasible"]:
            deadline_reason = (
                f"It can deliver in {delivery} days, meeting the "
                f"requested {required_days}-day deadline."
            )
        else:
            deadline_reason = (
                f"It requires {delivery} days, which exceeds the "
                f"requested {required_days}-day deadline."
            )

        explanation = (
            f"{supplier} was selected with an AI decision score "
            f"of {score}%. {deadline_reason} "
            f"The decision considered delivery speed, deadline "
            f"compliance, supplier reliability, availability, "
            f"price and supplier risk. "
            f"The estimated procurement value for {required_quantity} "
            f"units is ₹{total_cost:.2f}. "
            f"{urgency_message}"
        )

    # ---------------------------------------------------------
    # 8. Close database connection
    # ---------------------------------------------------------

    cursor.close()
    connection.close()

    # ---------------------------------------------------------
    # 9. Return procurement decision
    # ---------------------------------------------------------

    return jsonify({
        "status": "success",

        "requirement": {
            "medicine": medicine_name,
            "quantity": required_quantity,
            "required_within_days": required_days
        },

        "inventory": inventory,

        "procurement_analysis": {
            "urgency_level": urgency_level,
            "urgency_message": urgency_message,
            "inventory_runway_days": days_remaining,
            "requested_delivery_window_days": required_days
        },

        "recommended_supplier": recommended_supplier,

        "supplier_comparison": suppliers[:10],

        "explanation": explanation
    })
@app.route("/api/orders", methods=["POST"])
def create_purchase_order():

    data = request.get_json()

    if not data:
        return jsonify({
            "status": "error",
            "message": "Request data is required"
        }), 400

    medicine_name = data.get("medicine")
    supplier_id = data.get("supplier_id")
    supplier_name = data.get("supplier_name")
    quantity = data.get("quantity")
    unit_price = data.get("unit_price")
    delivery_days = data.get("delivery_days")
    deadline_days = data.get("deadline_days")
    ai_score = data.get("ai_score")

    if not medicine_name:
        return jsonify({
            "status": "error",
            "message": "Medicine is required"
        }), 400

    if not supplier_id or not supplier_name:
        return jsonify({
            "status": "error",
            "message": "Supplier information is required"
        }), 400

    if not quantity or quantity <= 0:
        return jsonify({
            "status": "error",
            "message": "Valid quantity is required"
        }), 400

    if unit_price is None:
        return jsonify({
            "status": "error",
            "message": "Unit price is required"
        }), 400

    if delivery_days is None or deadline_days is None:
        return jsonify({
            "status": "error",
            "message": "Delivery and deadline information are required"
        }), 400

    total_cost = float(unit_price) * int(quantity)

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute("""
        INSERT INTO purchase_orders (
            medicine_name,
            supplier_id,
            supplier_name,
            quantity,
            unit_price,
            total_cost,
            delivery_days,
            deadline_days,
            order_status,
            ai_score
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        RETURNING order_id, created_at
    """, (
        medicine_name,
        supplier_id,
        supplier_name,
        int(quantity),
        float(unit_price),
        total_cost,
        int(delivery_days),
        int(deadline_days),
        "Pending",
        float(ai_score) if ai_score is not None else None
    ))

    order_row = cursor.fetchone()

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "status": "success",
        "message": "Purchase order created successfully",
        "order": {
            "order_id": order_row[0],
            "medicine": medicine_name,
            "supplier_id": supplier_id,
            "supplier_name": supplier_name,
            "quantity": int(quantity),
            "unit_price": float(unit_price),
            "total_cost": round(total_cost, 2),
            "delivery_days": int(delivery_days),
            "deadline_days": int(deadline_days),
            "order_status": "Pending",
            "ai_score": float(ai_score) if ai_score is not None else None,
            "created_at": order_row[1].isoformat()
        }
    }), 201
@app.route("/api/orders", methods=["GET"])
def get_purchase_orders():

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT
            order_id,
            medicine_name,
            supplier_id,
            supplier_name,
            quantity,
            unit_price,
            total_cost,
            delivery_days,
            deadline_days,
            order_status,
            ai_score,
            created_at
        FROM purchase_orders
        ORDER BY created_at DESC
    """)

    rows = cursor.fetchall()

    orders = []

    for row in rows:
        orders.append({
            "order_id": row[0],
            "medicine": row[1],
            "supplier_id": row[2],
            "supplier_name": row[3],
            "quantity": row[4],
            "unit_price": float(row[5]),
            "total_cost": float(row[6]),
            "delivery_days": row[7],
            "deadline_days": row[8],
            "order_status": row[9],
            "ai_score": float(row[10]) if row[10] is not None else None,
            "created_at": row[11].isoformat()
        })

    cursor.close()
    connection.close()

    return jsonify({
        "status": "success",
        "count": len(orders),
        "orders": orders
    })
@app.route("/api/procurement/recover", methods=["POST"])
def recover_procurement():

    data = request.get_json()

    if not data:
        return jsonify({
            "status": "error",
            "message": "Recovery request data is required"
        }), 400

    medicine_name = data.get("medicine")
    quantity = data.get("quantity")
    required_days = data.get("days")
    disrupted_supplier_id = data.get("disrupted_supplier_id")

    if not medicine_name or not quantity or not required_days:
        return jsonify({
            "status": "error",
            "message": "medicine, quantity and days are required"
        }), 400

    connection = get_db_connection()
    cursor = connection.cursor()

    # Find current inventory
    normalized_medicine = medicine_name.lower()

    cursor.execute("""
        SELECT
            medicine_name,
            current_stock,
            daily_consumption,
            days_remaining,
            stock_status,
            risk_level
        FROM inventory
        WHERE
            LOWER(medicine_name) LIKE LOWER(%s)
            OR regexp_replace(
                LOWER(medicine_name),
                '[^a-z0-9]',
                '',
                'g'
            ) LIKE %s
        LIMIT 1
    """, (
        f"%{medicine_name}%",
        f"%{''.join(ch for ch in normalized_medicine if ch.isalnum())}%"
    ))

    inventory_row = cursor.fetchone()

    if not inventory_row:
        cursor.close()
        connection.close()

        return jsonify({
            "status": "error",
            "message": "Medicine not found in inventory"
        }), 404

    # Find approved suppliers except disrupted supplier
    cursor.execute("""
        SELECT
            supplier_id,
            supplier_name,
            unit_price,
            delivery_days,
            reliability_score,
            availability_score,
            risk_level
        FROM suppliers
        WHERE
            approval_status = 'Approved'
            AND supplier_id <> %s
    """, (disrupted_supplier_id,))

    supplier_rows = cursor.fetchall()

    alternatives = []

    for row in supplier_rows:

        supplier_id = row[0]
        supplier_name = row[1]
        unit_price = float(row[2])
        delivery_days = row[3]
        reliability = row[4]
        availability = row[5]
        supplier_risk = row[6]

        delivery_score = max(
            0,
            100 - ((delivery_days - 1) * 10)
        )

        deadline_feasible = delivery_days <= required_days

        deadline_score = (
            100
            if deadline_feasible
            else max(
                0,
                100 - ((delivery_days - required_days) * 30)
            )
        )

        price_score = max(
            0,
            100 - ((unit_price - 1.50) / 1.00 * 100)
        )

        risk_score = {
            "Low": 100,
            "Medium": 70,
            "High": 40
        }.get(supplier_risk, 50)

        final_score = (
            delivery_score * 0.25 +
            deadline_score * 0.25 +
            reliability * 0.20 +
            availability * 0.15 +
            price_score * 0.10 +
            risk_score * 0.05
        )

        if not deadline_feasible:
            final_score -= 20

        final_score = max(
            0,
            min(100, final_score)
        )

        alternatives.append({
            "supplier_id": supplier_id,
            "supplier_name": supplier_name,
            "unit_price": unit_price,
            "delivery_days": delivery_days,
            "reliability_score": reliability,
            "availability_score": availability,
            "risk_level": supplier_risk,
            "deadline_feasible": deadline_feasible,
            "final_score": round(final_score, 1),
            "estimated_total_cost": round(
                unit_price * int(quantity),
                2
            )
        })

    alternatives.sort(
        key=lambda supplier: (
            supplier["deadline_feasible"],
            supplier["final_score"]
        ),
        reverse=True
    )

    alternative = alternatives[0] if alternatives else None

    cursor.close()
    connection.close()

    if not alternative:
        return jsonify({
            "status": "error",
            "message": "No approved alternative supplier found"
        }), 404

    recovery_message = (
        f"Supplier disruption detected. "
        f"{alternative['supplier_name']} is proposed as the "
        f"replacement supplier with a decision score of "
        f"{alternative['final_score']}%. "
        f"It can deliver in {alternative['delivery_days']} days."
    )

    return jsonify({
        "status": "success",

        "recovery": {
            "medicine": medicine_name,
            "quantity": int(quantity),
            "required_days": int(required_days),
            "disrupted_supplier_id": disrupted_supplier_id,
            "alternative_supplier": alternative,
            "recovery_message": recovery_message
        }
    })
# ======================================================
# EXCEPTIONS API
# ======================================================

@app.route("/api/exceptions", methods=["GET"])
def get_exceptions():

    connection = get_db_connection()
    cursor = connection.cursor()

    try:

        # Find critical inventory situations
        cursor.execute("""
            SELECT
                medicine_name,
                current_stock,
                daily_consumption,
                days_remaining,
                stock_status,
                risk_level
            FROM inventory
            WHERE days_remaining <= 5
            ORDER BY days_remaining ASC
            LIMIT 10
        """)

        inventory_rows = cursor.fetchall()

        exceptions = []

        for row in inventory_rows:

            medicine_name = row[0]
            current_stock = row[1]
            daily_consumption = row[2]
            days_remaining = float(row[3])
            stock_status = row[4]
            risk_level = row[5]

            if days_remaining <= 2:

                severity = "Critical"

            elif days_remaining <= 5:

                severity = "High"

            else:

                severity = "Medium"

            exceptions.append({
                "type": "Stockout Risk",
                "severity": severity,
                "medicine": medicine_name,
                "current_stock": current_stock,
                "daily_consumption": daily_consumption,
                "days_remaining": days_remaining,
                "stock_status": stock_status,
                "risk_level": risk_level,
                "recommended_action":
                    "Run AI recovery analysis and evaluate alternate suppliers."
            })

        return jsonify({
            "status": "success",
            "count": len(exceptions),
            "critical_count": len([
                x for x in exceptions
                if x["severity"] == "Critical"
            ]),
            "exceptions": exceptions
        })

    except Exception as e:

        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

    finally:

        cursor.close()
        connection.close()
        # ======================================================
# DASHBOARD SUMMARY API
# ======================================================

@app.route("/api/dashboard", methods=["GET"])
def get_dashboard_summary():

    connection = get_db_connection()
    cursor = connection.cursor()

    try:

        # -----------------------------
        # Inventory summary
        # -----------------------------

        cursor.execute("""
            SELECT
                COUNT(*),
                COUNT(*) FILTER (
                    WHERE stock_status = 'Healthy'
                ),
                COUNT(*) FILTER (
                    WHERE stock_status = 'Low Stock'
                ),
                COUNT(*) FILTER (
                    WHERE stock_status = 'Critical'
                )
            FROM inventory
        """)

        inventory_row = cursor.fetchone()

        total_medicines = inventory_row[0]
        healthy_stock = inventory_row[1]
        low_stock = inventory_row[2]
        critical_stock = inventory_row[3]


        # -----------------------------
        # Stockout risks
        # -----------------------------

        cursor.execute("""
            SELECT COUNT(*)
            FROM inventory
            WHERE days_remaining <= 5
        """)

        stockout_risks = cursor.fetchone()[0]


        # -----------------------------
        # Purchase orders
        # -----------------------------

        cursor.execute("""
            SELECT
                COUNT(*),
                COUNT(*) FILTER (
                    WHERE order_status = 'Pending'
                )
            FROM purchase_orders
        """)

        order_row = cursor.fetchone()

        active_orders = order_row[0]
        pending_orders = order_row[1]


        # -----------------------------
        # Procurement spend
        # -----------------------------

        cursor.execute("""
            SELECT COALESCE(
                SUM(total_cost), 0
            )
            FROM purchase_orders
        """)

        procurement_spend = float(
            cursor.fetchone()[0]
        )


        # -----------------------------
        # Inventory health
        # -----------------------------

        if total_medicines > 0:

            inventory_health = round(
                (
                    healthy_stock /
                    total_medicines
                ) * 100
            )

        else:

            inventory_health = 0


        return jsonify({

            "status": "success",

            "inventory": {

                "total_medicines":
                    total_medicines,

                "healthy_stock":
                    healthy_stock,

                "low_stock":
                    low_stock,

                "critical_stock":
                    critical_stock,

                "inventory_health":
                    inventory_health,

                "stockout_risks":
                    stockout_risks
            },

            "orders": {

                "active_orders":
                    active_orders,

                "pending_orders":
                    pending_orders
            },

            "procurement": {

                "total_spend":
                    procurement_spend
            }

        })


    except Exception as e:

        return jsonify({

            "status": "error",

            "message": str(e)

        }), 500


    finally:

        cursor.close()
        connection.close()
if __name__ == "__main__":
    app.run(debug=True)