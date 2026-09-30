import csv
import psycopg2


# ==========================================
# DATABASE CONNECTION
# ==========================================
connection = psycopg2.connect(
    host="localhost",
    database="medinexus_db",
    user="postgres",
    password="harshini",
    port="5432"
)

cursor = connection.cursor()

print("Connected to PostgreSQL")


# ==========================================
# LOAD MEDICINES
# ==========================================
with open("data/medicines.csv", "r", encoding="utf-8") as file:

    reader = csv.DictReader(file)

    count = 0

    for row in reader:

        cursor.execute("""
            INSERT INTO medicines
            (medicine_name, rxcui, synonym, term_type, language, suppress)
            VALUES (%s, %s, %s, %s, %s, %s)
        """, (
            row.get("name", ""),
            row.get("rxcui", ""),
            row.get("synonym", ""),
            row.get("tty", ""),
            row.get("language", ""),
            row.get("suppress", "")
        ))

        count += 1

print("Medicines imported:", count)


# ==========================================
# LOAD INVENTORY
# ==========================================
with open("data/inventory.csv", "r", encoding="utf-8") as file:

    reader = csv.DictReader(file)

    count = 0

    for row in reader:

        cursor.execute("""
            INSERT INTO inventory
            (
                medicine_name,
                current_stock,
                daily_consumption,
                days_remaining,
                reorder_level,
                expiry_months,
                stock_status,
                risk_level
            )
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            row.get("medicine_name", ""),
            row.get("current_stock", 0),
            row.get("daily_consumption", 0),
            row.get("days_remaining", 0),
            row.get("reorder_level", 0),
            row.get("expiry_months", 0),
            row.get("stock_status", ""),
            row.get("risk_level", "")
        ))

        count += 1

print("Inventory imported:", count)


# ==========================================
# LOAD SUPPLIERS
# ==========================================
with open("data/suppliers.csv", "r", encoding="utf-8") as file:

    reader = csv.DictReader(file)

    count = 0

    for row in reader:

        cursor.execute("""
            INSERT INTO suppliers
            (
                supplier_id,
                supplier_name,
                unit_price,
                delivery_days,
                reliability_score,
                availability_score,
                approval_status,
                risk_level
            )
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            row.get("supplier_id", ""),
            row.get("supplier_name", ""),
            row.get("unit_price", 0),
            row.get("delivery_days", 0),
            row.get("reliability_score", 0),
            row.get("availability_score", 0),
            row.get("approval_status", ""),
            row.get("risk_level", "")
        ))

        count += 1

print("Suppliers imported:", count)


# ==========================================
# SAVE CHANGES
# ==========================================
connection.commit()

cursor.close()
connection.close()

print("")
print("================================")
print("ALL DATA IMPORTED SUCCESSFULLY")
print("================================")