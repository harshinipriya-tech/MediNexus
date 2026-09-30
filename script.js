/* =========================================================
   MEDINEXUS
   AUTONOMOUS MEDICAL PROCUREMENT INTELLIGENCE
   FRONTEND DEMO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email")?.value.trim();
            const password = document.getElementById("password")?.value.trim();

            if (!email || !password) {
                alert("Please enter your work email and password.");
                return;
            }

            showDashboard();
        });
    }
});


/* =========================================================
   APPLICATION SHELL
   ========================================================= */

function showDashboard() {

    document.body.innerHTML = `
        <div class="app-shell">

            <aside class="sidebar">

                <div class="sidebar-logo">

                    <div class="sidebar-logo-icon">+</div>

                    <div>
                        <strong>MediNexus</strong>
                        <small>AI Procurement</small>
                    </div>

                </div>


                <div class="sidebar-section">
                    Main
                </div>


                <nav class="sidebar-nav">

                    <button class="active" onclick="showDashboardPage()">
                        <span>▦</span>
                        Dashboard
                    </button>

                    <button onclick="showInventory()">
                        <span>▥</span>
                        Inventory
                    </button>

                    <button onclick="showProcurement()">
                        <span>＋</span>
                        Procurement
                    </button>

                    <button onclick="showSuppliers()">
                        <span>⌁</span>
                        Suppliers
                    </button>

                    <button onclick="showOrders()">
                        <span>□</span>
                        Orders
                    </button>

                </nav>


                <div class="sidebar-section">
                    Monitoring
                </div>


                <nav class="sidebar-nav">

                    <button onclick="showExceptions()">

                        <span>⚠</span>

                        Exceptions

                        <span
                            style="
                                margin-left:auto;
                                min-width:22px;
                                height:22px;
                                display:grid;
                                place-items:center;
                                border-radius:999px;
                                background:rgba(239,68,68,.18);
                                color:#ff7777;
                                font-size:9px;
                                font-weight:800;
                            "
                        >
                            3
                        </span>

                    </button>

                </nav>


                <div class="sidebar-bottom">

                    <div class="ai-online">

                        <div class="ai-online-status">
                            AI Agent Online
                        </div>

                        <small>
                            Monitoring continuously
                        </small>

                    </div>


                    <nav class="sidebar-nav">

                        <button onclick="showSettings()">
                            <span>⚙</span>
                            Settings
                        </button>

                    </nav>

                </div>

            </aside>


            <main class="main-content">

                <header class="topbar">

                    <div class="breadcrumb">
                        Workspace /
                        <strong id="breadcrumbPage">
                            Dashboard
                        </strong>
                    </div>


                    <div class="topbar-right">

                        <button class="notification-button">
                            ♧
                        </button>

                        <div class="user-avatar">
                            DS
                        </div>

                        <div class="user-info">
                            <strong>Dr. Sharma</strong>
                            <small>Procurement Manager</small>
                        </div>

                    </div>

                </header>


                <section
                    class="dashboard"
                    id="mainContent"
                >
                    ${dashboardContent()}
                </section>

            </main>

        </div>
    `;
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function dashboardContent() {

    return `

        <div class="page-header">

            <div>

                <div class="page-eyebrow">
                    Procurement Intelligence
                </div>

                <h1>
                    Good evening, Dr. Sharma.
                </h1>

                <p>
                    Here's your healthcare procurement overview.
                </p>

            </div>


            <button
                class="primary-button"
                onclick="showProcurement()"
            >
                ＋ &nbsp; New Procurement
            </button>

        </div>


        <div class="kpi-grid">

            ${kpiCard(
        "Inventory Health",
        "94%",
        "↑ 3.2% vs last month",
        "✥",
        "positive"
    )}

            ${kpiCard(
        "Stockout Risks",
        "03",
        "1 critical requires attention",
        "!",
        "danger"
    )}

            ${kpiCard(
        "Pending Approvals",
        "02",
        "Awaiting review",
        "◷",
        "warning"
    )}

            ${kpiCard(
        "Active Orders",
        "12",
        "9 on schedule",
        "□",
        "positive"
    )}

            ${kpiCard(
        "Procurement Spend",
        "₹8.4L",
        "This month",
        "₹",
        "purple"
    )}

        </div>


        <section class="ai-command-center">

            <div class="ai-badge">
                AI COMMAND CENTER
            </div>

            <h2>
                3 procurement risks detected
            </h2>

            <p>
                MediNexus has identified inventory conditions
                that may affect supply continuity.
            </p>


            <div class="ai-risk-item">

                <div style="display:flex;align-items:center;gap:12px;">

                    <div
                        style="
                            width:34px;
                            height:34px;
                            display:grid;
                            place-items:center;
                            border-radius:9px;
                            background:rgba(239,68,68,.13);
                            color:#ff7777;
                            font-weight:800;
                        "
                    >
                        ⚠
                    </div>

                    <div>

                        <div class="ai-risk-name">
                            Cefixime 200mg
                        </div>

                        <div class="ai-risk-meta">
                            Projected stockout in
                            <strong>1.5 days</strong>
                        </div>

                    </div>

                </div>


                <button onclick="showProcurement()">
                    Review →
                </button>

            </div>


            <div
                style="
                    position:absolute;
                    right:145px;
                    top:50%;
                    transform:translateY(-50%);
                    width:55px;
                    height:55px;
                    display:grid;
                    place-items:center;
                    border:1px solid rgba(45,212,191,.45);
                    border-radius:50%;
                    background:rgba(20,184,166,.08);
                    color:#5eead4;
                    font-size:24px;
                    box-shadow:0 0 30px rgba(20,184,166,.12);
                "
            >
                ✦
            </div>

        </section>


        <div class="dashboard-grid">

            <section class="panel">

                <div class="panel-header">

                    <div>

                        <div class="panel-eyebrow">
                            Predictive Intelligence
                        </div>

                        <h2>
                            Stockout Risk
                        </h2>

                    </div>

                    <button
                        class="panel-link"
                        style="border:0;background:none;cursor:pointer;"
                        onclick="showInventory()"
                    >
                        View all →
                    </button>

                </div>


                <div class="stockout-list">

                    ${stockoutItem(
        "CF",
        "Cefixime 200mg",
        "120 units remaining",
        "1.5 days",
        "high",
        22
    )}

                    ${stockoutItem(
        "PA",
        "Paracetamol 500mg",
        "1,240 units remaining",
        "6 days",
        "medium",
        46
    )}

                    ${stockoutItem(
        "AM",
        "Amoxicillin 500mg",
        "2,840 units remaining",
        "14 days",
        "low",
        78
    )}

                </div>

            </section>


            <section class="panel">

                <div class="panel-header">

                    <div>

                        <div class="panel-eyebrow">
                            Autonomous Activity
                        </div>

                        <h2>
                            AI Agent Activity
                        </h2>

                    </div>

                    <div
                        style="
                            display:flex;
                            align-items:center;
                            gap:5px;
                            color:#079f91;
                            font-size:9px;
                            font-weight:800;
                        "
                    >
                        <span
                            style="
                                width:6px;
                                height:6px;
                                border-radius:50%;
                                background:#16a34a;
                            "
                        ></span>
                        LIVE
                    </div>

                </div>


                <div class="activity-list">

                    ${activityItem(
        "Inventory analyzed",
        "Cefixime consumption trend analyzed",
        "2 minutes ago"
    )}

                    ${activityItem(
        "Risk detected",
        "Projected stockout identified",
        "4 minutes ago"
    )}

                    ${activityItem(
        "Supplier evaluated",
        "4 approved suppliers compared",
        "7 minutes ago"
    )}

                    ${activityItem(
        "Procurement monitored",
        "Order #MN-1024 tracking normally",
        "12 minutes ago"
    )}

                </div>

            </section>

        </div>


        <section
            class="panel"
            style="margin-top:20px;"
        >

            <div class="panel-header">

                <div>

                    <div class="panel-eyebrow">
                        Fast Actions
                    </div>

                    <h2>
                        Procurement Workspace
                    </h2>

                </div>

            </div>


            <div class="quick-actions">

                <div
                    class="quick-action"
                    onclick="showProcurement()"
                    style="cursor:pointer;"
                >

                    <div class="quick-action-icon">
                        ✦
                    </div>

                    <strong>
                        Start Procurement
                    </strong>

                    <span>
                        Describe what your facility needs
                        in natural language.
                    </span>

                </div>


                <div
                    class="quick-action"
                    onclick="showSuppliers()"
                    style="cursor:pointer;"
                >

                    <div class="quick-action-icon">
                        ◎
                    </div>

                    <strong>
                        Compare Suppliers
                    </strong>

                    <span>
                        Let AI evaluate price,
                        delivery and reliability.
                    </span>

                </div>


                <div
                    class="quick-action"
                    onclick="showExceptions()"
                    style="cursor:pointer;"
                >

                    <div class="quick-action-icon">
                        ⚡
                    </div>

                    <strong>
                        Resolve Exception
                    </strong>

                    <span>
                        Review supply disruptions
                        and autonomous recovery.
                    </span>

                </div>

            </div>

        </section>

    `;
}


/* =========================================================
   KPI CARD
   ========================================================= */

function kpiCard(title, value, subtitle, icon, type) {

    let iconBackground = "#eaf9f7";
    let iconColor = "#0a9b8e";

    if (type === "danger") {
        iconBackground = "#fff0f0";
        iconColor = "#df4040";
    }

    if (type === "warning") {
        iconBackground = "#fff7e6";
        iconColor = "#b77900";
    }

    if (type === "purple") {
        iconBackground = "#f2edff";
        iconColor = "#7c4ee4";
    }

    return `
        <div class="kpi-card">

            <div class="kpi-title">
                ${title}
            </div>

            <div
                class="kpi-icon"
                style="
                    background:${iconBackground};
                    color:${iconColor};
                "
            >
                ${icon}
            </div>

            <div class="kpi-value">
                ${value}
            </div>

            <div class="kpi-subtitle">
                ${subtitle}
            </div>

        </div>
    `;
}


/* =========================================================
   STOCKOUT
   ========================================================= */

function stockoutItem(
    initials,
    name,
    meta,
    days,
    risk,
    percentage
) {

    let riskClass = "risk-low";
    let fillClass = "";

    if (risk === "high") {
        riskClass = "risk-high";
        fillClass = "high";
    }

    if (risk === "medium") {
        riskClass = "risk-medium";
        fillClass = "medium";
    }

    return `
        <div
            class="stockout-item"
            style="
                display:grid !important;
                grid-template-columns:52px minmax(0,1fr) 110px !important;
                align-items:center !important;
                column-gap:16px !important;
                width:100% !important;
                min-width:0 !important;
                box-sizing:border-box !important;
                padding:18px !important;
            "
        >

            <div
                class="medicine-icon"
                style="
                    width:52px !important;
                    height:52px !important;
                    min-width:52px !important;
                    display:grid !important;
                    place-items:center !important;
                "
            >
                ${initials}
            </div>

            <div
                style="
                    min-width:0 !important;
                    width:100% !important;
                "
            >

                <div
                    class="medicine-name"
                    style="
                        display:block !important;
                        width:100% !important;
                        min-width:0 !important;
                        white-space:normal !important;
                        word-break:normal !important;
                        overflow-wrap:break-word !important;
                        font-size:15px !important;
                        font-weight:800 !important;
                        line-height:1.35 !important;
                    "
                >
                    ${name}
                </div>

                <div
                    class="medicine-meta"
                    style="
                        display:block !important;
                        width:100% !important;
                        margin-top:5px !important;
                        white-space:normal !important;
                        word-break:normal !important;
                        font-size:12px !important;
                        line-height:1.4 !important;
                    "
                >
                    ${meta}
                </div>

                <div
                    style="
                        width:100% !important;
                        margin-top:11px !important;
                    "
                >
                    <div
                        class="stock-bar"
                        style="
                            width:100% !important;
                            height:6px !important;
                        "
                    >
                        <div
                            class="stock-bar-fill ${fillClass}"
                            style="
                                width:${percentage}% !important;
                                height:100% !important;
                            "
                        ></div>
                    </div>
                </div>

            </div>

            <div
                style="
                    width:110px !important;
                    min-width:110px !important;
                    text-align:right !important;
                "
            >

                <div
                    style="
                        color:#0b2940 !important;
                        font-size:14px !important;
                        font-weight:800 !important;
                        white-space:nowrap !important;
                    "
                >
                    ${days}
                </div>

                <div
                    class="risk-badge ${riskClass}"
                    style="
                        margin-top:7px !important;
                        display:inline-block !important;
                        white-space:nowrap !important;
                    "
                >
                    ${risk.toUpperCase()} RISK
                </div>

            </div>

        </div>
    `;
}
/* =========================================================
   ACTIVITY
   ========================================================= */

function activityItem(title, description, time) {

    return `
        <div class="activity-item">

            <div class="activity-dot"></div>

            <div>

                <div class="activity-title">
                    ${title}
                </div>

                <div class="activity-time">
                    ${description}<br>
                    ${time}
                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   INVENTORY
   ========================================================= */

function showInventory() {

    updateBreadcrumb("Inventory");
    setActiveNav("Inventory");

    document.getElementById("mainContent").innerHTML = `

        <div class="page-header">

            <div>

                <div class="page-eyebrow">
                    Inventory Intelligence
                </div>

                <h1>
                    Medical Inventory
                </h1>

                <p>
                    Monitor stock levels, consumption and
                    predicted supply risks.
                </p>

            </div>

            <button
                class="primary-button"
                onclick="showProcurement()"
            >
                ＋ New Procurement
            </button>

        </div>


        <div class="inventory-summary">

            ${summaryCard("Total Medicines", "248", "Tracked")}

            ${summaryCard("Healthy Stock", "218", "87.9% of inventory")}

            ${summaryCard("Low Stock", "27", "Needs monitoring")}

            ${summaryCard("Critical", "03", "Immediate action")}

        </div>


        <div class="toolbar">

            <div class="search-box">

                <input
                    id="medicineSearch"
                    type="text"
                    placeholder="Search medicine..."
                    oninput="filterInventory()"
                >

            </div>


            <select
                id="stockFilter"
                onchange="filterInventory()"
            >

                <option value="all">All inventory</option>
                <option value="critical">Critical</option>
                <option value="low">Low stock</option>
                <option value="healthy">Healthy</option>

            </select>

        </div>


        <div class="inventory-table-container">

            <table class="inventory-table">

                <thead>

                    <tr>
                        <th>Medicine</th>
                        <th>Current Stock</th>
                        <th>Daily Usage</th>
                        <th>Days Remaining</th>
                        <th>Expiry</th>
                        <th>Status</th>
                    </tr>

                </thead>


                <tbody id="inventoryBody">

                    ${medicineRow(
        "Cefixime 200mg",
        "CEF-200",
        "120",
        "80",
        "1.5 days",
        "18 months",
        "critical"
    )}

                    ${medicineRow(
        "Paracetamol 500mg",
        "PAR-500",
        "1,240",
        "180",
        "6.8 days",
        "20 months",
        "low"
    )}

                    ${medicineRow(
        "Amoxicillin 500mg",
        "AMX-500",
        "2,840",
        "200",
        "14.2 days",
        "16 months",
        "healthy"
    )}

                    ${medicineRow(
        "Azithromycin 250mg",
        "AZI-250",
        "3,120",
        "150",
        "20.8 days",
        "22 months",
        "healthy"
    )}

                    ${medicineRow(
        "Ibuprofen 400mg",
        "IBU-400",
        "480",
        "100",
        "4.8 days",
        "9 months",
        "low"
    )}

                </tbody>

            </table>

        </div>


        <div class="ai-insight">

            <div class="ai-insight-label">
                AI Inventory Insight
            </div>

            <h3>
                Cefixime requires immediate procurement attention
            </h3>

            <p>
                Based on current consumption velocity and supplier
                lead time, MediNexus predicts a stockout in
                approximately 1.5 days. The agent recommends
                initiating procurement now to maintain supply continuity.
            </p>

        </div>
    `;
}


function summaryCard(title, value, subtitle) {

    return `
        <div class="inventory-summary-card">

            <div
                style="
                    color:#627b8d;
                    font-size:11px;
                    font-weight:700;
                "
            >
                ${title}
            </div>

            <strong>${value}</strong>

            <div
                style="
                    margin-top:5px;
                    color:#8095a4;
                    font-size:9px;
                "
            >
                ${subtitle}
            </div>

        </div>
    `;
}


function medicineRow(
    name,
    code,
    stock,
    usage,
    days,
    expiry,
    status
) {

    let badge = "success";
    let label = "Healthy";

    if (status === "low") {
        badge = "warning";
        label = "Low Stock";
    }

    if (status === "critical") {
        badge = "danger";
        label = "Critical";
    }

    return `
        <tr
            data-name="${name.toLowerCase()}"
            data-status="${status}"
        >

            <td>

                <div class="inventory-medicine">

                    <div class="inventory-medicine-icon">
                        RX
                    </div>

                    <div>

                        <strong>${name}</strong>

                        <small>${code}</small>

                    </div>

                </div>

            </td>


            <td>
                <strong>${stock}</strong> units
            </td>


            <td>
                ${usage}/day
            </td>


            <td>

                <strong
                    style="
                        color:${status === "critical"
            ? "#df4040"
            : status === "low"
                ? "#b77900"
                : "#0b2940"
        };
                    "
                >
                    ${days}
                </strong>

            </td>


            <td>
                ${expiry}
            </td>


            <td>

                <span class="status-badge ${badge}">
                    ${label}
                </span>

            </td>

        </tr>
    `;
}


function filterInventory() {

    const search =
        document.getElementById("medicineSearch")?.value.toLowerCase() || "";

    const filter =
        document.getElementById("stockFilter")?.value || "all";

    const rows =
        document.querySelectorAll("#inventoryBody tr");

    rows.forEach(row => {

        const name = row.dataset.name || "";
        const status = row.dataset.status || "";

        row.style.display =
            name.includes(search) &&
                (filter === "all" || filter === status)
                ? ""
                : "none";

    });
}


/* =========================================================
   PROCUREMENT WORKSPACE
   ========================================================= */

function showProcurement() {

    updateBreadcrumb("Procurement");
    setActiveNav("Procurement");

    document.getElementById("mainContent").innerHTML = `

        <div class="page-header">

            <div>

                <div class="page-eyebrow">
                    Autonomous Procurement
                </div>

                <h1>
                    Procurement Workspace
                </h1>

                <p>
                    Describe the requirement and let MediNexus
                    reason through the procurement decision.
                </p>

            </div>

        </div>


        <!-- PROCESS INDICATOR -->

        <div
            class="panel"
            style="
                margin-bottom:20px;
                padding:18px 24px;
            "
        >

            <div
                style="
                    display:grid;
                    grid-template-columns:repeat(5,1fr);
                    gap:10px;
                "
            >

                ${processStep("01", "Understand", true)}
                ${processStep("02", "Analyze", false)}
                ${processStep("03", "Compare", false)}
                ${processStep("04", "Decide", false)}
                ${processStep("05", "Act", false)}

            </div>

        </div>


        <div class="procurement-card">

            <div class="panel-eyebrow">
                Step 01 · Describe Requirement
            </div>

            <h2
                style="
                    margin:8px 0 8px;
                    font-size:24px;
                "
            >
                What does your facility need?
            </h2>

            <p
                style="
                    margin:0 0 20px;
                    color:#627b8d;
                    font-size:12px;
                "
            >
                Use natural language. MediNexus will extract
                medicine, quantity, deadline and priority.
            </p>


            <textarea
                id="procurementInput"
                placeholder="Example: We need 500 units of Cefixime 200mg within 5 days for the emergency department."
                style="
                    width:100%;
                    min-height:145px;
                    padding:18px;
                    resize:vertical;
                    border:1px solid #d5e2e9;
                    border-radius:14px;
                    outline:none;
                    font-family:inherit;
                    font-size:13px;
                    line-height:1.6;
                "
            ></textarea>


            <div
                style="
                    display:flex;
                    justify-content:flex-end;
                    margin-top:15px;
                "
            >

                <button
                    class="primary-button"
                    onclick="analyzeProcurement()"
                >
                    ✦ Analyze with AI →
                </button>

            </div>

        </div>


        <div
            id="procurementResult"
            style="margin-top:20px;"
        ></div>
    `;
}


/* =========================================================
   PROCESS STEP
   ========================================================= */

function processStep(number, title, active) {

    return `
        <div
            style="
                display:flex;
                align-items:center;
                gap:10px;
                padding:10px;
                border-radius:11px;
                background:${active ? "#eaf9f7" : "#f8fbfc"};
            "
        >

            <div
                style="
                    width:30px;
                    height:30px;
                    flex-shrink:0;
                    display:grid;
                    place-items:center;
                    border-radius:9px;
                    background:${active ? "#14b8a6" : "#e5edf0"};
                    color:${active ? "white" : "#8095a4"};
                    font-size:9px;
                    font-weight:800;
                "
            >
                ${number}
            </div>

            <div
                style="
                    color:${active ? "#087e73" : "#627b8d"};
                    font-size:10px;
                    font-weight:800;
                "
            >
                ${title}
            </div>

        </div>
    `;
}


/* =========================================================
   AI PROCUREMENT ANALYSIS
   ========================================================= */

async function analyzeProcurement() {

    const input = document.getElementById("procurementInput");
    const result = document.getElementById("procurementResult");

    if (!input || !input.value.trim()) {
        alert("Please enter a procurement requirement.");
        return;
    }

    result.innerHTML = `
        <div style="
            padding:25px;
            border:1px solid #d9eeeb;
            border-radius:22px;
            background:#f8fcfc;
        ">
            <div style="
                color:#079f91;
                font-size:11px;
                font-weight:800;
                letter-spacing:1px;
            ">
                ✦ MEDINEXUS AI
            </div>

            <h2 style="
                margin:10px 0 5px;
                color:#0b2940;
            ">
                Analyzing procurement requirement...
            </h2>

            <p style="
                color:#627b8d;
                font-size:12px;
            ">
                Checking inventory, suppliers and procurement risk.
            </p>
        </div>
    `;

    try {

        const text = input.value.trim();

        const quantityMatch = text.match(
            /(\d[\d,]*)\s*(?:units?|pieces?|packs?)/i
        );

        const quantity = quantityMatch
            ? parseInt(quantityMatch[1].replace(/,/g, ""))
            : 500;

        const daysMatch = text.match(
            /(?:within|in|by)\s*(\d+)\s*days?/i
        );

        const days = daysMatch
            ? parseInt(daysMatch[1])
            : 5;

        let medicine = "";

        const medicineMatch = text.match(
            /(?:need|require|procure|buy|purchase)\s+\d[\d,]*\s*(?:units?|pieces?|packs?)\s+of\s+(.+?)(?:\s+within|\s+in|\s+by|$)/i
        );

        if (medicineMatch) {
            medicine = medicineMatch[1].trim();
        } else {
            medicine = text;
        }

        medicine = medicine
            .replace(/[.,!?]+$/, "")
            .trim();

        console.log("Medicine:", medicine);
        console.log("Quantity:", quantity);
        console.log("Days:", days);

        const url =
            "http://127.0.0.1:5000/api/procurement/analyze" +
            "?medicine=" + encodeURIComponent(medicine) +
            "&quantity=" + quantity +
            "&days=" + days;

        const response = await fetch(url);
        const data = await response.json();

        console.log("Procurement response:", data);

        if (!response.ok) {

            result.innerHTML = `
                <div style="
                    padding:25px;
                    border:1px solid #f3caca;
                    border-radius:18px;
                    background:#fff7f7;
                ">

                    <h3 style="color:#dc3f3f;">
                        Procurement Analysis Failed
                    </h3>

                    <p style="color:#627b8d;">
                        ${data.message || "Medicine not found."}
                    </p>

                </div>
            `;

            return;
        }

        const supplier = data.recommended_supplier;
        const inventory = data.inventory;

        if (!supplier) {

            result.innerHTML = `
                <div style="
                    padding:25px;
                    border:1px solid #f3caca;
                    border-radius:18px;
                    background:#fff7f7;
                ">
                    <h3 style="color:#dc3f3f;">
                        No Suitable Supplier Found
                    </h3>
                </div>
            `;

            return;
        }

        window.realProcurementResult = data;

        result.innerHTML = `

            <div style="
                padding:28px;
                border:1px solid #d9eeeb;
                border-radius:22px;
                background:white;
                box-shadow:0 18px 45px rgba(9,38,58,.08);
            ">

                <div style="
                    color:#079f91;
                    font-size:11px;
                    font-weight:800;
                    letter-spacing:1px;
                ">
                    ✦ REAL AI PROCUREMENT DECISION
                </div>

                <h2 style="
                    margin:10px 0 5px;
                    color:#0b2940;
                ">
                    ${supplier.supplier_name}
                </h2>

                <p style="
                    color:#627b8d;
                    font-size:12px;
                ">
                    Recommended supplier from PostgreSQL
                </p>

                <div style="
                    display:grid;
                    grid-template-columns:repeat(4,1fr);
                    gap:12px;
                    margin-top:20px;
                ">

                    <div style="
                        padding:15px;
                        background:#f8fbfc;
                        border-radius:12px;
                    ">
                        <small>AI MATCH</small>

                        <strong style="
                            display:block;
                            font-size:24px;
                            color:#14b8a6;
                            margin-top:5px;
                        ">
                            ${supplier.final_score}%
                        </strong>
                    </div>

                    <div style="
                        padding:15px;
                        background:#f8fbfc;
                        border-radius:12px;
                    ">
                        <small>DELIVERY</small>

                        <strong style="
                            display:block;
                            font-size:20px;
                            color:#0b2940;
                            margin-top:5px;
                        ">
                            ${supplier.delivery_days} days
                        </strong>
                    </div>

                    <div style="
                        padding:15px;
                        background:#f8fbfc;
                        border-radius:12px;
                    ">
                        <small>RELIABILITY</small>

                        <strong style="
                            display:block;
                            font-size:20px;
                            color:#0b2940;
                            margin-top:5px;
                        ">
                            ${supplier.reliability_score}%
                        </strong>
                    </div>

                    <div style="
                        padding:15px;
                        background:#f8fbfc;
                        border-radius:12px;
                    ">
                        <small>AVAILABILITY</small>

                        <strong style="
                            display:block;
                            font-size:20px;
                            color:#0b2940;
                            margin-top:5px;
                        ">
                            ${supplier.availability_score}%
                        </strong>
                    </div>

                </div>

                <div style="
                    margin-top:20px;
                    padding:18px;
                    background:#eefaf8;
                    border-radius:14px;
                ">

                    <strong style="color:#087e73;">
                        ✦ INVENTORY INTELLIGENCE
                    </strong>

                    <p style="
                        color:#627b8d;
                        font-size:12px;
                        line-height:1.7;
                    ">
                        Current stock:
                        <strong>${inventory.current_stock}</strong>
                        <br>

                        Daily consumption:
                        <strong>${inventory.daily_consumption}</strong>
                        <br>

                        Days remaining:
                        <strong>${inventory.days_remaining}</strong>
                        <br>

                        Risk:
                        <strong>${inventory.risk_level}</strong>
                    </p>

                </div>

                <div style="
                    margin-top:18px;
                    padding:18px;
                    background:#f0faf9;
                    border-radius:14px;
                ">

                    <strong style="color:#087e73;">
                        ✦ WHY AI CHOSE THIS SUPPLIER
                    </strong>

                    <p style="
                        color:#627b8d;
                        font-size:12px;
                        line-height:1.7;
                    ">
                        ${data.explanation}
                    </p>

                </div>

            </div>
        `;

    } catch (error) {

        console.error("Procurement error:", error);

        result.innerHTML = `
            <div style="
                padding:25px;
                border:1px solid #f3caca;
                border-radius:18px;
                background:#fff7f7;
            ">

                <h3 style="color:#dc3f3f;">
                    Backend Connection Error
                </h3>

                <p style="color:#627b8d;">
                    Make sure Flask is running on
                    http://127.0.0.1:5000
                </p>

            </div>
        `;
    }
}
// ============================================================
// MEDINEXUS - NAVIGATION FUNCTION RECOVERY
// ============================================================

window.updateBreadcrumb = function (page) {

    const breadcrumb =
        document.getElementById("breadcrumbPage");

    if (breadcrumb) {
        breadcrumb.textContent = page;
    }
};


window.setActiveNav = function (pageName) {

    const buttons =
        document.querySelectorAll(".sidebar-nav button");

    buttons.forEach(button => {

        const text =
            button.textContent.trim();

        button.classList.remove("active");

        if (text.includes(pageName)) {
            button.classList.add("active");
        }

    });
};


window.showOrders = function () {

    updateBreadcrumb("Orders");
    setActiveNav("Orders");

    const mainContent =
        document.getElementById("mainContent");

    if (!mainContent) {
        return;
    }

    mainContent.innerHTML = `

        <div class="page-header">

            <div>

                <div class="page-eyebrow">
                    Order Control Center
                </div>

                <h1>
                    Procurement Orders
                </h1>

                <p>
                    Track every purchase order from request
                    to delivery.
                </p>

            </div>

            <button
                class="primary-button"
                onclick="showProcurement()"
            >
                ＋ New Order
            </button>

        </div>


        <div class="order-card">

            <div style="
                display:flex;
                justify-content:space-between;
                gap:20px;
                align-items:flex-start;
            ">

                <div>

                    <div class="panel-eyebrow">
                        Purchase Order
                    </div>

                    <h2 style="
                        margin:6px 0;
                        font-size:24px;
                    ">
                        #MN-1024
                    </h2>

                    <div style="
                        color:#627b8d;
                        font-size:12px;
                    ">
                        Cefixime 200mg · 500 units
                    </div>

                </div>

                <span class="status-badge info">
                    IN TRANSIT
                </span>

            </div>


            <div style="
                display:grid;
                grid-template-columns:repeat(3,1fr);
                gap:15px;
                margin-top:25px;
            ">

                <div style="
                    padding:16px;
                    border:1px solid #e2ebf0;
                    border-radius:13px;
                ">
                    <small>SUPPLIER</small>

                    <strong style="
                        display:block;
                        margin-top:6px;
                        color:#0b2940;
                    ">
                        MediNexus Supplier
                    </strong>
                </div>


                <div style="
                    padding:16px;
                    border:1px solid #e2ebf0;
                    border-radius:13px;
                ">
                    <small>ORDER VALUE</small>

                    <strong style="
                        display:block;
                        margin-top:6px;
                        color:#0b2940;
                    ">
                        ₹960
                    </strong>
                </div>


                <div style="
                    padding:16px;
                    border:1px solid #e2ebf0;
                    border-radius:13px;
                ">
                    <small>STATUS</small>

                    <strong style="
                        display:block;
                        margin-top:6px;
                        color:#0b2940;
                    ">
                        In Transit
                    </strong>
                </div>

            </div>


            <div style="
                margin-top:25px;
                padding:18px;
                background:#eefaf8;
                border-radius:14px;
            ">

                <strong style="
                    color:#087e73;
                ">
                    ✦ AI ORDER MONITORING
                </strong>

                <p style="
                    margin:7px 0 0;
                    color:#627b8d;
                    font-size:12px;
                    line-height:1.7;
                ">
                    MediNexus is monitoring the procurement
                    order and will flag delivery disruptions
                    automatically.
                </p>

            </div>

        </div>
    `;
};
// ============================================================
// MEDINEXUS - APPROVE AI DECISION → CREATE PURCHASE ORDER
// ============================================================

window.createPurchaseOrder = async function () {

    const data = window.realProcurementResult;

    if (!data || !data.recommended_supplier) {
        alert("Please run AI procurement analysis first.");
        return;
    }

    const supplier = data.recommended_supplier;
    const requirement = data.requirement;

    // Do not approve a supplier that misses the deadline
    if (
        supplier.deadline_feasible === false
    ) {
        alert(
            "Deadline Exception\n\n" +
            "No selected supplier can meet the requested deadline.\n\n" +
            "Please review the procurement requirement before approval."
        );
        return;
    }

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/orders",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    medicine: requirement.medicine,
                    supplier_id: supplier.supplier_id,
                    supplier_name: supplier.supplier_name,
                    quantity: requirement.quantity,
                    unit_price: supplier.unit_price,
                    delivery_days: supplier.delivery_days,
                    deadline_days: requirement.required_within_days,
                    ai_score: supplier.final_score
                })
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.message || "Purchase order creation failed."
            );
        }

        alert(
            "✓ PURCHASE ORDER CREATED\n\n" +
            "Order ID: PO-" + result.order.order_id + "\n" +
            "Medicine: " + result.order.medicine + "\n" +
            "Supplier: " + result.order.supplier_name + "\n" +
            "Quantity: " + result.order.quantity + "\n" +
            "Total Cost: ₹" + result.order.total_cost + "\n\n" +
            "Saved successfully to PostgreSQL."
        );

        // Open Orders page
        showOrders();

    } catch (error) {

        console.error(
            "Purchase order creation error:",
            error
        );

        alert(
            "Could not create the purchase order.\n\n" +
            error.message
        );
    }
};
// ============================================================
// ADD APPROVAL ACTION TO REAL AI RESULT
// ============================================================

const originalDisplayRealProcurementResult =
    window.displayRealProcurementResult;

window.displayRealProcurementResult = function (data) {

    if (
        typeof originalDisplayRealProcurementResult === "function"
    ) {
        originalDisplayRealProcurementResult(data);
    }

    const resultContainer =
        document.getElementById("procurementAIResult") ||
        document.getElementById("procurementResult");

    if (!resultContainer || !data.recommended_supplier) {
        return;
    }

    const supplier = data.recommended_supplier;

    const existingAction =
        document.getElementById("purchaseOrderAction");

    if (existingAction) {
        existingAction.remove();
    }

    const actionBox = document.createElement("div");

    actionBox.id = "purchaseOrderAction";

    actionBox.style.cssText = `
        margin-top:20px;
        padding:18px;
        border:1px solid #d9eeeb;
        border-radius:16px;
        background:#f7fcfc;
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:15px;
        flex-wrap:wrap;
    `;

    const canApprove =
        supplier.deadline_feasible !== false;

    actionBox.innerHTML = `
        <div>
            <strong
                style="
                    display:block;
                    color:#0b2940;
                    font-size:13px;
                "
            >
                ${canApprove
            ? "AI procurement plan ready for approval"
            : "Deadline exception detected"}
            </strong>

            <span
                style="
                    display:block;
                    margin-top:5px;
                    color:#718899;
                    font-size:11px;
                "
            >
                ${canApprove
            ? "Approve to create a real PostgreSQL purchase order."
            : "The selected supplier cannot meet the requested deadline."}
            </span>
        </div>

        <button
            class="primary-button"
            ${canApprove ? "" : "disabled"}
            onclick="createPurchaseOrder()"
            style="${canApprove
            ? ""
            : "opacity:.5;cursor:not-allowed;"}"
        >
            ${canApprove
            ? "✓ Approve & Create PO →"
            : "⚠ Deadline Not Met"}
        </button>
    `;

    resultContainer.appendChild(actionBox);
};
// ============================================================
// MEDINEXUS - SHOW APPROVE BUTTON AFTER AI ANALYSIS
// ============================================================

function addPurchaseOrderApprovalButton() {

    const container =
        document.getElementById("procurementResult") ||
        document.getElementById("procurementAIResult");

    if (!container) {
        return;
    }

    // Don't add the button twice
    if (document.getElementById("purchaseOrderApproval")) {
        return;
    }

    // Only show after a real AI result exists
    if (
        !window.realProcurementResult ||
        !window.realProcurementResult.recommended_supplier
    ) {
        return;
    }

    const supplier =
        window.realProcurementResult.recommended_supplier;

    const canApprove =
        supplier.deadline_feasible !== false;

    const actionBox =
        document.createElement("div");

    actionBox.id =
        "purchaseOrderApproval";

    actionBox.style.cssText = `
        margin-top:20px;
        padding:20px;
        border:1px solid #d9eeeb;
        border-radius:16px;
        background:#f7fcfc;
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:15px;
        flex-wrap:wrap;
    `;

    actionBox.innerHTML = `

        <div>

            <strong
                style="
                    display:block;
                    color:#0b2940;
                    font-size:14px;
                "
            >
                ${canApprove
            ? "AI procurement plan ready for approval"
            : "Deadline exception detected"}
            </strong>

            <span
                style="
                    display:block;
                    margin-top:5px;
                    color:#718899;
                    font-size:11px;
                "
            >
                ${canApprove
            ? "Approve to create a real purchase order in PostgreSQL."
            : "This supplier cannot meet the requested deadline."}
            </span>

        </div>

        <button
            class="primary-button"
            ${canApprove ? "" : "disabled"}
            onclick="createPurchaseOrder()"
            style="
                ${canApprove
            ? ""
            : "opacity:.5;cursor:not-allowed;"}
            "
        >
            ${canApprove
            ? "✓ Approve & Create PO →"
            : "⚠ Deadline Not Met"}
        </button>

    `;

    container.appendChild(actionBox);
}


// Watch for the AI result being created
const procurementObserver =
    new MutationObserver(function () {

        addPurchaseOrderApprovalButton();

    });


// Start watching the page
procurementObserver.observe(
    document.body,
    {
        childList: true,
        subtree: true
    }
);
// ============================================================
// MEDINEXUS - REAL POSTGRESQL ORDERS
// ============================================================

window.showRealOrders = async function () {

    updateBreadcrumb("Orders");
    setActiveNav("Orders");

    const mainContent =
        document.getElementById("mainContent");

    mainContent.innerHTML = `
        <div class="page-header">
            <div>
                <div class="page-eyebrow">
                    Order Control Center
                </div>

                <h1>
                    Procurement Orders
                </h1>

                <p>
                    Live purchase orders from PostgreSQL.
                </p>
            </div>

            <button
                class="primary-button"
                onclick="showProcurement()"
            >
                ＋ New Order
            </button>
        </div>

        <div
            id="realOrdersContainer"
            style="margin-top:20px;"
        >
            <div class="panel">
                <strong>Loading purchase orders...</strong>
            </div>
        </div>
    `;

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/orders"
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.message || "Failed to load orders"
            );
        }

        const container =
            document.getElementById("realOrdersContainer");

        if (!data.orders || data.orders.length === 0) {

            container.innerHTML = `
                <div class="panel">
                    <h2>No purchase orders yet</h2>

                    <p>
                        Approved AI procurement decisions
                        will appear here.
                    </p>
                </div>
            `;

            return;
        }

        container.innerHTML = data.orders.map(order => `

            <div
                class="order-card"
                style="margin-bottom:18px;"
            >

                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        align-items:flex-start;
                        gap:20px;
                    "
                >

                    <div>

                        <div class="panel-eyebrow">
                            PostgreSQL Purchase Order
                        </div>

                        <h2
                            style="
                                margin:6px 0;
                                font-size:24px;
                            "
                        >
                            PO-${order.order_id}
                        </h2>

                        <div
                            style="
                                color:#627b8d;
                                font-size:12px;
                            "
                        >
                            ${order.medicine}
                            · ${order.quantity} units
                        </div>

                    </div>

                    <span class="status-badge info">
                        ${order.order_status.toUpperCase()}
                    </span>

                </div>


                <div
                    style="
                        display:grid;
                        grid-template-columns:
                            repeat(4,1fr);
                        gap:12px;
                        margin-top:20px;
                    "
                >

                    <div class="order-info-box">
                        <span>Supplier</span>
                        <strong>
                            ${order.supplier_name}
                        </strong>
                    </div>

                    <div class="order-info-box">
                        <span>Total Cost</span>
                        <strong>
                            ₹${order.total_cost.toFixed(2)}
                        </strong>
                    </div>

                    <div class="order-info-box">
                        <span>Delivery</span>
                        <strong>
                            ${order.delivery_days} days
                        </strong>
                    </div>

                    <div class="order-info-box">
                        <span>AI Score</span>
                        <strong>
                            ${order.ai_score ?? "—"}%
                        </strong>
                    </div>

                </div>


                <div
                    style="
                        margin-top:15px;
                        padding:12px 15px;
                        border-radius:10px;
                        background:#f7fcfc;
                        color:#627b8d;
                        font-size:11px;
                    "
                >
                    Requested deadline:
                    <strong>
                        ${order.deadline_days} days
                    </strong>
                    · Unit price:
                    <strong>
                        ₹${order.unit_price.toFixed(2)}
                    </strong>
                </div>

            </div>

        `).join("");

    } catch (error) {

        console.error(
            "Orders backend error:",
            error
        );

        document.getElementById(
            "realOrdersContainer"
        ).innerHTML = `
            <div class="panel">

                <h2>
                    Could not load orders
                </h2>

                <p>
                    ${error.message}
                </p>

            </div>
        `;
    }
};
showOrders = showRealOrders;
// ======================================================
// REAL AI RECOVERY - BACKEND CONNECTED
// ======================================================

window.simulateRecovery = async function () {
    try {
        console.log("Starting real recovery analysis...");

        // Use the latest procurement result if available
        const procurement = window.realProcurementResult || {};

        const medicine =
            procurement?.requirement?.medicine ||
            "Cefixime 200mg";

        const quantity =
            procurement?.requirement?.quantity ||
            500;

        const days =
            procurement?.requirement?.required_days ||
            5;

        // Demo disrupted supplier
        const disruptedSupplierId =
            procurement?.recommended_supplier?.supplier_id ||
            "SUP001";

        // Show loading state
        const mainContent = document.getElementById("mainContent");

        if (mainContent) {
            mainContent.innerHTML = `
                <div class="page-header">
                    <div>
                        <div class="eyebrow">AI RECOVERY ENGINE</div>
                        <h1>Autonomous Recovery</h1>
                        <p>Replanning procurement after supplier disruption.</p>
                    </div>
                </div>

                <div class="ai-command-card">
                    <div class="ai-command-icon">◉</div>
                    <div>
                        <strong>AI is analyzing alternate suppliers...</strong>
                        <p>
                            Checking delivery feasibility, reliability,
                            availability, price and procurement risk.
                        </p>
                    </div>
                </div>
            `;
        }

        // Call Flask backend
        const response = await fetch(
            "http://127.0.0.1:5000/api/procurement/recover",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    medicine: medicine,
                    quantity: quantity,
                    days: days,
                    disrupted_supplier_id: disruptedSupplierId
                })
            }
        );

        const data = await response.json();

        console.log("Recovery API response:", data);

        if (!response.ok || data.status !== "success") {
            throw new Error(
                data.message || "Recovery analysis failed"
            );
        }

        // Save result globally
        window.recoveryResult = data;

        const alternative = data.recovery.alternative_supplier;

        // Display real recovery result
        if (mainContent) {
            mainContent.innerHTML = `
                <div class="page-header">
                    <div>
                        <div class="eyebrow">AI RECOVERY ENGINE</div>
                        <h1>Autonomous Recovery Plan</h1>
                        <p>
                            Supplier disruption detected. AI has evaluated
                            alternate procurement options.
                        </p>
                    </div>
                </div>

                <div class="ai-command-card">
                    <div class="ai-command-icon">✓</div>
                    <div>
                        <strong>Recovery plan generated</strong>
                        <p>
                            The disrupted supplier was excluded and an
                            alternate approved supplier was evaluated.
                        </p>
                    </div>
                </div>

                <div class="kpi-grid">

                    <div class="kpi-card">
                        <span class="kpi-label">Medicine</span>
                        <strong>${medicine}</strong>
                        <small>${quantity} units</small>
                    </div>

                    <div class="kpi-card">
                        <span class="kpi-label">Deadline</span>
                        <strong>${days} days</strong>
                        <small>Required delivery window</small>
                    </div>

                    <div class="kpi-card">
                        <span class="kpi-label">AI Score</span>
                        <strong>${alternative.final_score}%</strong>
                        <small>Recovery suitability</small>
                    </div>

                    <div class="kpi-card">
                        <span class="kpi-label">Delivery</span>
                        <strong>${alternative.delivery_days} days</strong>
                        <small>
                            ${alternative.deadline_feasible
                    ? "Deadline feasible"
                    : "Deadline at risk"}
                        </small>
                    </div>

                </div>

                <div class="dashboard-grid">

                    <div class="panel">
                        <div class="panel-header">
                            <div>
                                <div class="eyebrow">ALTERNATE SUPPLIER</div>
                                <h2>${alternative.supplier_name}</h2>
                            </div>
                            <span class="status-badge healthy">
                                ${alternative.risk_level}
                            </span>
                        </div>

                        <div class="supplier-metrics">

                            <div class="metric-box">
                                <span>Delivery</span>
                                <strong>${alternative.delivery_days} days</strong>
                            </div>

                            <div class="metric-box">
                                <span>Reliability</span>
                                <strong>${alternative.reliability_score}%</strong>
                            </div>

                            <div class="metric-box">
                                <span>Availability</span>
                                <strong>${alternative.availability_score}%</strong>
                            </div>

                            <div class="metric-box">
                                <span>Unit Price</span>
                                <strong>₹${alternative.unit_price}</strong>
                            </div>

                        </div>

                        <div class="ai-insight">
                            <strong>AI Proposed Recovery</strong>

                            <p>
                                ${data.recovery.recovery_message}
                            </p>

                            <p>
                                Estimated procurement value:
                                <strong>
                                    ₹${alternative.estimated_total_cost}
                                </strong>
                            </p>
                        </div>

                        <button
                            class="primary-btn"
                            onclick="approveRecoveryPlan()"
                        >
                            ✓ Approve Recovery & Create PO
                        </button>

                        <button
                            class="secondary-btn"
                            onclick="showOrders()"
                            style="margin-left:10px;"
                        >
                            View Orders
                        </button>

                    </div>

                    <div class="panel">

                        <div class="panel-header">
                            <div>
                                <div class="eyebrow">RECOVERY PIPELINE</div>
                                <h2>AI Decision Process</h2>
                            </div>
                        </div>

                        <div class="timeline">

                            <div class="timeline-item completed">
                                <span>✓</span>
                                <div>
                                    <strong>Disruption detected</strong>
                                    <p>Original supplier excluded.</p>
                                </div>
                            </div>

                            <div class="timeline-item completed">
                                <span>✓</span>
                                <div>
                                    <strong>Supplier search</strong>
                                    <p>Approved alternatives evaluated.</p>
                                </div>
                            </div>

                            <div class="timeline-item completed">
                                <span>✓</span>
                                <div>
                                    <strong>Risk recalculated</strong>
                                    <p>Delivery, reliability and availability analyzed.</p>
                                </div>
                            </div>

                            <div class="timeline-item completed">
                                <span>✓</span>
                                <div>
                                    <strong>Recovery proposed</strong>
                                    <p>Human approval required before ordering.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            `;
        }

    } catch (error) {

        console.error("Recovery error:", error);

        const mainContent = document.getElementById("mainContent");

        if (mainContent) {
            mainContent.innerHTML = `
                <div class="ai-command-card">
                    <div class="ai-command-icon">!</div>
                    <div>
                        <strong>Recovery analysis failed</strong>
                        <p>${error.message}</p>

                        <button
                            class="primary-btn"
                            onclick="simulateRecovery()"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            `;
        }
    }
};
// ======================================================
// EXCEPTIONS NAVIGATION FIX
// ======================================================

window.showExceptions = function () {
    updateBreadcrumb("Exceptions");
    setActiveNav("Exceptions");

    const mainContent = document.getElementById("mainContent");

    if (!mainContent) return;

    mainContent.innerHTML = `
        <div class="page-header">
            <div>
                <div class="eyebrow">MISSION CONTROL</div>
                <h1>Exceptions</h1>
                <p>AI-monitored procurement exceptions and recovery actions.</p>
            </div>
        </div>

        <div class="kpi-grid">

            <div class="kpi-card">
                <span class="kpi-label">Active Exceptions</span>
                <strong>03</strong>
                <small>AI monitoring active</small>
            </div>

            <div class="kpi-card">
                <span class="kpi-label">Critical</span>
                <strong>01</strong>
                <small>Requires attention</small>
            </div>

            <div class="kpi-card">
                <span class="kpi-label">AI Actions Ready</span>
                <strong>03</strong>
                <small>Recovery actions prepared</small>
            </div>

            <div class="kpi-card">
                <span class="kpi-label">Resolved Today</span>
                <strong>07</strong>
                <small>Exceptions resolved</small>
            </div>

        </div>

        <div class="panel">
            <div class="panel-header">
                <div>
                    <div class="eyebrow">AI EXCEPTION ENGINE</div>
                    <h2>Procurement exceptions</h2>
                </div>
            </div>

            <div class="exception-card">
                <div>
                    <span class="status-badge critical">CRITICAL</span>
                    <h3>Cefixime 200mg</h3>
                    <p>
                        Projected stockout in 1.5 days.
                        Emergency procurement required.
                    </p>
                </div>

                <button
                    class="primary-btn"
                    onclick="simulateRecovery()"
                >
                    Simulate Recovery
                </button>
            </div>

            <div class="exception-card">
                <div>
                    <span class="status-badge warning">SUPPLIER DELAY</span>
                    <h3>Supplier delivery disruption</h3>
                    <p>
                        Original supplier availability has changed.
                        Evaluate alternate supplier.
                    </p>
                </div>

                <button
                    class="secondary-btn"
                    onclick="simulateRecovery()"
                >
                    Simulate Recovery
                </button>
            </div>

            <div class="exception-card">
                <div>
                    <span class="status-badge warning">EXPIRY</span>
                    <h3>Expiry exposure detected</h3>
                    <p>
                        AI identified inventory with elevated
                        wastage exposure.
                    </p>
                </div>

                <button
                    class="secondary-btn"
                    onclick="showInventory()"
                >
                    View Expiry Plan
                </button>
            </div>

        </div>

        <div class="panel">
            <div class="panel-header">
                <div>
                    <div class="eyebrow">AUTONOMOUS RECOVERY PIPELINE</div>
                    <h2>Detect → Analyze → Decide → Propose → Approve</h2>
                </div>
            </div>

            <div class="timeline">

                <div class="timeline-item completed">
                    <span>✓</span>
                    <div>
                        <strong>Detect</strong>
                        <p>Monitor inventory and supplier events.</p>
                    </div>
                </div>

                <div class="timeline-item completed">
                    <span>✓</span>
                    <div>
                        <strong>Analyze</strong>
                        <p>Calculate procurement and stockout risk.</p>
                    </div>
                </div>

                <div class="timeline-item completed">
                    <span>✓</span>
                    <div>
                        <strong>Decide</strong>
                        <p>Evaluate alternate suppliers.</p>
                    </div>
                </div>

                <div class="timeline-item completed">
                    <span>✓</span>
                    <div>
                        <strong>Propose</strong>
                        <p>Prepare a recovery plan for approval.</p>
                    </div>
                </div>

            </div>
        </div>
    `;
};
// ======================================================
// RECOVERY APPROVAL - CREATE REAL PURCHASE ORDER
// ======================================================

window.approveRecoveryPlan = async function () {

    try {

        console.log("Approving recovery plan...");

        const recovery = window.recoveryResult;

        if (!recovery || !recovery.recovery) {
            alert("Recovery result not found. Please run Simulate Recovery again.");
            return;
        }

        const alternative = recovery.recovery.alternative_supplier;

        if (!alternative) {
            alert("No alternate supplier was found.");
            return;
        }

        const medicine =
            recovery.requirement?.medicine ||
            "Cefixime 200mg";

        const quantity =
            recovery.requirement?.quantity ||
            500;

        const deadline =
            recovery.requirement?.required_days ||
            5;

        console.log("Creating recovery purchase order:", {
            medicine,
            quantity,
            supplier: alternative.supplier_name
        });

        const response = await fetch(
            "http://127.0.0.1:5000/api/orders",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({

                    medicine: medicine,

                    supplier_id:
                        alternative.supplier_id,

                    supplier_name:
                        alternative.supplier_name,

                    quantity: quantity,

                    unit_price:
                        alternative.unit_price,

                    delivery_days:
                        alternative.delivery_days,

                    deadline_days:
                        deadline,

                    ai_score:
                        alternative.final_score
                })
            }
        );

        const data = await response.json();

        console.log("Recovery PO response:", data);

        if (!response.ok || data.status !== "success") {
            throw new Error(
                data.message || "Could not create purchase order."
            );
        }

        alert(
            "RECOVERY PLAN APPROVED\n\n" +
            "Purchase Order Created Successfully\n\n" +
            "Medicine: " + medicine + "\n" +
            "Quantity: " + quantity + "\n" +
            "Supplier: " + alternative.supplier_name + "\n" +
            "Delivery: " + alternative.delivery_days + " days\n" +
            "Total: ₹" + alternative.estimated_total_cost
        );

        // Open real Orders page
        showOrders();

    } catch (error) {

        console.error(
            "Recovery approval error:",
            error
        );

        alert(
            "Could not create recovery purchase order.\n\n" +
            error.message
        );
    }
};
// ======================================================
// REAL EXCEPTIONS PAGE - BACKEND CONNECTED
// ======================================================

window.showRealExceptions = async function () {

    updateBreadcrumb("Exceptions");
    setActiveNav("Exceptions");

    const mainContent = document.getElementById("mainContent");

    if (!mainContent) return;

    // Loading screen
    mainContent.innerHTML = `
        <div class="page-header">
            <div>
                <div class="eyebrow">MISSION CONTROL</div>
                <h1>Exceptions</h1>
                <p>Loading live procurement exceptions...</p>
            </div>
        </div>

        <div class="ai-command-card">
            <div class="ai-command-icon">◉</div>
            <div>
                <strong>AI Exception Engine</strong>
                <p>Analyzing live inventory risk from PostgreSQL...</p>
            </div>
        </div>
    `;

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/exceptions"
        );

        const data = await response.json();

        console.log("Backend exceptions loaded:", data);

        if (!response.ok || data.status !== "success") {
            throw new Error(
                data.message || "Could not load exceptions."
            );
        }

        const exceptions = data.exceptions || [];

        const criticalCount = data.critical_count || 0;

        const highCount = exceptions.filter(
            item => item.severity === "High"
        ).length;

        mainContent.innerHTML = `
            <div class="page-header">
                <div>
                    <div class="eyebrow">MISSION CONTROL</div>
                    <h1>Exceptions</h1>
                    <p>
                        Live procurement risks detected from
                        inventory intelligence.
                    </p>
                </div>
            </div>

            <div class="kpi-grid">

                <div class="kpi-card">
                    <span class="kpi-label">Active Exceptions</span>
                    <strong>${exceptions.length}</strong>
                    <small>Live from PostgreSQL</small>
                </div>

                <div class="kpi-card">
                    <span class="kpi-label">Critical</span>
                    <strong>${criticalCount}</strong>
                    <small>Immediate stockout risk</small>
                </div>

                <div class="kpi-card">
                    <span class="kpi-label">High Risk</span>
                    <strong>${highCount}</strong>
                    <small>Requires monitoring</small>
                </div>

                <div class="kpi-card">
                    <span class="kpi-label">AI Actions Ready</span>
                    <strong>${exceptions.length}</strong>
                    <small>Recovery analysis available</small>
                </div>

            </div>

            <div class="panel">

                <div class="panel-header">
                    <div>
                        <div class="eyebrow">AI EXCEPTION ENGINE</div>
                        <h2>Live Procurement Exceptions</h2>
                    </div>

                    <span class="status-badge healthy">
                        LIVE
                    </span>
                </div>

                <div id="realExceptionsList">

                    ${exceptions.length === 0
                ?
                `
                        <div class="ai-insight">
                            <strong>No active exceptions</strong>
                            <p>
                                Inventory is currently within
                                monitored thresholds.
                            </p>
                        </div>
                        `
                :
                exceptions.map((item, index) => {

                    const severityClass =
                        item.severity === "Critical"
                            ? "critical"
                            : "warning";

                    return `
                                <div class="exception-card">

                                    <div>

                                        <span class="status-badge ${severityClass}">
                                            ${item.severity.toUpperCase()}
                                        </span>

                                        <h3>
                                            ${item.medicine}
                                        </h3>

                                        <p>
                                            Stockout projected in
                                            <strong>
                                                ${item.days_remaining} days
                                            </strong>.
                                        </p>

                                        <p>
                                            Current stock:
                                            <strong>
                                                ${item.current_stock}
                                            </strong>

                                            &nbsp;|&nbsp;

                                            Daily consumption:
                                            <strong>
                                                ${item.daily_consumption}
                                            </strong>
                                        </p>

                                        <p>
                                            Risk level:
                                            <strong>
                                                ${item.risk_level}
                                            </strong>
                                        </p>

                                    </div>

                                    <button
                                        class="primary-btn"
                                        onclick="runExceptionRecovery(
                                            '${item.medicine.replace(/'/g, "\\'")}'
                                        )"
                                    >
                                        AI Recovery
                                    </button>

                                </div>
                            `;
                }).join("")
            }

                </div>

            </div>

            <div class="panel">

                <div class="panel-header">
                    <div>
                        <div class="eyebrow">
                            AUTONOMOUS RECOVERY PIPELINE
                        </div>

                        <h2>
                            Detect → Analyze → Decide → Propose → Approve
                        </h2>
                    </div>
                </div>

                <div class="timeline">

                    <div class="timeline-item completed">
                        <span>✓</span>
                        <div>
                            <strong>Detect</strong>
                            <p>
                                PostgreSQL inventory continuously
                                provides stock risk signals.
                            </p>
                        </div>
                    </div>

                    <div class="timeline-item completed">
                        <span>✓</span>
                        <div>
                            <strong>Analyze</strong>
                            <p>
                                AI evaluates stock runway and
                                procurement urgency.
                            </p>
                        </div>
                    </div>

                    <div class="timeline-item completed">
                        <span>✓</span>
                        <div>
                            <strong>Decide</strong>
                            <p>
                                Approved suppliers are evaluated
                                against procurement requirements.
                            </p>
                        </div>
                    </div>

                    <div class="timeline-item completed">
                        <span>✓</span>
                        <div>
                            <strong>Propose</strong>
                            <p>
                                A recovery plan is prepared for
                                human approval.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        `;

    } catch (error) {

        console.error(
            "Exceptions loading error:",
            error
        );

        mainContent.innerHTML = `
            <div class="ai-command-card">
                <div class="ai-command-icon">!</div>

                <div>
                    <strong>
                        Could not load live exceptions
                    </strong>

                    <p>
                        ${error.message}
                    </p>

                    <button
                        class="primary-btn"
                        onclick="showRealExceptions()"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        `;
    }
};


// ======================================================
// RUN RECOVERY FROM AN EXCEPTION
// ======================================================

window.runExceptionRecovery = function (medicine) {

    console.log(
        "Starting recovery for:",
        medicine
    );

    // Store selected medicine
    window.exceptionMedicine = medicine;

    // For the demo, use 500 units and a 5-day requirement.
    // The recovery API will perform the real supplier analysis.
    window.simulateRecovery();
};


// Replace existing Exceptions navigation
window.showExceptions = window.showRealExceptions;
// ======================================================
// CLEAN MEDICINE NAMES FOR EXCEPTIONS UI
// ======================================================

window.cleanMedicineName = function (name) {

    if (!name) return "Unknown Medicine";

    let clean = name;

    // Remove common dosage/formulation details
    clean = clean
        .replace(/\s+Oral Tablet.*$/i, "")
        .replace(/\s+Oral Capsule.*$/i, "")
        .replace(/\s+Oral Solution.*$/i, "")
        .replace(/\s+Oral Suspension.*$/i, "")
        .replace(/\s+Oral Powder.*$/i, "")
        .replace(/\s+Oral Liquid.*$/i, "");

    // Keep long names from taking over the dashboard
    if (clean.length > 55) {
        clean = clean.substring(0, 52) + "...";
    }

    return clean;
};
// ======================================================
// EXCEPTIONS UI - CLEAN MEDICINE NAMES
// ======================================================

window.showRealExceptions = async function () {

    updateBreadcrumb("Exceptions");
    setActiveNav("Exceptions");

    const mainContent = document.getElementById("mainContent");

    if (!mainContent) return;

    mainContent.innerHTML = `
        <div class="page-header">
            <div>
                <div class="eyebrow">MISSION CONTROL</div>
                <h1>Exceptions</h1>
                <p>Loading live procurement exceptions...</p>
            </div>
        </div>

        <div class="ai-command-card">
            <div class="ai-command-icon">◉</div>
            <div>
                <strong>AI Exception Engine</strong>
                <p>Analyzing live inventory risk from PostgreSQL...</p>
            </div>
        </div>
    `;

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/exceptions"
        );

        const data = await response.json();

        if (!response.ok || data.status !== "success") {
            throw new Error(
                data.message || "Could not load exceptions."
            );
        }

        const exceptions = data.exceptions || [];

        const criticalCount = data.critical_count || 0;

        const highCount = exceptions.filter(
            item => item.severity === "High"
        ).length;

        mainContent.innerHTML = `
            <div class="page-header">
                <div>
                    <div class="eyebrow">MISSION CONTROL</div>
                    <h1>Exceptions</h1>
                    <p>
                        Live procurement risks detected from
                        inventory intelligence.
                    </p>
                </div>
            </div>

            <div class="kpi-grid">

                <div class="kpi-card">
                    <span class="kpi-label">Active Exceptions</span>
                    <strong>${exceptions.length}</strong>
                    <small>Live from PostgreSQL</small>
                </div>

                <div class="kpi-card">
                    <span class="kpi-label">Critical</span>
                    <strong>${criticalCount}</strong>
                    <small>Immediate stockout risk</small>
                </div>

                <div class="kpi-card">
                    <span class="kpi-label">High Risk</span>
                    <strong>${highCount}</strong>
                    <small>Requires monitoring</small>
                </div>

                <div class="kpi-card">
                    <span class="kpi-label">AI Actions Ready</span>
                    <strong>${exceptions.length}</strong>
                    <small>Recovery analysis available</small>
                </div>

            </div>

            <div class="panel">

                <div class="panel-header">
                    <div>
                        <div class="eyebrow">AI EXCEPTION ENGINE</div>
                        <h2>Live Procurement Exceptions</h2>
                    </div>

                    <span class="status-badge healthy">
                        LIVE
                    </span>
                </div>

                <div id="realExceptionsList">

                    ${exceptions.length === 0
                ?
                `
                        <div class="ai-insight">
                            <strong>No active exceptions</strong>
                            <p>
                                Inventory is currently within
                                monitored thresholds.
                            </p>
                        </div>
                        `
                :
                exceptions.map((item) => {

                    const severityClass =
                        item.severity === "Critical"
                            ? "critical"
                            : "warning";

                    const displayName =
                        cleanMedicineName(item.medicine);

                    return `
                                <div class="exception-card">

                                    <div>

                                        <span class="status-badge ${severityClass}">
                                            ${item.severity.toUpperCase()}
                                        </span>

                                        <h3>
                                            ${displayName}
                                        </h3>

                                        <p>
                                            Stockout projected in
                                            <strong>
                                                ${item.days_remaining} days
                                            </strong>.
                                        </p>

                                        <p>
                                            Current stock:
                                            <strong>
                                                ${item.current_stock}
                                            </strong>

                                            &nbsp;|&nbsp;

                                            Daily consumption:
                                            <strong>
                                                ${item.daily_consumption}
                                            </strong>
                                        </p>

                                        <p>
                                            Risk level:
                                            <strong>
                                                ${item.risk_level}
                                            </strong>
                                        </p>

                                    </div>

                                    <button
                                        class="primary-btn"
                                        onclick="runExceptionRecovery(
                                            '${item.medicine.replace(/'/g, "\\'")}'
                                        )"
                                    >
                                        AI Recovery
                                    </button>

                                </div>
                            `;

                }).join("")
            }

                </div>

            </div>

            <div class="panel">

                <div class="panel-header">
                    <div>
                        <div class="eyebrow">
                            AUTONOMOUS RECOVERY PIPELINE
                        </div>

                        <h2>
                            Detect → Analyze → Decide → Propose → Approve
                        </h2>
                    </div>
                </div>

                <div class="timeline">

                    <div class="timeline-item completed">
                        <span>✓</span>
                        <div>
                            <strong>Detect</strong>
                            <p>
                                PostgreSQL inventory provides
                                stock risk signals.
                            </p>
                        </div>
                    </div>

                    <div class="timeline-item completed">
                        <span>✓</span>
                        <div>
                            <strong>Analyze</strong>
                            <p>
                                AI evaluates stock runway and
                                procurement urgency.
                            </p>
                        </div>
                    </div>

                    <div class="timeline-item completed">
                        <span>✓</span>
                        <div>
                            <strong>Decide</strong>
                            <p>
                                Approved suppliers are evaluated
                                against procurement requirements.
                            </p>
                        </div>
                    </div>

                    <div class="timeline-item completed">
                        <span>✓</span>
                        <div>
                            <strong>Propose</strong>
                            <p>
                                A recovery plan is prepared for
                                human approval.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        `;

    } catch (error) {

        console.error(
            "Exceptions loading error:",
            error
        );

        mainContent.innerHTML = `
            <div class="ai-command-card">
                <div class="ai-command-icon">!</div>

                <div>
                    <strong>
                        Could not load live exceptions
                    </strong>

                    <p>
                        ${error.message}
                    </p>

                    <button
                        class="primary-btn"
                        onclick="showRealExceptions()"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        `;
    }
};

// Keep Exceptions navigation connected
window.showExceptions = window.showRealExceptions;
// ======================================================
// EXCEPTION-SPECIFIC AI RECOVERY
// ======================================================

window.runExceptionRecovery = async function (medicine) {

    console.log("Starting recovery for selected exception:", medicine);

    // Store selected medicine
    window.exceptionMedicine = medicine;

    // Demo procurement quantity and deadline
    // These can be made configurable later.
    const quantity = 500;
    const deadline = 5;

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/procurement/recover",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    medicine: medicine,
                    quantity: quantity,
                    days: deadline,
                    disrupted_supplier_id: "SUP001"
                })
            }
        );

        const data = await response.json();

        console.log("Exception recovery result:", data);

        if (!response.ok || data.status !== "success") {
            throw new Error(
                data.message || "Recovery analysis failed."
            );
        }

        // Save the real recovery result
        window.recoveryResult = data;

        // Display the existing recovery screen
        const mainContent =
            document.getElementById("mainContent");

        if (!mainContent) return;

        const alternative =
            data.recovery.alternative_supplier;

        mainContent.innerHTML = `
            <div class="page-header">
                <div>
                    <div class="eyebrow">
                        AI RECOVERY ENGINE
                    </div>

                    <h1>
                        Autonomous Recovery Plan
                    </h1>

                    <p>
                        Stockout exception detected for
                        <strong>${cleanMedicineName(medicine)}</strong>.
                    </p>
                </div>
            </div>

            <div class="ai-command-card">

                <div class="ai-command-icon">
                    ✓
                </div>

                <div>
                    <strong>
                        Recovery plan generated
                    </strong>

                    <p>
                        AI excluded the disrupted supplier
                        and evaluated approved alternatives.
                    </p>
                </div>

            </div>

            <div class="kpi-grid">

                <div class="kpi-card">
                    <span class="kpi-label">
                        Medicine
                    </span>

                    <strong>
                        ${cleanMedicineName(medicine)}
                    </strong>

                    <small>
                        ${quantity} units
                    </small>
                </div>

                <div class="kpi-card">
                    <span class="kpi-label">
                        Deadline
                    </span>

                    <strong>
                        ${deadline} days
                    </strong>

                    <small>
                        Required delivery window
                    </small>
                </div>

                <div class="kpi-card">
                    <span class="kpi-label">
                        AI Score
                    </span>

                    <strong>
                        ${alternative.final_score}%
                    </strong>

                    <small>
                        Recovery suitability
                    </small>
                </div>

                <div class="kpi-card">
                    <span class="kpi-label">
                        Delivery
                    </span>

                    <strong>
                        ${alternative.delivery_days} days
                    </strong>

                    <small>
                        ${alternative.deadline_feasible
                ? "Deadline feasible"
                : "Deadline at risk"
            }
                    </small>
                </div>

            </div>

            <div class="panel">

                <div class="panel-header">

                    <div>
                        <div class="eyebrow">
                            ALTERNATE SUPPLIER
                        </div>

                        <h2>
                            ${alternative.supplier_name}
                        </h2>
                    </div>

                    <span class="status-badge healthy">
                        ${alternative.risk_level}
                    </span>

                </div>

                <div class="supplier-metrics">

                    <div class="metric-box">
                        <span>Delivery</span>
                        <strong>
                            ${alternative.delivery_days} days
                        </strong>
                    </div>

                    <div class="metric-box">
                        <span>Reliability</span>
                        <strong>
                            ${alternative.reliability_score}%
                        </strong>
                    </div>

                    <div class="metric-box">
                        <span>Availability</span>
                        <strong>
                            ${alternative.availability_score}%
                        </strong>
                    </div>

                    <div class="metric-box">
                        <span>Unit Price</span>
                        <strong>
                            ₹${alternative.unit_price}
                        </strong>
                    </div>

                </div>

                <div class="ai-insight">

                    <strong>
                        AI Proposed Recovery
                    </strong>

                    <p>
                        ${data.recovery.recovery_message}
                    </p>

                    <p>
                        Estimated procurement value:
                        <strong>
                            ₹${alternative.estimated_total_cost}
                        </strong>
                    </p>

                </div>

                <button
                    class="primary-btn"
                    onclick="approveRecoveryPlan()"
                >
                    ✓ Approve Recovery & Create PO
                </button>

                <button
                    class="secondary-btn"
                    onclick="showExceptions()"
                    style="margin-left:10px;"
                >
                    ← Back to Exceptions
                </button>

            </div>
        `;

    } catch (error) {

        console.error(
            "Exception recovery error:",
            error
        );

        alert(
            "Recovery analysis failed.\n\n" +
            error.message
        );
    }
};
// ======================================================
// DYNAMIC EXCEPTION RECOVERY
// Uses real inventory values
// ======================================================

window.runExceptionRecovery = async function (medicine) {

    console.log("Selected exception:", medicine);

    try {

        // Get live inventory data
        const inventoryResponse = await fetch(
            "http://127.0.0.1:5000/api/inventory"
        );

        const inventoryData = await inventoryResponse.json();

        if (
            !inventoryResponse.ok ||
            inventoryData.status !== "success"
        ) {
            throw new Error(
                inventoryData.message ||
                "Could not load inventory."
            );
        }

        // Find the selected medicine
        const selectedItem =
            inventoryData.inventory.find(
                item =>
                    item.medicine_name.toLowerCase() ===
                    medicine.toLowerCase()
            );

        if (!selectedItem) {
            throw new Error(
                "Selected medicine was not found in inventory."
            );
        }

        console.log(
            "Selected inventory:",
            selectedItem
        );

        // ------------------------------------------------
        // Calculate procurement requirement
        // ------------------------------------------------

        const dailyConsumption =
            Number(selectedItem.daily_consumption);

        const currentStock =
            Number(selectedItem.current_stock);

        const daysRemaining =
            Number(selectedItem.days_remaining);

        // Target stock coverage after replenishment
        const targetDays = 7;

        let requiredQuantity =
            Math.ceil(
                dailyConsumption * targetDays
                - currentStock
            );

        // Safety floor
        if (requiredQuantity < 1) {
            requiredQuantity = 1;
        }

        // Emergency deadline
        let deadlineDays =
            Math.max(
                1,
                Math.ceil(daysRemaining)
            );

        console.log("Calculated procurement:", {
            medicine,
            currentStock,
            dailyConsumption,
            daysRemaining,
            requiredQuantity,
            deadlineDays
        });

        // ------------------------------------------------
        // Call recovery engine
        // ------------------------------------------------

        const recoveryResponse = await fetch(
            "http://127.0.0.1:5000/api/procurement/recover",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    medicine: medicine,

                    quantity: requiredQuantity,

                    days: deadlineDays,

                    disrupted_supplier_id: "SUP001"
                })
            }
        );

        const recoveryData =
            await recoveryResponse.json();

        console.log(
            "Dynamic recovery result:",
            recoveryData
        );

        if (
            !recoveryResponse.ok ||
            recoveryData.status !== "success"
        ) {
            throw new Error(
                recoveryData.message ||
                "Recovery analysis failed."
            );
        }

        // Save for approval
        window.recoveryResult =
            recoveryData;

        window.recoveryResult.dynamic_requirement = {
            current_stock: currentStock,
            daily_consumption: dailyConsumption,
            days_remaining: daysRemaining,
            required_quantity: requiredQuantity,
            deadline_days: deadlineDays
        };

        // Show recovery page
        const mainContent =
            document.getElementById("mainContent");

        if (!mainContent) return;

        const alternative =
            recoveryData.recovery.alternative_supplier;

        mainContent.innerHTML = `

            <div class="page-header">

                <div>

                    <div class="eyebrow">
                        AI RECOVERY ENGINE
                    </div>

                    <h1>
                        Autonomous Recovery Plan
                    </h1>

                    <p>
                        Stockout risk detected for
                        <strong>
                            ${cleanMedicineName(medicine)}
                        </strong>.
                    </p>

                </div>

            </div>


            <div class="ai-command-card">

                <div class="ai-command-icon">
                    ✓
                </div>

                <div>

                    <strong>
                        Dynamic recovery plan generated
                    </strong>

                    <p>
                        AI calculated the procurement requirement
                        from live inventory consumption and stock.
                    </p>

                </div>

            </div>


            <div class="kpi-grid">


                <div class="kpi-card">

                    <span class="kpi-label">
                        Current Stock
                    </span>

                    <strong>
                        ${currentStock}
                    </strong>

                    <small>
                        Units remaining
                    </small>

                </div>


                <div class="kpi-card">

                    <span class="kpi-label">
                        Daily Consumption
                    </span>

                    <strong>
                        ${dailyConsumption}
                    </strong>

                    <small>
                        Units per day
                    </small>

                </div>


                <div class="kpi-card">

                    <span class="kpi-label">
                        Procurement Need
                    </span>

                    <strong>
                        ${requiredQuantity}
                    </strong>

                    <small>
                        Units to replenish
                    </small>

                </div>


                <div class="kpi-card">

                    <span class="kpi-label">
                        Stockout Deadline
                    </span>

                    <strong>
                        ${deadlineDays} day${deadlineDays === 1 ? "" : "s"}
                    </strong>

                    <small>
                        Based on current runway
                    </small>

                </div>

            </div>


            <div class="panel">

                <div class="panel-header">

                    <div>

                        <div class="eyebrow">
                            ALTERNATE SUPPLIER
                        </div>

                        <h2>
                            ${alternative.supplier_name}
                        </h2>

                    </div>

                    <span class="status-badge healthy">
                        ${alternative.risk_level}
                    </span>

                </div>


                <div class="supplier-metrics">


                    <div class="metric-box">

                        <span>
                            AI Score
                        </span>

                        <strong>
                            ${alternative.final_score}%
                        </strong>

                    </div>


                    <div class="metric-box">

                        <span>
                            Delivery
                        </span>

                        <strong>
                            ${alternative.delivery_days} days
                        </strong>

                    </div>


                    <div class="metric-box">

                        <span>
                            Reliability
                        </span>

                        <strong>
                            ${alternative.reliability_score}%
                        </strong>

                    </div>


                    <div class="metric-box">

                        <span>
                            Availability
                        </span>

                        <strong>
                            ${alternative.availability_score}%
                        </strong>

                    </div>


                </div>


                <div class="ai-insight">

                    <strong>
                        AI Proposed Recovery
                    </strong>

                    <p>
                        ${recoveryData.recovery.recovery_message}
                    </p>

                    <p>

                        Procurement quantity:
                        <strong>
                            ${requiredQuantity} units
                        </strong>

                        <br>

                        Estimated procurement value:
                        <strong>
                            ₹${(
                alternative.unit_price *
                requiredQuantity
            ).toFixed(2)}
                        </strong>

                    </p>

                </div>


                <button
                    class="primary-btn"
                    onclick="approveRecoveryPlan()"
                >
                    ✓ Approve Recovery & Create PO
                </button>


                <button
                    class="secondary-btn"
                    onclick="showExceptions()"
                    style="margin-left:10px;"
                >
                    ← Back to Exceptions
                </button>

            </div>
        `;

    } catch (error) {

        console.error(
            "Dynamic recovery error:",
            error
        );

        alert(
            "Recovery analysis failed.\n\n" +
            error.message
        );
    }
};
// ======================================================
// FIXED DYNAMIC EXCEPTION RECOVERY
// Uses the working EXCEPTIONS API
// ======================================================

window.runExceptionRecovery = async function (medicine) {

    console.log("Starting recovery for:", medicine);

    try {

        // Get the live exception data
        const response = await fetch(
            "http://127.0.0.1:5000/api/exceptions"
        );

        const data = await response.json();

        console.log("Exception data:", data);

        if (!response.ok || data.status !== "success") {
            throw new Error(
                data.message || "Could not load exception data."
            );
        }

        // Find the selected medicine
        const selectedItem = data.exceptions.find(
            item =>
                item.medicine.toLowerCase() ===
                medicine.toLowerCase()
        );

        if (!selectedItem) {
            throw new Error(
                "Selected medicine was not found in exceptions."
            );
        }

        console.log(
            "Selected exception:",
            selectedItem
        );

        // ------------------------------------------------
        // REAL INVENTORY VALUES
        // ------------------------------------------------

        const currentStock =
            Number(selectedItem.current_stock);

        const dailyConsumption =
            Number(selectedItem.daily_consumption);

        const daysRemaining =
            Number(selectedItem.days_remaining);

        // Keep 7 days of coverage after replenishment
        const targetDays = 7;

        let requiredQuantity =
            Math.ceil(
                dailyConsumption * targetDays -
                currentStock
            );

        if (requiredQuantity < 1) {
            requiredQuantity = 1;
        }

        // Emergency deadline based on stock runway
        const deadlineDays =
            Math.max(
                1,
                Math.ceil(daysRemaining)
            );

        console.log("Dynamic requirement:", {
            medicine: medicine,
            currentStock: currentStock,
            dailyConsumption: dailyConsumption,
            daysRemaining: daysRemaining,
            requiredQuantity: requiredQuantity,
            deadlineDays: deadlineDays
        });

        // ------------------------------------------------
        // CALL REAL RECOVERY ENGINE
        // ------------------------------------------------

        const recoveryResponse = await fetch(
            "http://127.0.0.1:5000/api/procurement/recover",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    medicine: medicine,

                    quantity: requiredQuantity,

                    days: deadlineDays,

                    disrupted_supplier_id: "SUP001"
                })
            }
        );

        const recoveryData =
            await recoveryResponse.json();

        console.log(
            "Recovery API result:",
            recoveryData
        );

        if (
            !recoveryResponse.ok ||
            recoveryData.status !== "success"
        ) {
            throw new Error(
                recoveryData.message ||
                "Recovery analysis failed."
            );
        }

        // Save result for approval
        window.recoveryResult = recoveryData;

        // Save dynamic requirement
        window.recoveryResult.dynamic_requirement = {

            medicine: medicine,

            current_stock: currentStock,

            daily_consumption: dailyConsumption,

            days_remaining: daysRemaining,

            required_quantity: requiredQuantity,

            deadline_days: deadlineDays
        };

        const alternative =
            recoveryData.recovery.alternative_supplier;

        const mainContent =
            document.getElementById("mainContent");

        if (!mainContent) return;

        // ------------------------------------------------
        // DISPLAY RECOVERY PLAN
        // ------------------------------------------------

        mainContent.innerHTML = `

            <div class="page-header">

                <div>

                    <div class="eyebrow">
                        AI RECOVERY ENGINE
                    </div>

                    <h1>
                        Autonomous Recovery Plan
                    </h1>

                    <p>
                        Stockout exception detected for
                        <strong>
                            ${cleanMedicineName(medicine)}
                        </strong>.
                    </p>

                </div>

            </div>


            <div class="ai-command-card">

                <div class="ai-command-icon">
                    ✓
                </div>

                <div>

                    <strong>
                        Dynamic recovery plan generated
                    </strong>

                    <p>
                        AI calculated the procurement requirement
                        using live stock and consumption data.
                    </p>

                </div>

            </div>


            <div class="kpi-grid">


                <div class="kpi-card">

                    <span class="kpi-label">
                        Current Stock
                    </span>

                    <strong>
                        ${currentStock}
                    </strong>

                    <small>
                        Units remaining
                    </small>

                </div>


                <div class="kpi-card">

                    <span class="kpi-label">
                        Daily Consumption
                    </span>

                    <strong>
                        ${dailyConsumption}
                    </strong>

                    <small>
                        Units per day
                    </small>

                </div>


                <div class="kpi-card">

                    <span class="kpi-label">
                        Procurement Need
                    </span>

                    <strong>
                        ${requiredQuantity}
                    </strong>

                    <small>
                        Units to replenish
                    </small>

                </div>


                <div class="kpi-card">

                    <span class="kpi-label">
                        Stockout Deadline
                    </span>

                    <strong>
                        ${deadlineDays}
                        day${deadlineDays === 1 ? "" : "s"}
                    </strong>

                    <small>
                        Based on current runway
                    </small>

                </div>

            </div>


            <div class="panel">

                <div class="panel-header">

                    <div>

                        <div class="eyebrow">
                            ALTERNATE SUPPLIER
                        </div>

                        <h2>
                            ${alternative.supplier_name}
                        </h2>

                    </div>

                    <span class="status-badge healthy">
                        ${alternative.risk_level}
                    </span>

                </div>


                <div class="supplier-metrics">


                    <div class="metric-box">

                        <span>
                            AI Score
                        </span>

                        <strong>
                            ${alternative.final_score}%
                        </strong>

                    </div>


                    <div class="metric-box">

                        <span>
                            Delivery
                        </span>

                        <strong>
                            ${alternative.delivery_days} days
                        </strong>

                    </div>


                    <div class="metric-box">

                        <span>
                            Reliability
                        </span>

                        <strong>
                            ${alternative.reliability_score}%
                        </strong>

                    </div>


                    <div class="metric-box">

                        <span>
                            Availability
                        </span>

                        <strong>
                            ${alternative.availability_score}%
                        </strong>

                    </div>

                </div>


                <div class="ai-insight">

                    <strong>
                        AI Proposed Recovery
                    </strong>

                    <p>
                        ${recoveryData.recovery.recovery_message}
                    </p>

                    <p>

                        Procurement quantity:
                        <strong>
                            ${requiredQuantity} units
                        </strong>

                        <br>

                        Estimated procurement value:
                        <strong>
                            ₹${(
                alternative.unit_price *
                requiredQuantity
            ).toFixed(2)}
                        </strong>

                    </p>

                </div>


                <button
                    class="primary-btn"
                    onclick="approveRecoveryPlan()"
                >
                    ✓ Approve Recovery & Create PO
                </button>


                <button
                    class="secondary-btn"
                    onclick="showExceptions()"
                    style="margin-left:10px;"
                >
                    ← Back to Exceptions
                </button>

            </div>
        `;

    } catch (error) {

        console.error(
            "Dynamic recovery error:",
            error
        );

        alert(
            "Recovery analysis failed.\n\n" +
            error.message
        );
    }
};
// ======================================================
// DYNAMIC RECOVERY APPROVAL FIX
// Uses the selected exception + calculated quantity
// ======================================================

window.approveRecoveryPlan = async function () {

    try {

        console.log("Approving dynamic recovery plan...");

        const recovery = window.recoveryResult;

        if (!recovery || !recovery.recovery) {
            alert(
                "Recovery result not found. Please run AI Recovery again."
            );
            return;
        }

        const alternative =
            recovery.recovery.alternative_supplier;

        if (!alternative) {
            alert("No alternate supplier was found.");
            return;
        }

        const requirement =
            recovery.dynamic_requirement;

        if (!requirement) {
            alert(
                "Dynamic procurement requirement not found."
            );
            return;
        }

        const medicine =
            requirement.medicine;

        const quantity =
            requirement.required_quantity;

        const deadline =
            requirement.deadline_days;

        const totalCost =
            (
                alternative.unit_price *
                quantity
            ).toFixed(2);

        console.log(
            "Creating dynamic recovery PO:",
            {
                medicine,
                quantity,
                deadline,
                supplier: alternative.supplier_name,
                totalCost
            }
        );

        const response = await fetch(
            "http://127.0.0.1:5000/api/orders",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    medicine: medicine,

                    supplier_id:
                        alternative.supplier_id,

                    supplier_name:
                        alternative.supplier_name,

                    quantity: quantity,

                    unit_price:
                        alternative.unit_price,

                    delivery_days:
                        alternative.delivery_days,

                    deadline_days:
                        deadline,

                    ai_score:
                        alternative.final_score
                })
            }
        );

        const data =
            await response.json();

        console.log(
            "Dynamic recovery PO response:",
            data
        );

        if (
            !response.ok ||
            data.status !== "success"
        ) {
            throw new Error(
                data.message ||
                "Could not create purchase order."
            );
        }

        alert(
            "RECOVERY PLAN APPROVED\n\n" +

            "Purchase Order Created Successfully\n\n" +

            "Medicine: " +
            medicine +
            "\n" +

            "Quantity: " +
            quantity +
            "\n" +

            "Supplier: " +
            alternative.supplier_name +
            "\n" +

            "Delivery: " +
            alternative.delivery_days +
            " days\n" +

            "Total: ₹" +
            totalCost
        );

        // Open the real Orders page
        showOrders();

    } catch (error) {

        console.error(
            "Dynamic recovery approval error:",
            error
        );

        alert(
            "Could not create recovery purchase order.\n\n" +
            error.message
        );
    }
};
// ======================================================
// EXPLAINABLE AI - PROCUREMENT QUANTITY
// ======================================================

window.addRecoveryQuantityExplanation = function () {

    const mainContent =
        document.getElementById("mainContent");

    const recovery =
        window.recoveryResult;

    if (!mainContent || !recovery) return;

    const requirement =
        recovery.dynamic_requirement;

    if (!requirement) return;

    // Prevent duplicate explanation
    if (
        document.getElementById(
            "recoveryQuantityExplanation"
        )
    ) {
        return;
    }

    const currentStock =
        Number(requirement.current_stock);

    const dailyConsumption =
        Number(requirement.daily_consumption);

    const requiredQuantity =
        Number(requirement.required_quantity);

    const targetDays = 7;

    const targetInventory =
        dailyConsumption * targetDays;

    const explanation =
        document.createElement("div");

    explanation.id =
        "recoveryQuantityExplanation";

    explanation.className =
        "ai-insight";

    explanation.innerHTML = `
        <strong>
            Why did AI recommend ${requiredQuantity} units?
        </strong>

        <p>
            The recovery engine targets
            <strong>${targetDays} days</strong>
            of inventory coverage.
        </p>

        <p>
            Daily consumption:
            <strong>${dailyConsumption} units/day</strong>
        </p>

        <p>
            Target inventory:
            <strong>
                ${targetInventory.toFixed(0)} units
            </strong>
            (${dailyConsumption} × ${targetDays} days)
        </p>

        <p>
            Current inventory:
            <strong>${currentStock} units</strong>
        </p>

        <p>
            Recommended replenishment:
            <strong>
                ${targetInventory.toFixed(0)}
                −
                ${currentStock}
                =
                ${requiredQuantity} units
            </strong>
        </p>
    `;

    // Insert before the existing AI Proposed Recovery box
    const existingInsight =
        mainContent.querySelector(".ai-insight");

    if (existingInsight) {

        existingInsight.parentNode.insertBefore(
            explanation,
            existingInsight
        );

    } else {

        mainContent.appendChild(
            explanation
        );
    }
};


// ======================================================
// WATCH FOR RECOVERY PAGE RENDER
// ======================================================

window.recoveryExplanationObserver =
    new MutationObserver(function () {

        if (window.recoveryResult) {

            addRecoveryQuantityExplanation();

        }

    });


window.startRecoveryExplanationObserver =
    function () {

        const mainContent =
            document.getElementById("mainContent");

        if (!mainContent) return;

        recoveryExplanationObserver.observe(
            mainContent,
            {
                childList: true,
                subtree: true
            }
        );

        // Try immediately
        addRecoveryQuantityExplanation();
    };


// Start observer when page loads
setTimeout(
    startRecoveryExplanationObserver,
    500
);
// ======================================================
// REAL DASHBOARD - BACKEND CONNECTED
// ======================================================

window.showRealDashboard = async function () {

    updateBreadcrumb("Dashboard");
    setActiveNav("Dashboard");

    const mainContent =
        document.getElementById("mainContent");

    if (!mainContent) return;

    mainContent.innerHTML = `
        <div class="page-header">
            <div>
                <div class="eyebrow">AI PROCUREMENT COMMAND CENTER</div>
                <h1>Dashboard</h1>
                <p>Live procurement intelligence from PostgreSQL.</p>
            </div>
        </div>

        <div class="ai-command-card">
            <div class="ai-command-icon">◉</div>
            <div>
                <strong>AI Command Center</strong>
                <p>Loading live inventory and procurement intelligence...</p>
            </div>
        </div>
    `;

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/dashboard"
        );

        const data = await response.json();

        console.log(
            "Backend dashboard loaded:",
            data
        );

        if (
            !response.ok ||
            data.status !== "success"
        ) {
            throw new Error(
                data.message ||
                "Could not load dashboard."
            );
        }

        const inventory =
            data.inventory;

        const orders =
            data.orders;

        const procurement =
            data.procurement;


        mainContent.innerHTML = `

            <div class="page-header">

                <div>

                    <div class="eyebrow">
                        AI PROCUREMENT COMMAND CENTER
                    </div>

                    <h1>
                        Dashboard
                    </h1>

                    <p>
                        Live procurement intelligence from PostgreSQL.
                    </p>

                </div>

            </div>


            <div class="kpi-grid">


                <div class="kpi-card">

                    <span class="kpi-label">
                        Inventory Health
                    </span>

                    <strong>
                        ${inventory.inventory_health}%
                    </strong>

                    <small>
                        ${inventory.healthy_stock}
                        healthy medicines
                    </small>

                </div>


                <div class="kpi-card">

                    <span class="kpi-label">
                        Stockout Risks
                    </span>

                    <strong>
                        ${inventory.stockout_risks}
                    </strong>

                    <small>
                        ≤ 5 days remaining
                    </small>

                </div>


                <div class="kpi-card">

                    <span class="kpi-label">
                        Pending Approvals
                    </span>

                    <strong>
                        ${orders.pending_orders}
                    </strong>

                    <small>
                        Purchase orders
                    </small>

                </div>


                <div class="kpi-card">

                    <span class="kpi-label">
                        Active Orders
                    </span>

                    <strong>
                        ${orders.active_orders}
                    </strong>

                    <small>
                        Created in system
                    </small>

                </div>


                <div class="kpi-card">

                    <span class="kpi-label">
                        Procurement Spend
                    </span>

                    <strong>
                        ₹${procurement.total_spend.toLocaleString(
            "en-IN",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        )}
                    </strong>

                    <small>
                        Total recorded spend
                    </small>

                </div>

            </div>


            <div class="dashboard-grid">


                <div class="panel">

                    <div class="panel-header">

                        <div>

                            <div class="eyebrow">
                                INVENTORY INTELLIGENCE
                            </div>

                            <h2>
                                Stock Health
                            </h2>

                        </div>

                        <span class="status-badge healthy">
                            LIVE
                        </span>

                    </div>


                    <div class="supplier-metrics">


                        <div class="metric-box">

                            <span>
                                Total Medicines
                            </span>

                            <strong>
                                ${inventory.total_medicines}
                            </strong>

                        </div>


                        <div class="metric-box">

                            <span>
                                Healthy
                            </span>

                            <strong>
                                ${inventory.healthy_stock}
                            </strong>

                        </div>


                        <div class="metric-box">

                            <span>
                                Low Stock
                            </span>

                            <strong>
                                ${inventory.low_stock}
                            </strong>

                        </div>


                        <div class="metric-box">

                            <span>
                                Critical
                            </span>

                            <strong>
                                ${inventory.critical_stock}
                            </strong>

                        </div>

                    </div>


                    <div class="ai-insight">

                        <strong>
                            AI Inventory Insight
                        </strong>

                        <p>
                            ${inventory.stockout_risks}
                            medicines have five days or less
                            of estimated inventory runway.
                        </p>

                        <button
                            class="primary-btn"
                            onclick="showExceptions()"
                        >
                            Review Exceptions →
                        </button>

                    </div>

                </div>


                <div class="panel">

                    <div class="panel-header">

                        <div>

                            <div class="eyebrow">
                                PROCUREMENT ACTIVITY
                            </div>

                            <h2>
                                Purchase Orders
                            </h2>

                        </div>

                        <span class="status-badge healthy">
                            LIVE
                        </span>

                    </div>


                    <div class="supplier-metrics">


                        <div class="metric-box">

                            <span>
                                Active Orders
                            </span>

                            <strong>
                                ${orders.active_orders}
                            </strong>

                        </div>


                        <div class="metric-box">

                            <span>
                                Pending
                            </span>

                            <strong>
                                ${orders.pending_orders}
                            </strong>

                        </div>


                    </div>


                    <div class="ai-insight">

                        <strong>
                            Procurement Spend
                        </strong>

                        <p>
                            ₹${procurement.total_spend.toLocaleString(
            "en-IN",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        )}
                            recorded across purchase orders.
                        </p>

                        <button
                            class="secondary-btn"
                            onclick="showOrders()"
                        >
                            View Orders →
                        </button>

                    </div>

                </div>

            </div>


            <div class="panel">

                <div class="panel-header">

                    <div>

                        <div class="eyebrow">
                            AI AGENT ACTIVITY
                        </div>

                        <h2>
                            Autonomous Procurement Loop
                        </h2>

                    </div>

                </div>


                <div class="timeline">


                    <div class="timeline-item completed">

                        <span>✓</span>

                        <div>

                            <strong>
                                Predict
                            </strong>

                            <p>
                                Inventory runway and stockout
                                risks calculated from live data.
                            </p>

                        </div>

                    </div>


                    <div class="timeline-item completed">

                        <span>✓</span>

                        <div>

                            <strong>
                                Decide
                            </strong>

                            <p>
                                Suppliers evaluated using
                                delivery, deadline, reliability,
                                availability, price and risk.
                            </p>

                        </div>

                    </div>


                    <div class="timeline-item completed">

                        <span>✓</span>

                        <div>

                            <strong>
                                Act
                            </strong>

                            <p>
                                Purchase orders are created
                                after human approval.
                            </p>

                        </div>

                    </div>


                    <div class="timeline-item completed">

                        <span>✓</span>

                        <div>

                            <strong>
                                Recover
                            </strong>

                            <p>
                                Supplier disruption triggers
                                alternate supplier evaluation.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        `;

    } catch (error) {

        console.error(
            "Dashboard loading error:",
            error
        );

        mainContent.innerHTML = `

            <div class="ai-command-card">

                <div class="ai-command-icon">
                    !
                </div>

                <div>

                    <strong>
                        Dashboard data unavailable
                    </strong>

                    <p>
                        ${error.message}
                    </p>

                    <button
                        class="primary-btn"
                        onclick="showRealDashboard()"
                    >
                        Try Again
                    </button>

                </div>

            </div>

        `;
    }
};


// Connect Dashboard navigation
window.showDashboard =
    window.showRealDashboard;
// ======================================================
// LOGIN FIX
// ======================================================

window.handleLogin = function (event) {

    event.preventDefault();

    const emailInput =
        document.getElementById("email");

    const passwordInput =
        document.getElementById("password");

    if (!emailInput || !passwordInput) {
        console.error("Login fields not found.");
        return;
    }

    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value.trim();

    // Demo credentials
    if (
        email === "demo@medinexus.com" &&
        password === "123456"
    ) {

        console.log("Login successful");

        // Hide login screen
        const loginScreen =
            document.getElementById("loginScreen");

        if (loginScreen) {
            loginScreen.style.display = "none";
        }

        // Show application
        const appShell =
            document.getElementById("appShell");

        if (appShell) {
            appShell.style.display = "flex";
        }

        // Open dashboard
        if (typeof showDashboard === "function") {
            showDashboard();
        }

        return;
    }

    alert(
        "Invalid demo credentials.\n\n" +
        "Email: demo@medinexus.com\n" +
        "Password: 123456"
    );
};
// ======================================================
// FORCE LOGIN HANDLER
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (!loginForm) {
        console.error("MediNexus: loginForm not found");
        return;
    }

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("MediNexus: login button clicked");

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value.trim();

        if (
            email === "demo@medinexus.com" &&
            password === "123456"
        ) {

            console.log("MediNexus: login successful");

            // Hide login
            const loginScreen =
                document.getElementById("loginScreen");

            if (loginScreen) {
                loginScreen.style.display = "none";
            }

            // Show application
            const appShell =
                document.getElementById("appShell");

            if (appShell) {
                appShell.style.display = "flex";
            }

            // Open dashboard
            if (typeof window.showDashboard === "function") {
                window.showDashboard();
            } else if (
                typeof window.showRealDashboard === "function"
            ) {
                window.showRealDashboard();
            } else {
                console.error(
                    "MediNexus: dashboard function not found"
                );
            }

        } else {

            alert(
                "Invalid demo credentials.\n\n" +
                "Email: demo@medinexus.com\n" +
                "Password: 123456"
            );
        }

    });

});
// ======================================================
// MEDINEXUS LOGIN -> APPLICATION SHELL FIX
// ======================================================

window.launchMediNexusApp = function () {

    console.log("MediNexus: launching application shell...");

    document.body.innerHTML = `

        <div class="app-shell">

            <!-- SIDEBAR -->
            <aside class="sidebar">

                <div class="sidebar-logo">

                    <div class="sidebar-logo-icon">
                        +
                    </div>

                    <div>
                        <strong>MediNexus</strong>
                        <small>AI Procurement</small>
                    </div>

                </div>


                <div class="sidebar-section">
                    Main
                </div>


                <nav class="sidebar-nav">

                    <button
                        class="active"
                        onclick="showDashboard()"
                    >
                        <span>▦</span>
                        Dashboard
                    </button>

                    <button onclick="showInventory()">
                        <span>▥</span>
                        Inventory
                    </button>

                    <button onclick="showProcurement()">
                        <span>＋</span>
                        Procurement
                    </button>

                    <button onclick="showSuppliers()">
                        <span>⌁</span>
                        Suppliers
                    </button>

                    <button onclick="showOrders()">
                        <span>□</span>
                        Orders
                    </button>

                </nav>


                <div class="sidebar-section">
                    Monitoring
                </div>


                <nav class="sidebar-nav">

                    <button onclick="showExceptions()">
                        <span>⚠</span>
                        Exceptions
                        <span class="nav-badge">3</span>
                    </button>

                </nav>


                <div class="sidebar-agent">

                    <div class="agent-status"></div>

                    <div>
                        <strong>AI Agent Online</strong>
                        <small>Monitoring continuously</small>
                    </div>

                </div>


                <div class="sidebar-nav">

                    <button onclick="showSettings()">
                        <span>⚙</span>
                        Settings
                    </button>

                </div>

            </aside>


            <!-- MAIN APPLICATION -->
            <div class="app-main">

                <header class="topbar">

                    <div class="breadcrumb">
                        <span>Workspace</span>
                        <span>/</span>
                        <strong id="breadcrumbPage">
                            Dashboard
                        </strong>
                    </div>


                    <div class="topbar-user">

                        <div class="user-avatar">
                            DS
                        </div>

                        <div>
                            <strong>
                                Dr. Sharma
                            </strong>

                            <small>
                                Procurement Manager
                            </small>
                        </div>

                    </div>

                </header>


                <main
                    id="mainContent"
                    class="main-content"
                ></main>

            </div>

        </div>
    `;

    console.log(
        "MediNexus: application shell created."
    );

    // Load the real dashboard
    if (
        typeof window.showRealDashboard ===
        "function"
    ) {

        window.showRealDashboard();

    } else {

        console.error(
            "Real dashboard function not found."
        );
    }
};


// ======================================================
// FORCE LOGIN TO LAUNCH APPLICATION
// ======================================================

window.addEventListener(
    "load",
    function () {

        const loginForm =
            document.getElementById("loginForm");

        if (!loginForm) {
            return;
        }

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const email =
                    document.getElementById(
                        "email"
                    )?.value.trim();

                const password =
                    document.getElementById(
                        "password"
                    )?.value.trim();

                console.log(
                    "MediNexus login attempt:",
                    email
                );

                if (
                    email ===
                    "demo@medinexus.com" &&
                    password === "123456"
                ) {

                    console.log(
                        "MediNexus: credentials accepted."
                    );

                    window.launchMediNexusApp();

                } else {

                    alert(
                        "Invalid demo credentials.\n\n" +
                        "Email: demo@medinexus.com\n" +
                        "Password: 123456"
                    );

                }

            }
        );

    }
);
// ======================================================
// MEDINEXUS PREMIUM LIVE DASHBOARD
// Real PostgreSQL data + polished UI
// ======================================================

window.showRealDashboard = async function () {

    updateBreadcrumb("Dashboard");
    setActiveNav("Dashboard");

    const mainContent =
        document.getElementById("mainContent");

    if (!mainContent) return;

    // Loading state
    mainContent.innerHTML = `
        <div style="
            padding:60px;
            text-align:center;
            color:#6b8292;
        ">
            Loading live procurement intelligence...
        </div>
    `;

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/dashboard"
        );

        const data = await response.json();

        if (
            !response.ok ||
            data.status !== "success"
        ) {
            throw new Error(
                data.message ||
                "Dashboard data unavailable."
            );
        }

        const inv = data.inventory;
        const orders = data.orders;
        const procurement = data.procurement;

        const spend =
            procurement.total_spend.toLocaleString(
                "en-IN",
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            );

        mainContent.innerHTML = `

        <!-- ========================================= -->
        <!-- DASHBOARD HEADER -->
        <!-- ========================================= -->

        <div style="
            display:flex;
            justify-content:space-between;
            align-items:flex-end;
            gap:20px;
            margin-bottom:28px;
            flex-wrap:wrap;
        ">

            <div>

                <div style="
                    font-size:11px;
                    font-weight:800;
                    letter-spacing:1.8px;
                    color:#14b8a6;
                    margin-bottom:8px;
                ">
                    AI PROCUREMENT COMMAND CENTER
                </div>

                <h1 style="
                    margin:0;
                    font-size:32px;
                    line-height:1.15;
                    color:#0b1f33;
                ">
                    Procurement Dashboard
                </h1>

                <p style="
                    margin:9px 0 0;
                    color:#718797;
                    font-size:14px;
                ">
                    Autonomous medical procurement intelligence
                    powered by live PostgreSQL data.
                </p>

            </div>


            <div style="
                display:flex;
                align-items:center;
                gap:8px;
                padding:9px 14px;
                border-radius:30px;
                background:#ecfdf9;
                border:1px solid #c7f3eb;
                color:#087f73;
                font-size:11px;
                font-weight:800;
            ">

                <span style="
                    width:8px;
                    height:8px;
                    border-radius:50%;
                    background:#14b8a6;
                    box-shadow:0 0 0 4px rgba(20,184,166,.12);
                "></span>

                LIVE POSTGRESQL

            </div>

        </div>


        <!-- ========================================= -->
        <!-- KPI CARDS -->
        <!-- ========================================= -->

        <div style="
            display:grid;
            grid-template-columns:
                repeat(5, minmax(0,1fr));
            gap:16px;
            margin-bottom:22px;
        ">


            <!-- Inventory Health -->

            <div style="
                background:#ffffff;
                border:1px solid #e5edf1;
                border-radius:16px;
                padding:20px;
                box-shadow:0 8px 25px rgba(11,31,51,.05);
            ">

                <div style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                ">

                    <span style="
                        font-size:11px;
                        font-weight:800;
                        color:#718797;
                        letter-spacing:.7px;
                    ">
                        INVENTORY HEALTH
                    </span>

                    <span style="
                        font-size:18px;
                        color:#14b8a6;
                    ">
                        ◉
                    </span>

                </div>

                <div style="
                    margin-top:12px;
                    font-size:29px;
                    font-weight:800;
                    color:#0b1f33;
                ">
                    ${inv.inventory_health}%
                </div>

                <div style="
                    margin-top:7px;
                    font-size:11px;
                    color:#718797;
                ">
                    ${inv.healthy_stock} healthy medicines
                </div>

            </div>


            <!-- Stockout -->

            <div style="
                background:#ffffff;
                border:1px solid #e5edf1;
                border-radius:16px;
                padding:20px;
                box-shadow:0 8px 25px rgba(11,31,51,.05);
            ">

                <div style="
                    display:flex;
                    justify-content:space-between;
                ">

                    <span style="
                        font-size:11px;
                        font-weight:800;
                        color:#718797;
                        letter-spacing:.7px;
                    ">
                        STOCKOUT RISKS
                    </span>

                    <span style="
                        font-size:18px;
                        color:#ef7b45;
                    ">
                        ⚠
                    </span>

                </div>

                <div style="
                    margin-top:12px;
                    font-size:29px;
                    font-weight:800;
                    color:#d65c31;
                ">
                    ${inv.stockout_risks}
                </div>

                <div style="
                    margin-top:7px;
                    font-size:11px;
                    color:#718797;
                ">
                    ≤ 5 days remaining
                </div>

            </div>


            <!-- Pending -->

            <div style="
                background:#ffffff;
                border:1px solid #e5edf1;
                border-radius:16px;
                padding:20px;
                box-shadow:0 8px 25px rgba(11,31,51,.05);
            ">

                <div style="
                    display:flex;
                    justify-content:space-between;
                ">

                    <span style="
                        font-size:11px;
                        font-weight:800;
                        color:#718797;
                        letter-spacing:.7px;
                    ">
                        PENDING APPROVALS
                    </span>

                    <span style="
                        font-size:18px;
                        color:#7c6ee6;
                    ">
                        ◌
                    </span>

                </div>

                <div style="
                    margin-top:12px;
                    font-size:29px;
                    font-weight:800;
                    color:#0b1f33;
                ">
                    ${orders.pending_orders}
                </div>

                <div style="
                    margin-top:7px;
                    font-size:11px;
                    color:#718797;
                ">
                    Purchase orders
                </div>

            </div>


            <!-- Orders -->

            <div style="
                background:#ffffff;
                border:1px solid #e5edf1;
                border-radius:16px;
                padding:20px;
                box-shadow:0 8px 25px rgba(11,31,51,.05);
            ">

                <div style="
                    display:flex;
                    justify-content:space-between;
                ">

                    <span style="
                        font-size:11px;
                        font-weight:800;
                        color:#718797;
                        letter-spacing:.7px;
                    ">
                        ACTIVE ORDERS
                    </span>

                    <span style="
                        font-size:18px;
                        color:#14b8a6;
                    ">
                        ↗
                    </span>

                </div>

                <div style="
                    margin-top:12px;
                    font-size:29px;
                    font-weight:800;
                    color:#0b1f33;
                ">
                    ${orders.active_orders}
                </div>

                <div style="
                    margin-top:7px;
                    font-size:11px;
                    color:#718797;
                ">
                    Created in system
                </div>

            </div>


            <!-- Spend -->

            <div style="
                background:linear-gradient(
                    135deg,
                    #0b1f33,
                    #103a51
                );
                border:1px solid #173b52;
                border-radius:16px;
                padding:20px;
                box-shadow:0 10px 28px rgba(11,31,51,.15);
            ">

                <div style="
                    font-size:11px;
                    font-weight:800;
                    color:#8bb7c4;
                    letter-spacing:.7px;
                ">
                    PROCUREMENT SPEND
                </div>

                <div style="
                    margin-top:12px;
                    font-size:24px;
                    font-weight:800;
                    color:#ffffff;
                ">
                    ₹${spend}
                </div>

                <div style="
                    margin-top:7px;
                    font-size:11px;
                    color:#9db5c2;
                ">
                    Total recorded spend
                </div>

            </div>

        </div>


        <!-- ========================================= -->
        <!-- AI COMMAND CENTER -->
        <!-- ========================================= -->

        <div style="
            background:
                linear-gradient(
                    135deg,
                    #092033 0%,
                    #0d3145 65%,
                    #0c4a4b 100%
                );
            border-radius:20px;
            padding:26px;
            color:white;
            margin-bottom:22px;
            box-shadow:0 14px 35px rgba(11,31,51,.18);
            position:relative;
            overflow:hidden;
        ">

            <div style="
                position:absolute;
                width:220px;
                height:220px;
                right:-70px;
                top:-100px;
                border-radius:50%;
                border:1px solid rgba(20,184,166,.22);
            "></div>

            <div style="
                position:absolute;
                width:330px;
                height:330px;
                right:-130px;
                top:-150px;
                border-radius:50%;
                border:1px solid rgba(20,184,166,.12);
            "></div>


            <div style="
                position:relative;
                z-index:1;
            ">

                <div style="
                    display:flex;
                    justify-content:space-between;
                    align-items:flex-start;
                    gap:20px;
                ">

                    <div>

                        <div style="
                            font-size:10px;
                            font-weight:800;
                            letter-spacing:1.7px;
                            color:#35d6c3;
                            margin-bottom:8px;
                        ">
                            AI COMMAND CENTER
                        </div>

                        <h2 style="
                            margin:0;
                            font-size:23px;
                            color:white;
                        ">
                            ${inv.stockout_risks}
                            procurement risks detected
                        </h2>

                        <p style="
                            margin:8px 0 0;
                            color:#a9c2cc;
                            font-size:13px;
                        ">
                            AI is continuously analyzing inventory
                            runway, supplier reliability and procurement urgency.
                        </p>

                    </div>


                    <div style="
                        padding:8px 12px;
                        border-radius:20px;
                        background:rgba(20,184,166,.13);
                        border:1px solid rgba(20,184,166,.25);
                        color:#5ce0d0;
                        font-size:10px;
                        font-weight:800;
                    ">
                        ● AGENT ONLINE
                    </div>

                </div>


                <div style="
                    display:grid;
                    grid-template-columns:
                        repeat(3,minmax(0,1fr));
                    gap:14px;
                    margin-top:24px;
                ">


                    <div style="
                        background:rgba(255,255,255,.055);
                        border:1px solid rgba(255,255,255,.08);
                        border-radius:13px;
                        padding:16px;
                    ">

                        <div style="
                            color:#6ee7d8;
                            font-size:11px;
                            font-weight:800;
                        ">
                            PREDICT
                        </div>

                        <strong style="
                            display:block;
                            margin-top:7px;
                            font-size:14px;
                        ">
                            ${inv.stockout_risks} risks
                        </strong>

                        <span style="
                            display:block;
                            margin-top:5px;
                            color:#a9c2cc;
                            font-size:11px;
                        ">
                            Stockout runway monitored
                        </span>

                    </div>


                    <div style="
                        background:rgba(255,255,255,.055);
                        border:1px solid rgba(255,255,255,.08);
                        border-radius:13px;
                        padding:16px;
                    ">

                        <div style="
                            color:#6ee7d8;
                            font-size:11px;
                            font-weight:800;
                        ">
                            DECIDE
                        </div>

                        <strong style="
                            display:block;
                            margin-top:7px;
                            font-size:14px;
                        ">
                            Supplier intelligence
                        </strong>

                        <span style="
                            display:block;
                            margin-top:5px;
                            color:#a9c2cc;
                            font-size:11px;
                        ">
                            Price + delivery + reliability
                        </span>

                    </div>


                    <div style="
                        background:rgba(255,255,255,.055);
                        border:1px solid rgba(255,255,255,.08);
                        border-radius:13px;
                        padding:16px;
                    ">

                        <div style="
                            color:#6ee7d8;
                            font-size:11px;
                            font-weight:800;
                        ">
                            RECOVER
                        </div>

                        <strong style="
                            display:block;
                            margin-top:7px;
                            font-size:14px;
                        ">
                            Disruption ready
                        </strong>

                        <span style="
                            display:block;
                            margin-top:5px;
                            color:#a9c2cc;
                            font-size:11px;
                        ">
                            Alternate suppliers evaluated
                        </span>

                    </div>

                </div>


                <div style="
                    margin-top:20px;
                ">

                    <button
                        onclick="showExceptions()"
                        style="
                            border:0;
                            border-radius:10px;
                            padding:11px 17px;
                            background:#14b8a6;
                            color:#062b32;
                            font-size:11px;
                            font-weight:800;
                            cursor:pointer;
                        "
                    >
                        Review Procurement Risks →
                    </button>

                </div>

            </div>

        </div>


        <!-- ========================================= -->
        <!-- TWO COLUMN INTELLIGENCE -->
        <!-- ========================================= -->

        <div style="
            display:grid;
            grid-template-columns:
                minmax(0,1.25fr)
                minmax(0,.75fr);
            gap:20px;
            margin-bottom:22px;
        ">


            <!-- INVENTORY HEALTH -->

            <div class="panel">

                <div class="panel-header">

                    <div>

                        <div class="eyebrow">
                            INVENTORY INTELLIGENCE
                        </div>

                        <h2>
                            Stock Health
                        </h2>

                    </div>

                    <span class="status-badge healthy">
                        LIVE
                    </span>

                </div>


                <div style="
                    display:grid;
                    grid-template-columns:
                        repeat(3,1fr);
                    gap:12px;
                ">

                    <div style="
                        padding:16px;
                        background:#f1fbf9;
                        border:1px solid #d8f3ed;
                        border-radius:12px;
                    ">

                        <div style="
                            color:#67808f;
                            font-size:10px;
                            font-weight:700;
                        ">
                            HEALTHY
                        </div>

                        <strong style="
                            display:block;
                            margin-top:6px;
                            font-size:23px;
                            color:#087f73;
                        ">
                            ${inv.healthy_stock}
                        </strong>

                    </div>


                    <div style="
                        padding:16px;
                        background:#fff8ee;
                        border:1px solid #f5e4c5;
                        border-radius:12px;
                    ">

                        <div style="
                            color:#67808f;
                            font-size:10px;
                            font-weight:700;
                        ">
                            LOW STOCK
                        </div>

                        <strong style="
                            display:block;
                            margin-top:6px;
                            font-size:23px;
                            color:#b8781b;
                        ">
                            ${inv.low_stock}
                        </strong>

                    </div>


                    <div style="
                        padding:16px;
                        background:#fff3f0;
                        border:1px solid #f5d8d1;
                        border-radius:12px;
                    ">

                        <div style="
                            color:#67808f;
                            font-size:10px;
                            font-weight:700;
                        ">
                            CRITICAL
                        </div>

                        <strong style="
                            display:block;
                            margin-top:6px;
                            font-size:23px;
                            color:#c94f3b;
                        ">
                            ${inv.critical_stock}
                        </strong>

                    </div>

                </div>


                <div style="
                    margin-top:18px;
                    height:9px;
                    background:#edf2f4;
                    border-radius:10px;
                    overflow:hidden;
                    display:flex;
                ">

                    <div style="
                        width:${(
                inv.healthy_stock /
                inv.total_medicines
            ) * 100}%;
                        background:#14b8a6;
                    "></div>

                    <div style="
                        width:${(
                inv.low_stock /
                inv.total_medicines
            ) * 100}%;
                        background:#e6a23c;
                    "></div>

                    <div style="
                        width:${(
                inv.critical_stock /
                inv.total_medicines
            ) * 100}%;
                        background:#dc6953;
                    "></div>

                </div>


                <div style="
                    display:flex;
                    justify-content:space-between;
                    margin-top:8px;
                    color:#8095a4;
                    font-size:10px;
                ">

                    <span>
                        ${inv.total_medicines}
                        total medicines
                    </span>

                    <span>
                        ${inv.inventory_health}% healthy
                    </span>

                </div>


                <div class="ai-insight"
                    style="margin-top:18px;">

                    <strong>
                        AI Inventory Insight
                    </strong>

                    <p>
                        ${inv.stockout_risks}
                        medicines have five days or less
                        of estimated inventory runway.
                    </p>

                </div>

            </div>


            <!-- PROCUREMENT -->

            <div class="panel">

                <div class="panel-header">

                    <div>

                        <div class="eyebrow">
                            PROCUREMENT ACTIVITY
                        </div>

                        <h2>
                            Order Intelligence
                        </h2>

                    </div>

                    <span class="status-badge healthy">
                        LIVE
                    </span>

                </div>


                <div style="
                    display:grid;
                    grid-template-columns:
                        1fr 1fr;
                    gap:12px;
                ">

                    <div class="metric-box">

                        <span>
                            Active Orders
                        </span>

                        <strong>
                            ${orders.active_orders}
                        </strong>

                    </div>

                    <div class="metric-box">

                        <span>
                            Pending
                        </span>

                        <strong>
                            ${orders.pending_orders}
                        </strong>

                    </div>

                </div>


                <div style="
                    margin-top:16px;
                    padding:18px;
                    border-radius:13px;
                    background:#f5f9fa;
                    border:1px solid #e6eef1;
                ">

                    <div style="
                        color:#8095a4;
                        font-size:10px;
                        font-weight:800;
                        letter-spacing:.8px;
                    ">
                        TOTAL PROCUREMENT SPEND
                    </div>

                    <div style="
                        margin-top:7px;
                        font-size:25px;
                        font-weight:800;
                        color:#0b1f33;
                    ">
                        ₹${spend}
                    </div>

                </div>


                <button
                    onclick="showOrders()"
                    class="secondary-btn"
                    style="
                        margin-top:16px;
                        width:100%;
                    "
                >
                    View Purchase Orders →
                </button>

            </div>

        </div>


        <!-- ========================================= -->
        <!-- AUTONOMOUS LOOP -->
        <!-- ========================================= -->

        <div class="panel">

            <div class="panel-header">

                <div>

                    <div class="eyebrow">
                        AI AGENT ACTIVITY
                    </div>

                    <h2>
                        Autonomous Procurement Loop
                    </h2>

                </div>

                <span class="status-badge healthy">
                    ONLINE
                </span>

            </div>


            <div style="
                display:grid;
                grid-template-columns:
                    repeat(5,1fr);
                gap:10px;
            ">


                <div style="
                    padding:17px;
                    border:1px solid #dcebed;
                    border-radius:12px;
                    background:#f8fcfc;
                ">

                    <div style="
                        color:#14b8a6;
                        font-size:20px;
                        font-weight:800;
                    ">
                        01
                    </div>

                    <strong>
                        Predict
                    </strong>

                    <p style="
                        font-size:11px;
                        color:#718797;
                        line-height:1.5;
                    ">
                        Detect stockout risk.
                    </p>

                </div>


                <div style="
                    padding:17px;
                    border:1px solid #dcebed;
                    border-radius:12px;
                    background:#f8fcfc;
                ">

                    <div style="
                        color:#14b8a6;
                        font-size:20px;
                        font-weight:800;
                    ">
                        02
                    </div>

                    <strong>
                        Analyze
                    </strong>

                    <p style="
                        font-size:11px;
                        color:#718797;
                        line-height:1.5;
                    ">
                        Understand urgency.
                    </p>

                </div>


                <div style="
                    padding:17px;
                    border:1px solid #dcebed;
                    border-radius:12px;
                    background:#f8fcfc;
                ">

                    <div style="
                        color:#14b8a6;
                        font-size:20px;
                        font-weight:800;
                    ">
                        03
                    </div>

                    <strong>
                        Decide
                    </strong>

                    <p style="
                        font-size:11px;
                        color:#718797;
                        line-height:1.5;
                    ">
                        Score suppliers.
                    </p>

                </div>


                <div style="
                    padding:17px;
                    border:1px solid #dcebed;
                    border-radius:12px;
                    background:#f8fcfc;
                ">

                    <div style="
                        color:#14b8a6;
                        font-size:20px;
                        font-weight:800;
                    ">
                        04
                    </div>

                    <strong>
                        Act
                    </strong>

                    <p style="
                        font-size:11px;
                        color:#718797;
                        line-height:1.5;
                    ">
                        Prepare procurement.
                    </p>

                </div>


                <div style="
                    padding:17px;
                    border:1px solid #dcebed;
                    border-radius:12px;
                    background:#f8fcfc;
                ">

                    <div style="
                        color:#14b8a6;
                        font-size:20px;
                        font-weight:800;
                    ">
                        05
                    </div>

                    <strong>
                        Recover
                    </strong>

                    <p style="
                        font-size:11px;
                        color:#718797;
                        line-height:1.5;
                    ">
                        Replan disruptions.
                    </p>

                </div>

            </div>

        </div>


        <!-- ========================================= -->
        <!-- QUICK ACTIONS -->
        <!-- ========================================= -->

        <div style="
            margin-top:22px;
            margin-bottom:30px;
        ">

            <div class="eyebrow">
                QUICK ACTIONS
            </div>

            <div style="
                display:grid;
                grid-template-columns:
                    repeat(4,1fr);
                gap:12px;
                margin-top:10px;
            ">

                <button
                    onclick="showProcurement()"
                    style="
                        padding:16px;
                        background:white;
                        border:1px solid #e1eaee;
                        border-radius:13px;
                        text-align:left;
                        cursor:pointer;
                    "
                >
                    <strong>
                        + New Procurement
                    </strong>

                    <span style="
                        display:block;
                        margin-top:5px;
                        font-size:10px;
                        color:#8095a4;
                    ">
                        Analyze a purchase requirement
                    </span>
                </button>


                <button
                    onclick="showExceptions()"
                    style="
                        padding:16px;
                        background:white;
                        border:1px solid #e1eaee;
                        border-radius:13px;
                        text-align:left;
                        cursor:pointer;
                    "
                >
                    <strong>
                        ⚠ Review Exceptions
                    </strong>

                    <span style="
                        display:block;
                        margin-top:5px;
                        font-size:10px;
                        color:#8095a4;
                    ">
                        ${inv.stockout_risks}
                        live procurement risks
                    </span>
                </button>


                <button
                    onclick="showSuppliers()"
                    style="
                        padding:16px;
                        background:white;
                        border:1px solid #e1eaee;
                        border-radius:13px;
                        text-align:left;
                        cursor:pointer;
                    "
                >
                    <strong>
                        ◈ Supplier Intelligence
                    </strong>

                    <span style="
                        display:block;
                        margin-top:5px;
                        font-size:10px;
                        color:#8095a4;
                    ">
                        Compare supplier performance
                    </span>
                </button>


                <button
                    onclick="showOrders()"
                    style="
                        padding:16px;
                        background:white;
                        border:1px solid #e1eaee;
                        border-radius:13px;
                        text-align:left;
                        cursor:pointer;
                    "
                >
                    <strong>
                        □ View Orders
                    </strong>

                    <span style="
                        display:block;
                        margin-top:5px;
                        font-size:10px;
                        color:#8095a4;
                    ">
                        Track procurement activity
                    </span>
                </button>

            </div>

        </div>

        `;

    } catch (error) {

        console.error(
            "Premium dashboard error:",
            error
        );

        mainContent.innerHTML = `

            <div class="ai-command-card">

                <div class="ai-command-icon">
                    !
                </div>

                <div>

                    <strong>
                        Dashboard data unavailable
                    </strong>

                    <p>
                        ${error.message}
                    </p>

                </div>

            </div>

        `;
    }
};


// Make Dashboard navigation use the premium live version
window.showDashboard =
    window.showRealDashboard;
// ======================================================
// MEDINEXUS - CLEAN LIVE DASHBOARD
// Uses the ORIGINAL dashboard CSS
// ======================================================

window.showRealDashboard = async function () {

    updateBreadcrumb("Dashboard");
    setActiveNav("Dashboard");

    const mainContent =
        document.getElementById("mainContent");

    if (!mainContent) return;

    // Restore original dashboard container styling
    mainContent.className = "dashboard";

    mainContent.innerHTML = `
        <div style="
            padding:40px;
            text-align:center;
            color:#718797;
        ">
            Loading procurement intelligence...
        </div>
    `;

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/dashboard"
        );

        const data = await response.json();

        if (
            !response.ok ||
            data.status !== "success"
        ) {
            throw new Error(
                data.message ||
                "Dashboard API unavailable."
            );
        }

        const inv = data.inventory;
        const orders = data.orders;
        const procurement = data.procurement;

        const spend =
            procurement.total_spend.toLocaleString(
                "en-IN",
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            );

        // ============================================
        // ORIGINAL MEDINEXUS DASHBOARD STRUCTURE
        // ============================================

        mainContent.innerHTML = `

            <div class="page-header">

                <div>

                    <div class="page-eyebrow">
                        Procurement Intelligence
                    </div>

                    <h1>
                        Good afternoon, Dr. Sharma.
                    </h1>

                    <p>
                        Here's your healthcare procurement overview.
                    </p>

                </div>


                <button
                    class="primary-button"
                    onclick="showProcurement()"
                >
                    ＋ &nbsp; New Procurement
                </button>

            </div>


            <!-- LIVE KPI CARDS -->

            <div class="kpi-grid">

                ${kpiCard(
            "Inventory Health",
            `${inv.inventory_health}%`,
            `${inv.healthy_stock} healthy medicines`,
            "✥",
            "positive"
        )}

                ${kpiCard(
            "Stockout Risks",
            `${inv.stockout_risks}`,
            "≤ 5 days remaining",
            "!",
            "danger"
        )}

                ${kpiCard(
            "Pending Approvals",
            `${orders.pending_orders}`,
            "Purchase orders",
            "◷",
            "warning"
        )}

                ${kpiCard(
            "Active Orders",
            `${orders.active_orders}`,
            "Created in system",
            "□",
            "positive"
        )}

                ${kpiCard(
            "Procurement Spend",
            `₹${spend}`,
            "Total recorded spend",
            "₹",
            "purple"
        )}

            </div>


            <!-- AI COMMAND CENTER -->

            <section class="ai-command-center">

                <div class="ai-badge">
                    AI COMMAND CENTER
                </div>

                <h2>
                    ${inv.stockout_risks}
                    procurement risks detected
                </h2>

                <p>
                    MediNexus is analyzing live inventory
                    conditions that may affect supply continuity.
                </p>


                <div class="ai-risk-item">

                    <div
                        style="
                            display:flex;
                            align-items:center;
                            gap:12px;
                        "
                    >

                        <div
                            style="
                                width:34px;
                                height:34px;
                                display:grid;
                                place-items:center;
                                border-radius:9px;
                                background:rgba(239,68,68,.13);
                                color:#ff7777;
                                font-weight:800;
                            "
                        >
                            ⚠
                        </div>

                        <div>

                            <div class="ai-risk-name">
                                Critical inventory exposure
                            </div>

                            <div class="ai-risk-meta">
                                <strong>
                                    ${inv.critical_stock}
                                </strong>
                                medicines currently at critical stock
                            </div>

                        </div>

                    </div>


                    <button
                        onclick="showExceptions()"
                    >
                        Review →
                    </button>

                </div>

            </section>


            <!-- INVENTORY + AI ACTIVITY -->

            <div class="dashboard-grid">


                <!-- STOCKOUT RISK -->

                <section class="panel">

                    <div class="panel-header">

                        <div>

                            <div class="panel-eyebrow">
                                Predictive Intelligence
                            </div>

                            <h2>
                                Stockout Risk
                            </h2>

                        </div>


                        <button
                            class="panel-link"
                            style="
                                border:0;
                                background:none;
                                cursor:pointer;
                            "
                            onclick="showExceptions()"
                        >
                            View all →
                        </button>

                    </div>


                    <div class="stockout-list">

                        <div class="stockout-item">

                            <div class="stockout-left">

                                <div class="medicine-avatar">
                                    CR
                                </div>

                                <div>

                                    <strong>
                                        Critical medicines
                                    </strong>

                                    <span>
                                        ${inv.critical_stock}
                                        items requiring immediate attention
                                    </span>

                                </div>

                            </div>

                            <div class="stockout-days high">
                                Critical
                            </div>

                        </div>


                        <div class="stockout-item">

                            <div class="stockout-left">

                                <div class="medicine-avatar">
                                    LS
                                </div>

                                <div>

                                    <strong>
                                        Low stock medicines
                                    </strong>

                                    <span>
                                        ${inv.low_stock}
                                        items requiring monitoring
                                    </span>

                                </div>

                            </div>

                            <div class="stockout-days medium">
                                Monitor
                            </div>

                        </div>


                        <div class="stockout-item">

                            <div class="stockout-left">

                                <div class="medicine-avatar">
                                    RS
                                </div>

                                <div>

                                    <strong>
                                        Stockout exposure
                                    </strong>

                                    <span>
                                        ${inv.stockout_risks}
                                        medicines with ≤ 5 days runway
                                    </span>

                                </div>

                            </div>

                            <div class="stockout-days high">
                                Action
                            </div>

                        </div>

                    </div>

                </section>


                <!-- AI ACTIVITY -->

                <section class="panel">

                    <div class="panel-header">

                        <div>

                            <div class="panel-eyebrow">
                                Autonomous Activity
                            </div>

                            <h2>
                                AI Agent Activity
                            </h2>

                        </div>


                        <div
                            style="
                                display:flex;
                                align-items:center;
                                gap:5px;
                                color:#079f91;
                                font-size:9px;
                                font-weight:800;
                            "
                        >

                            <span
                                style="
                                    width:6px;
                                    height:6px;
                                    border-radius:50%;
                                    background:#16a34a;
                                "
                            ></span>

                            LIVE

                        </div>

                    </div>


                    <div class="activity-list">

                        ${activityItem(
            "Inventory analyzed",
            `${inv.total_medicines} medicines evaluated`,
            "Live"
        )}

                        ${activityItem(
            "Stockout risks detected",
            `${inv.stockout_risks} risks identified`,
            "Live"
        )}

                        ${activityItem(
            "Supplier intelligence",
            "Approved suppliers evaluated",
            "Active"
        )}

                        ${activityItem(
            "Procurement monitored",
            `${orders.active_orders} orders tracked`,
            "Live"
        )}

                    </div>

                </section>

            </div>


            <!-- INVENTORY SUMMARY -->

            <section
                class="panel"
                style="margin-top:20px;"
            >

                <div class="panel-header">

                    <div>

                        <div class="panel-eyebrow">
                            Inventory Intelligence
                        </div>

                        <h2>
                            Live Inventory Health
                        </h2>

                    </div>

                    <span class="status-badge success">
                        ● LIVE
                    </span>

                </div>


                <div class="supplier-metrics">

                    ${supplierMetric(
            "Total Medicines",
            inv.total_medicines,
            "PostgreSQL"
        )}

                    ${supplierMetric(
            "Healthy",
            inv.healthy_stock,
            `${inv.inventory_health}% health`
        )}

                    ${supplierMetric(
            "Low Stock",
            inv.low_stock,
            "Monitor"
        )}

                    ${supplierMetric(
            "Critical",
            inv.critical_stock,
            "Action required"
        )}

                </div>


                <div class="ai-why-box">

                    <strong>
                        ✦ AI INVENTORY INSIGHT
                    </strong>

                    <p>
                        ${inv.stockout_risks}
                        medicines have five days or less
                        of estimated inventory runway.
                        MediNexus can evaluate alternate suppliers
                        and prepare recovery plans before stockout.
                    </p>

                </div>

            </section>


            <!-- QUICK ACTIONS -->

            <section
                class="panel"
                style="margin-top:20px;"
            >

                <div class="panel-header">

                    <div>

                        <div class="panel-eyebrow">
                            Fast Actions
                        </div>

                        <h2>
                            Procurement Workspace
                        </h2>

                    </div>

                </div>


                <div class="quick-actions">

                    <div
                        class="quick-action"
                        onclick="showProcurement()"
                        style="cursor:pointer;"
                    >

                        <div class="quick-action-icon">
                            ✦
                        </div>

                        <strong>
                            Start Procurement
                        </strong>

                        <span>
                            Describe what your facility needs
                            in natural language.
                        </span>

                    </div>


                    <div
                        class="quick-action"
                        onclick="showSuppliers()"
                        style="cursor:pointer;"
                    >

                        <div class="quick-action-icon">
                            ◎
                        </div>

                        <strong>
                            Compare Suppliers
                        </strong>

                        <span>
                            Let AI evaluate price,
                            delivery and reliability.
                        </span>

                    </div>


                    <div
                        class="quick-action"
                        onclick="showExceptions()"
                        style="cursor:pointer;"
                    >

                        <div class="quick-action-icon">
                            ⚡
                        </div>

                        <strong>
                            Resolve Exception
                        </strong>

                        <span>
                            Review supply disruptions
                            and autonomous recovery.
                        </span>

                    </div>


                    <div
                        class="quick-action"
                        onclick="showOrders()"
                        style="cursor:pointer;"
                    >

                        <div class="quick-action-icon">
                            □
                        </div>

                        <strong>
                            View Orders
                        </strong>

                        <span>
                            Track ${orders.active_orders}
                            procurement orders.
                        </span>

                    </div>

                </div>

            </section>


            <!-- AUTONOMOUS LOOP -->

            <section
                class="panel"
                style="margin-top:20px;"
            >

                <div class="panel-header">

                    <div>

                        <div class="panel-eyebrow">
                            AI AGENT
                        </div>

                        <h2>
                            Predict → Decide → Act → Recover
                        </h2>

                    </div>

                </div>


                <div
                    style="
                        display:grid;
                        grid-template-columns:repeat(4,1fr);
                        gap:10px;
                    "
                >

                    ${pipelineStep(
            "01",
            "Predict",
            "Detect stockout risk",
            true
        )}

                    ${pipelineStep(
            "02",
            "Decide",
            "Evaluate suppliers",
            true
        )}

                    ${pipelineStep(
            "03",
            "Act",
            "Prepare procurement",
            true
        )}

                    ${pipelineStep(
            "04",
            "Recover",
            "Replan disruptions",
            true
        )}

                </div>

            </section>

        `;

    } catch (error) {

        console.error(
            "Dashboard error:",
            error
        );

        mainContent.innerHTML = `
            <section class="panel">
                <h2>Dashboard unavailable</h2>
                <p>${error.message}</p>
            </section>
        `;
    }
};


// Dashboard always uses the clean live version
window.showDashboard =
    window.showRealDashboard;
// ======================================================
// FINAL MEDINEXUS APPLICATION SHELL FIX
// Restores the original layout structure
// ======================================================

window.launchMediNexusApp = function () {

    console.log("MediNexus: restoring original application shell");

    document.body.innerHTML = `

        <div class="app-shell">

            <!-- SIDEBAR -->
            <aside class="sidebar">

                <div class="sidebar-logo">

                    <div class="sidebar-logo-icon">
                        +
                    </div>

                    <div>
                        <strong>MediNexus</strong>
                        <small>AI Procurement</small>
                    </div>

                </div>


                <div class="sidebar-section">
                    Main
                </div>


                <nav class="sidebar-nav">

                    <button
                        class="active"
                        onclick="showDashboard()"
                    >
                        <span>▦</span>
                        Dashboard
                    </button>

                    <button onclick="showInventory()">
                        <span>▥</span>
                        Inventory
                    </button>

                    <button onclick="showProcurement()">
                        <span>＋</span>
                        Procurement
                    </button>

                    <button onclick="showSuppliers()">
                        <span>⌁</span>
                        Suppliers
                    </button>

                    <button onclick="showOrders()">
                        <span>□</span>
                        Orders
                    </button>

                </nav>


                <div class="sidebar-section">
                    Monitoring
                </div>


                <nav class="sidebar-nav">

                    <button onclick="showExceptions()">

                        <span>⚠</span>

                        Exceptions

                        <span
                            style="
                                margin-left:auto;
                                min-width:22px;
                                height:22px;
                                display:grid;
                                place-items:center;
                                border-radius:999px;
                                background:rgba(239,68,68,.18);
                                color:#ff7777;
                                font-size:9px;
                                font-weight:800;
                            "
                        >
                            3
                        </span>

                    </button>

                </nav>


                <div class="sidebar-bottom">

                    <div class="ai-online">

                        <div class="ai-online-status">
                            AI Agent Online
                        </div>

                        <small>
                            Monitoring continuously
                        </small>

                    </div>


                    <nav class="sidebar-nav">

                        <button onclick="showSettings()">

                            <span>⚙</span>

                            Settings

                        </button>

                    </nav>

                </div>

            </aside>


            <!-- IMPORTANT:
                 Use the ORIGINAL main-content structure
            -->

            <main class="main-content">

                <header class="topbar">

                    <div class="breadcrumb">

                        Workspace /

                        <strong id="breadcrumbPage">
                            Dashboard
                        </strong>

                    </div>


                    <div class="topbar-right">

                        <button class="notification-button">
                            ♧
                        </button>


                        <div class="user-avatar">
                            DS
                        </div>


                        <div class="user-info">

                            <strong>
                                Dr. Sharma
                            </strong>

                            <small>
                                Procurement Manager
                            </small>

                        </div>

                    </div>

                </header>


                <section
                    class="dashboard"
                    id="mainContent"
                >
                </section>

            </main>

        </div>
    `;


    console.log(
        "MediNexus: original shell restored"
    );


    // Load the live PostgreSQL dashboard
    if (
        typeof window.showRealDashboard ===
        "function"
    ) {

        window.showRealDashboard();

    } else {

        console.error(
            "MediNexus: showRealDashboard not found"
        );

    }

};
// ======================================================
// MISSING DASHBOARD HELPER
// ======================================================

window.supplierMetric = function (label, value, note) {

    return `
        <div
            style="
                padding:18px;
                border:1px solid #e2ebf0;
                border-radius:14px;
                background:#ffffff;
            "
        >

            <div
                style="
                    color:#8095a4;
                    font-size:10px;
                    font-weight:700;
                    text-transform:uppercase;
                    letter-spacing:.5px;
                    margin-bottom:8px;
                "
            >
                ${label}
            </div>

            <div
                style="
                    color:#08283b;
                    font-size:22px;
                    font-weight:800;
                "
            >
                ${value}
            </div>

            <div
                style="
                    margin-top:5px;
                    color:#8a9aa5;
                    font-size:10px;
                "
            >
                ${note}
            </div>

        </div>
    `;
};
// ======================================================
// MEDINEXUS DASHBOARD HELPER FUNCTIONS
// ======================================================

window.kpiCard = function (
    title,
    value,
    subtitle,
    icon,
    type
) {

    return `
        <div class="kpi-card">

            <div class="kpi-top">

                <span class="kpi-label">
                    ${title}
                </span>

                <span class="kpi-icon ${type || ""}">
                    ${icon}
                </span>

            </div>

            <div class="kpi-value">
                ${value}
            </div>

            <div class="kpi-subtitle">
                ${subtitle}
            </div>

        </div>
    `;
};


window.activityItem = function (
    title,
    description,
    status
) {

    return `
        <div class="activity-item">

            <div class="activity-dot"></div>

            <div class="activity-content">

                <strong>
                    ${title}
                </strong>

                <span>
                    ${description}
                </span>

            </div>

            <div class="activity-status">
                ${status}
            </div>

        </div>
    `;
};


window.supplierMetric = function (
    label,
    value,
    note
) {

    return `
        <div class="metric-box">

            <span>
                ${label}
            </span>

            <strong>
                ${value}
            </strong>

            <small>
                ${note}
            </small>

        </div>
    `;
};


window.pipelineStep = function (
    number,
    title,
    description,
    completed
) {

    return `
        <div
            style="
                padding:18px;
                border:1px solid #dfeaed;
                border-radius:14px;
                background:#f8fcfc;
                position:relative;
            "
        >

            <div
                style="
                    width:32px;
                    height:32px;
                    display:grid;
                    place-items:center;
                    border-radius:9px;
                    background:#e5faf6;
                    color:#079f91;
                    font-size:11px;
                    font-weight:800;
                    margin-bottom:12px;
                "
            >
                ${completed ? "✓" : number}
            </div>

            <strong
                style="
                    display:block;
                    color:#0b1f33;
                    font-size:13px;
                "
            >
                ${title}
            </strong>

            <p
                style="
                    margin:6px 0 0;
                    color:#718797;
                    font-size:10px;
                    line-height:1.5;
                "
            >
                ${description}
            </p>

        </div>
    `;
};
/* ============================================================
   MEDINEXUS - PREMIUM DYNAMIC RECOVERY PLAN UI
   Visual override only - keeps existing recovery backend logic
   ============================================================ */

window.showDynamicRecoveryPlan = function (recoveryData) {

    const mainContent = document.getElementById("mainContent");

    if (!mainContent) {
        console.error("mainContent not found.");
        return;
    }

    const recovery =
        recoveryData?.recovery ||
        recoveryData ||
        {};

    const supplier =
        recovery.alternative_supplier ||
        {};

    const requirement =
        recovery.dynamic_requirement ||
        {};

    const inventory =
        recovery.inventory ||
        {};

    const medicine =
        requirement.medicine ||
        recovery.medicine ||
        "Medicine";

    const currentStock =
        Number(
            requirement.current_stock ??
            inventory.current_stock ??
            0
        );

    const dailyConsumption =
        Number(
            requirement.daily_consumption ??
            inventory.daily_consumption ??
            0
        );

    const procurementNeed =
        Number(
            requirement.recommended_quantity ??
            requirement.procurement_quantity ??
            recovery.procurement_quantity ??
            0
        );

    const stockoutDeadline =
        Number(
            requirement.stockout_deadline_days ??
            requirement.deadline_days ??
            recovery.deadline_days ??
            0
        );

    const supplierName =
        supplier.supplier_name ||
        "Approved Alternate Supplier";

    const aiScore =
        Number(supplier.final_score ?? 0);

    const deliveryDays =
        Number(supplier.delivery_days ?? 0);

    const reliability =
        Number(supplier.reliability_score ?? 0);

    const availability =
        Number(supplier.availability_score ?? 0);

    const unitPrice =
        Number(supplier.unit_price ?? 0);

    const estimatedValue =
        Number(
            supplier.estimated_total_cost ??
            procurementNeed * unitPrice
        );

    updateBreadcrumb("AI Recovery");
    setActiveNav("Exceptions");

    mainContent.innerHTML = `

        <div style="
            max-width:1180px;
            margin:0 auto;
            padding-bottom:35px;
        ">

            <!-- PAGE HEADER -->
            <div style="
                display:flex;
                justify-content:space-between;
                align-items:flex-end;
                gap:20px;
                margin-bottom:22px;
            ">

                <div>

                    <div style="
                        color:#079f91;
                        font-size:10px;
                        font-weight:800;
                        letter-spacing:1.5px;
                        text-transform:uppercase;
                        margin-bottom:8px;
                    ">
                        AI Recovery Engine
                    </div>

                    <h1 style="
                        margin:0;
                        color:#08283b;
                        font-size:30px;
                        font-weight:800;
                        letter-spacing:-.7px;
                    ">
                        Autonomous Recovery Plan
                    </h1>

                    <p style="
                        margin:8px 0 0;
                        color:#718899;
                        font-size:12px;
                    ">
                        Live exception analysis and supplier replanning.
                    </p>

                </div>

                <div style="
                    display:flex;
                    align-items:center;
                    gap:7px;
                    padding:8px 12px;
                    border-radius:999px;
                    background:#eaf9f7;
                    border:1px solid #cceee9;
                    color:#078b7e;
                    font-size:9px;
                    font-weight:800;
                ">
                    <span style="
                        width:7px;
                        height:7px;
                        border-radius:50%;
                        background:#14b8a6;
                        box-shadow:0 0 0 4px rgba(20,184,166,.12);
                    "></span>

                    LIVE AI ANALYSIS
                </div>

            </div>


            <!-- CRITICAL ALERT -->
            <section style="
                padding:18px 20px;
                border-radius:16px;
                background:
                    linear-gradient(
                        135deg,
                        #fff7f7,
                        #fffafa
                    );
                border:1px solid #f1d5d5;
                margin-bottom:18px;
                display:flex;
                align-items:center;
                gap:15px;
            ">

                <div style="
                    width:40px;
                    height:40px;
                    border-radius:12px;
                    display:grid;
                    place-items:center;
                    background:#fff0f0;
                    color:#dc2626;
                    font-size:18px;
                    font-weight:800;
                    flex-shrink:0;
                ">
                    !
                </div>

                <div style="flex:1;">

                    <div style="
                        color:#b42323;
                        font-size:10px;
                        font-weight:800;
                        letter-spacing:.8px;
                    ">
                        CRITICAL STOCKOUT EXCEPTION
                    </div>

                    <div style="
                        margin-top:4px;
                        color:#5d2930;
                        font-size:13px;
                        font-weight:700;
                    ">
                        ${medicine}
                    </div>

                    <div style="
                        margin-top:3px;
                        color:#8c6268;
                        font-size:10px;
                    ">
                        Current inventory is approaching stockout.
                        AI recovery is ready for human approval.
                    </div>

                </div>

                <div style="
                    text-align:right;
                    flex-shrink:0;
                ">

                    <div style="
                        color:#dc2626;
                        font-size:21px;
                        font-weight:800;
                    ">
                        ${stockoutDeadline}
                    </div>

                    <div style="
                        color:#9a6b71;
                        font-size:8px;
                        font-weight:800;
                        letter-spacing:.5px;
                    ">
                        DAYS REMAINING
                    </div>

                </div>

            </section>


            <!-- LIVE INVENTORY METRICS -->
            <section style="
                display:grid;
                grid-template-columns:repeat(4,1fr);
                gap:13px;
                margin-bottom:18px;
            ">

                ${window.recoveryMetricCard
            ? recoveryMetricCard(
                "CURRENT STOCK",
                currentStock,
                "units remaining",
                "◉"
            )
            : `
                    <div style="
                        padding:20px;
                        background:white;
                        border:1px solid #dfe9ed;
                        border-radius:16px;
                    ">
                        <div style="color:#8095a4;font-size:9px;font-weight:800;letter-spacing:.8px;">
                            CURRENT STOCK
                        </div>
                        <div style="margin-top:8px;color:#08283b;font-size:27px;font-weight:800;">
                            ${currentStock}
                        </div>
                        <div style="margin-top:3px;color:#8a9aa5;font-size:9px;">
                            units remaining
                        </div>
                    </div>
                `}

                ${window.recoveryMetricCard
            ? recoveryMetricCard(
                "DAILY CONSUMPTION",
                dailyConsumption,
                "units per day",
                "↗"
            )
            : `
                    <div style="
                        padding:20px;
                        background:white;
                        border:1px solid #dfe9ed;
                        border-radius:16px;
                    ">
                        <div style="color:#8095a4;font-size:9px;font-weight:800;letter-spacing:.8px;">
                            DAILY CONSUMPTION
                        </div>
                        <div style="margin-top:8px;color:#08283b;font-size:27px;font-weight:800;">
                            ${dailyConsumption}
                        </div>
                        <div style="margin-top:3px;color:#8a9aa5;font-size:9px;">
                            units per day
                        </div>
                    </div>
                `}

                ${window.recoveryMetricCard
            ? recoveryMetricCard(
                "PROCUREMENT NEED",
                procurementNeed,
                "units to replenish",
                "＋"
            )
            : `
                    <div style="
                        padding:20px;
                        background:white;
                        border:1px solid #cceee9;
                        border-radius:16px;
                    ">
                        <div style="color:#078b7e;font-size:9px;font-weight:800;letter-spacing:.8px;">
                            PROCUREMENT NEED
                        </div>
                        <div style="margin-top:8px;color:#078b7e;font-size:27px;font-weight:800;">
                            ${procurementNeed}
                        </div>
                        <div style="margin-top:3px;color:#6f9995;font-size:9px;">
                            units to replenish
                        </div>
                    </div>
                `}

                ${window.recoveryMetricCard
            ? recoveryMetricCard(
                "STOCKOUT DEADLINE",
                stockoutDeadline,
                "days to replenish",
                "!"
            )
            : `
                    <div style="
                        padding:20px;
                        background:#fffafa;
                        border:1px solid #f1d5d5;
                        border-radius:16px;
                    ">
                        <div style="color:#c23a3a;font-size:9px;font-weight:800;letter-spacing:.8px;">
                            STOCKOUT DEADLINE
                        </div>
                        <div style="margin-top:8px;color:#c23a3a;font-size:27px;font-weight:800;">
                            ${stockoutDeadline}
                        </div>
                        <div style="margin-top:3px;color:#a77a7a;font-size:9px;">
                            days to replenish
                        </div>
                    </div>
                `}

            </section>


            <!-- MAIN RECOVERY GRID -->
            <section style="
                display:grid;
                grid-template-columns:minmax(0,1.45fr) minmax(300px,.75fr);
                gap:18px;
                align-items:stretch;
            ">

                <!-- SUPPLIER RECOMMENDATION -->
                <div style="
                    padding:25px;
                    border-radius:18px;
                    background:
                        linear-gradient(
                            135deg,
                            #08283b,
                            #0a4050
                        );
                    color:white;
                    box-shadow:0 16px 35px rgba(6,38,53,.14);
                    position:relative;
                    overflow:hidden;
                ">

                    <div style="
                        position:absolute;
                        width:190px;
                        height:190px;
                        right:-70px;
                        top:-70px;
                        border-radius:50%;
                        border:1px solid rgba(94,234,212,.12);
                    "></div>

                    <div style="
                        color:#5eead4;
                        font-size:9px;
                        font-weight:800;
                        letter-spacing:1.3px;
                    ">
                        AI PROPOSED RECOVERY
                    </div>

                    <div style="
                        margin-top:15px;
                        display:flex;
                        justify-content:space-between;
                        align-items:flex-start;
                        gap:20px;
                    ">

                        <div>

                            <div style="
                                color:#91aebb;
                                font-size:8px;
                                font-weight:700;
                                letter-spacing:.7px;
                            ">
                                ALTERNATE SUPPLIER
                            </div>

                            <h2 style="
                                margin:5px 0 0;
                                color:white;
                                font-size:24px;
                                font-weight:800;
                                letter-spacing:-.4px;
                            ">
                                ${supplierName}
                            </h2>

                            <div style="
                                margin-top:6px;
                                color:#a9c4cf;
                                font-size:10px;
                            ">
                                Approved alternate supplier selected by the procurement engine.
                            </div>

                        </div>

                        <div style="
                            min-width:95px;
                            padding:12px;
                            text-align:center;
                            border-radius:13px;
                            background:rgba(255,255,255,.07);
                            border:1px solid rgba(255,255,255,.10);
                        ">

                            <div style="
                                color:#5eead4;
                                font-size:25px;
                                font-weight:800;
                            ">
                                ${aiScore.toFixed(1)}%
                            </div>

                            <div style="
                                margin-top:2px;
                                color:#8faeb9;
                                font-size:7px;
                                font-weight:800;
                                letter-spacing:.6px;
                            ">
                                AI DECISION SCORE
                            </div>

                        </div>

                    </div>


                    <!-- SUPPLIER METRICS -->
                    <div style="
                        display:grid;
                        grid-template-columns:repeat(3,1fr);
                        gap:10px;
                        margin-top:23px;
                    ">

                        <div style="
                            padding:13px;
                            border-radius:12px;
                            background:rgba(255,255,255,.055);
                            border:1px solid rgba(255,255,255,.08);
                        ">

                            <div style="
                                color:#819fab;
                                font-size:7px;
                                font-weight:800;
                                letter-spacing:.7px;
                            ">
                                DELIVERY
                            </div>

                            <div style="
                                margin-top:6px;
                                color:white;
                                font-size:18px;
                                font-weight:800;
                            ">
                                ${deliveryDays} days
                            </div>

                        </div>


                        <div style="
                            padding:13px;
                            border-radius:12px;
                            background:rgba(255,255,255,.055);
                            border:1px solid rgba(255,255,255,.08);
                        ">

                            <div style="
                                color:#819fab;
                                font-size:7px;
                                font-weight:800;
                                letter-spacing:.7px;
                            ">
                                RELIABILITY
                            </div>

                            <div style="
                                margin-top:6px;
                                color:white;
                                font-size:18px;
                                font-weight:800;
                            ">
                                ${reliability}%
                            </div>

                        </div>


                        <div style="
                            padding:13px;
                            border-radius:12px;
                            background:rgba(255,255,255,.055);
                            border:1px solid rgba(255,255,255,.08);
                        ">

                            <div style="
                                color:#819fab;
                                font-size:7px;
                                font-weight:800;
                                letter-spacing:.7px;
                            ">
                                AVAILABILITY
                            </div>

                            <div style="
                                margin-top:6px;
                                color:white;
                                font-size:18px;
                                font-weight:800;
                            ">
                                ${availability}%
                            </div>

                        </div>

                    </div>


                    <!-- DECISION EXPLANATION -->
                    <div style="
                        margin-top:16px;
                        padding:15px;
                        border-radius:12px;
                        background:rgba(94,234,212,.07);
                        border:1px solid rgba(94,234,212,.13);
                    ">

                        <div style="
                            color:#5eead4;
                            font-size:8px;
                            font-weight:800;
                            letter-spacing:.7px;
                        ">
                            WHY THIS SUPPLIER?
                        </div>

                        <div style="
                            margin-top:7px;
                            color:#b9ced6;
                            font-size:10px;
                            line-height:1.65;
                        ">
                            The recovery engine prioritized deadline compliance,
                            delivery speed, supplier reliability, availability,
                            price and procurement risk.
                            ${supplierName} can deliver within the
                            ${stockoutDeadline}-day recovery window.
                        </div>

                    </div>

                </div>


                <!-- PROCUREMENT ACTION -->
                <div style="
                    padding:24px;
                    border-radius:18px;
                    background:white;
                    border:1px solid #dfe9ed;
                    box-shadow:0 10px 30px rgba(9,38,58,.04);
                    display:flex;
                    flex-direction:column;
                ">

                    <div style="
                        color:#079f91;
                        font-size:9px;
                        font-weight:800;
                        letter-spacing:1px;
                    ">
                        PROCUREMENT ACTION
                    </div>

                    <h3 style="
                        margin:8px 0 0;
                        color:#08283b;
                        font-size:19px;
                        font-weight:800;
                    ">
                        Recovery order
                    </h3>

                    <p style="
                        margin:7px 0 0;
                        color:#718899;
                        font-size:10px;
                        line-height:1.6;
                    ">
                        The proposed quantity is calculated from live
                        inventory consumption and the recovery target.
                    </p>


                    <div style="
                        margin-top:20px;
                        padding:17px;
                        border-radius:13px;
                        background:#f6fbfa;
                        border:1px solid #d9eeeb;
                    ">

                        <div style="
                            color:#8095a4;
                            font-size:8px;
                            font-weight:800;
                            letter-spacing:.6px;
                        ">
                            PROCUREMENT QUANTITY
                        </div>

                        <div style="
                            margin-top:4px;
                            color:#078b7e;
                            font-size:30px;
                            font-weight:800;
                        ">
                            ${procurementNeed}
                        </div>

                        <div style="
                            color:#71918e;
                            font-size:9px;
                        ">
                            units
                        </div>

                    </div>


                    <div style="
                        display:flex;
                        justify-content:space-between;
                        align-items:flex-end;
                        margin-top:18px;
                        padding-bottom:17px;
                        border-bottom:1px solid #e6eef1;
                    ">

                        <div>

                            <div style="
                                color:#8095a4;
                                font-size:8px;
                                font-weight:800;
                            ">
                                ESTIMATED VALUE
                            </div>

                            <div style="
                                margin-top:4px;
                                color:#08283b;
                                font-size:23px;
                                font-weight:800;
                            ">
                                ₹${estimatedValue.toFixed(2)}
                            </div>

                        </div>

                        <div style="
                            text-align:right;
                        ">

                            <div style="
                                color:#8095a4;
                                font-size:8px;
                                font-weight:800;
                            ">
                                UNIT PRICE
                            </div>

                            <div style="
                                margin-top:4px;
                                color:#08283b;
                                font-size:13px;
                                font-weight:700;
                            ">
                                ₹${unitPrice.toFixed(2)}
                            </div>

                        </div>

                    </div>


                    <div style="
                        margin-top:auto;
                        padding-top:18px;
                    ">

                        <div style="
                            display:flex;
                            align-items:center;
                            gap:8px;
                            margin-bottom:12px;
                            color:#627b8d;
                            font-size:9px;
                        ">

                            <span style="
                                width:8px;
                                height:8px;
                                border-radius:50%;
                                background:#14b8a6;
                            "></span>

                            Human approval required before PO creation

                        </div>

                        <button
                            onclick="approveRecoveryPlan()"
                            style="
                                width:100%;
                                border:0;
                                border-radius:12px;
                                padding:14px 16px;
                                background:
                                    linear-gradient(
                                        135deg,
                                        #14b8a6,
                                        #079f91
                                    );
                                color:white;
                                font-size:11px;
                                font-weight:800;
                                cursor:pointer;
                                box-shadow:0 9px 20px rgba(20,184,166,.22);
                            "
                        >
                            ✓ Approve Recovery & Create PO
                        </button>

                        <button
                            onclick="showExceptions()"
                            style="
                                width:100%;
                                margin-top:9px;
                                border:1px solid #dce7eb;
                                border-radius:12px;
                                padding:11px 16px;
                                background:white;
                                color:#627b8d;
                                font-size:10px;
                                font-weight:700;
                                cursor:pointer;
                            "
                        >
                            ← Back to Exceptions
                        </button>

                    </div>

                </div>

            </section>


            <!-- DECISION PIPELINE -->
            <section style="
                margin-top:18px;
                padding:22px;
                border-radius:18px;
                background:white;
                border:1px solid #dfe9ed;
            ">

                <div style="
                    color:#079f91;
                    font-size:9px;
                    font-weight:800;
                    letter-spacing:1px;
                ">
                    AUTONOMOUS RECOVERY PIPELINE
                </div>

                <div style="
                    margin-top:6px;
                    color:#08283b;
                    font-size:18px;
                    font-weight:800;
                ">
                    Detect → Analyze → Decide → Propose → Approve
                </div>

                <div style="
                    display:grid;
                    grid-template-columns:repeat(5,1fr);
                    gap:9px;
                    margin-top:16px;
                ">

                    ${[
            ["01", "Detect", "Stockout risk detected", "done"],
            ["02", "Analyze", "Inventory impact calculated", "done"],
            ["03", "Decide", "Alternate supplier selected", "done"],
            ["04", "Propose", "Recovery order prepared", "done"],
            ["05", "Approve", "Human confirmation required", "active"]
        ].map(step => `

                        <div style="
                            padding:13px;
                            border-radius:12px;
                            background:${step[3] === "active" ? "#eaf9f7" : "#f7fafb"};
                            border:1px solid ${step[3] === "active" ? "#bde6e1" : "#e2ebef"};
                        ">

                            <div style="
                                color:${step[3] === "active" ? "#078b7e" : "#91a3ad"};
                                font-size:8px;
                                font-weight:800;
                            ">
                                ${step[0]}
                            </div>

                            <div style="
                                margin-top:5px;
                                color:#08283b;
                                font-size:10px;
                                font-weight:800;
                            ">
                                ${step[1]}
                            </div>

                            <div style="
                                margin-top:4px;
                                color:#82949f;
                                font-size:8px;
                                line-height:1.4;
                            ">
                                ${step[2]}
                            </div>

                        </div>

                    `).join("")}

                </div>

            </section>

        </div>
    `;

};


/* ============================================================
   RECOVERY METRIC HELPER
   ============================================================ */

window.recoveryMetricCard = function (label, value, note, icon) {

    return `
        <div style="
            padding:20px;
            background:white;
            border:1px solid #dfe9ed;
            border-radius:16px;
            position:relative;
            overflow:hidden;
        ">

            <div style="
                position:absolute;
                top:15px;
                right:15px;
                width:27px;
                height:27px;
                border-radius:8px;
                display:grid;
                place-items:center;
                background:#eef9f7;
                color:#079f91;
                font-size:12px;
                font-weight:800;
            ">
                ${icon}
            </div>

            <div style="
                color:#8095a4;
                font-size:9px;
                font-weight:800;
                letter-spacing:.8px;
            ">
                ${label}
            </div>

            <div style="
                margin-top:8px;
                color:#08283b;
                font-size:27px;
                font-weight:800;
                letter-spacing:-.5px;
            ">
                ${value}
            </div>

            <div style="
                margin-top:3px;
                color:#8a9aa5;
                font-size:9px;
            ">
                ${note}
            </div>

        </div>
    `;
};


/* ============================================================
   CONNECT EXISTING DYNAMIC RECOVERY FLOW TO PREMIUM UI
   ============================================================ */

window.renderPremiumRecovery = function (data) {

    window.recoveryResult = data;

    window.showDynamicRecoveryPlan(data);

};


/* ============================================================
   IF THE EXISTING RECOVERY FLOW STORES window.recoveryResult,
   REFRESH THE UI WITH THE PREMIUM VERSION
   ============================================================ */

window.refreshPremiumRecovery = function () {

    if (window.recoveryResult) {
        window.showDynamicRecoveryPlan(
            window.recoveryResult
        );
    }

};
/* ============================================================
   FORCE PREMIUM RECOVERY UI
   ============================================================ */

window.openPremiumRecoveryFromCurrentData = function () {

    if (window.recoveryResult) {
        window.showDynamicRecoveryPlan(window.recoveryResult);
        return;
    }

    console.warn("No recoveryResult found yet.");
};


/* Re-route the existing dynamic recovery screen */
window.showRecoveryResult = function (data) {

    window.recoveryResult = data;

    window.showDynamicRecoveryPlan(data);

};


/* Make the existing recovery renderer use premium UI */
window.renderRecoveryPlan = function (data) {

    window.recoveryResult = data;

    window.showDynamicRecoveryPlan(data);

};
/* ============================================================
   MEDINEXUS - PREMIUM LIVE ORDERS PAGE
   ============================================================ */

window.showRealOrders = async function () {

    updateBreadcrumb("Orders");
    setActiveNav("Orders");

    const mainContent =
        document.getElementById("mainContent");

    if (!mainContent) return;

    mainContent.innerHTML = `

        <div style="
            max-width:1180px;
            margin:0 auto;
        ">

            <!-- HEADER -->

            <div style="
                display:flex;
                justify-content:space-between;
                align-items:flex-end;
                gap:20px;
                margin-bottom:24px;
            ">

                <div>

                    <div style="
                        color:#079f91;
                        font-size:10px;
                        font-weight:800;
                        letter-spacing:1.5px;
                        text-transform:uppercase;
                        margin-bottom:8px;
                    ">
                        Order Control Center
                    </div>

                    <h1 style="
                        margin:0;
                        color:#08283b;
                        font-size:30px;
                        font-weight:800;
                        letter-spacing:-.7px;
                    ">
                        Procurement Orders
                    </h1>

                    <p style="
                        margin:8px 0 0;
                        color:#718899;
                        font-size:12px;
                    ">
                        Live purchase orders generated by MediNexus.
                    </p>

                </div>

                <button
                    onclick="showProcurement()"
                    style="
                        border:0;
                        border-radius:12px;
                        padding:13px 18px;
                        background:#08283b;
                        color:white;
                        font-size:10px;
                        font-weight:800;
                        cursor:pointer;
                    "
                >
                    ＋ New Order
                </button>

            </div>


            <!-- STATUS BANNER -->

            <div style="
                display:flex;
                align-items:center;
                gap:10px;
                padding:13px 16px;
                margin-bottom:18px;
                border-radius:13px;
                background:#eaf9f7;
                border:1px solid #cceee9;
                color:#087e73;
                font-size:10px;
                font-weight:700;
            ">

                <span style="
                    width:8px;
                    height:8px;
                    border-radius:50%;
                    background:#14b8a6;
                    box-shadow:0 0 0 4px rgba(20,184,166,.10);
                "></span>

                Live orders loaded from PostgreSQL

            </div>


            <!-- ORDER CONTAINER -->

            <div id="liveOrdersContainer">

                <div style="
                    padding:40px;
                    text-align:center;
                    color:#8095a4;
                    background:white;
                    border:1px solid #dfe9ed;
                    border-radius:18px;
                ">
                    Loading purchase orders...
                </div>

            </div>

        </div>
    `;


    try {

        const response =
            await fetch(
                "http://127.0.0.1:5000/api/orders"
            );

        if (!response.ok) {
            throw new Error(
                "Failed to load orders"
            );
        }

        const data =
            await response.json();

        const orders =
            data.orders || [];

        const container =
            document.getElementById(
                "liveOrdersContainer"
            );

        if (!container) return;


        /* EMPTY STATE */

        if (orders.length === 0) {

            container.innerHTML = `

                <div style="
                    padding:55px 30px;
                    text-align:center;
                    background:white;
                    border:1px solid #dfe9ed;
                    border-radius:18px;
                ">

                    <div style="
                        width:52px;
                        height:52px;
                        margin:0 auto 15px;
                        display:grid;
                        place-items:center;
                        border-radius:15px;
                        background:#eaf9f7;
                        color:#079f91;
                        font-size:22px;
                    ">
                        ✓
                    </div>

                    <h3 style="
                        margin:0;
                        color:#08283b;
                        font-size:18px;
                    ">
                        No purchase orders yet
                    </h3>

                    <p style="
                        margin:7px 0 0;
                        color:#8095a4;
                        font-size:10px;
                    ">
                        Approved procurement actions will appear here.
                    </p>

                </div>
            `;

            return;
        }


        /* ORDER GRID */

        container.innerHTML = `

            <div style="
                display:grid;
                grid-template-columns:
                    repeat(auto-fit, minmax(340px, 1fr));
                gap:18px;
            ">

                ${orders.map(order => {

            const total =
                Number(
                    order.total_cost || 0
                );

            const score =
                Number(
                    order.ai_score || 0
                );

            const delivery =
                Number(
                    order.delivery_days || 0
                );

            const quantity =
                Number(
                    order.quantity || 0
                );

            const unitPrice =
                Number(
                    order.unit_price || 0
                );

            const deadline =
                Number(
                    order.deadline_days || 0
                );

            const status =
                order.order_status ||
                "Pending";

            return `

                        <article style="
                            background:white;
                            border:1px solid #dfe9ed;
                            border-radius:18px;
                            padding:21px;
                            box-shadow:
                                0 10px 30px
                                rgba(9,38,58,.05);
                        ">

                            <!-- CARD HEADER -->

                            <div style="
                                display:flex;
                                justify-content:space-between;
                                align-items:flex-start;
                                gap:15px;
                            ">

                                <div>

                                    <div style="
                                        color:#079f91;
                                        font-size:8px;
                                        font-weight:800;
                                        letter-spacing:1px;
                                    ">
                                        POSTGRESQL PURCHASE ORDER
                                    </div>

                                    <div style="
                                        margin-top:5px;
                                        color:#08283b;
                                        font-size:22px;
                                        font-weight:800;
                                    ">
                                        PO-${order.order_id}
                                    </div>

                                </div>


                                <span style="
                                    padding:7px 10px;
                                    border-radius:999px;
                                    background:#eef5ff;
                                    color:#2563eb;
                                    font-size:8px;
                                    font-weight:800;
                                    white-space:nowrap;
                                ">
                                    ${status.toUpperCase()}
                                </span>

                            </div>


                            <!-- MEDICINE -->

                            <div style="
                                margin-top:15px;
                                padding:13px;
                                border-radius:12px;
                                background:#f7fafb;
                                border:1px solid #e8eff2;
                            ">

                                <div style="
                                    color:#8095a4;
                                    font-size:8px;
                                    font-weight:800;
                                    letter-spacing:.6px;
                                ">
                                    MEDICINE
                                </div>

                                <div style="
                                    margin-top:5px;
                                    color:#17384d;
                                    font-size:13px;
                                    font-weight:800;
                                ">
                                    ${order.medicine_name}
                                </div>

                                <div style="
                                    margin-top:3px;
                                    color:#8095a4;
                                    font-size:9px;
                                ">
                                    ${quantity.toLocaleString()} units
                                </div>

                            </div>


                            <!-- SUPPLIER -->

                            <div style="
                                margin-top:14px;
                            ">

                                <div style="
                                    color:#8095a4;
                                    font-size:8px;
                                    font-weight:800;
                                    letter-spacing:.6px;
                                ">
                                    SUPPLIER
                                </div>

                                <div style="
                                    margin-top:4px;
                                    color:#08283b;
                                    font-size:13px;
                                    font-weight:800;
                                ">
                                    ${order.supplier_name}
                                </div>

                            </div>


                            <!-- METRICS -->

                            <div style="
                                display:grid;
                                grid-template-columns:
                                    repeat(3, 1fr);
                                gap:9px;
                                margin-top:17px;
                            ">

                                <div style="
                                    padding:12px;
                                    border-radius:11px;
                                    background:#f7fafb;
                                ">

                                    <div style="
                                        color:#8095a4;
                                        font-size:7px;
                                        font-weight:800;
                                    ">
                                        TOTAL COST
                                    </div>

                                    <div style="
                                        margin-top:5px;
                                        color:#08283b;
                                        font-size:14px;
                                        font-weight:800;
                                    ">
                                        ₹${total.toFixed(2)}
                                    </div>

                                </div>


                                <div style="
                                    padding:12px;
                                    border-radius:11px;
                                    background:#f7fafb;
                                ">

                                    <div style="
                                        color:#8095a4;
                                        font-size:7px;
                                        font-weight:800;
                                    ">
                                        DELIVERY
                                    </div>

                                    <div style="
                                        margin-top:5px;
                                        color:#08283b;
                                        font-size:14px;
                                        font-weight:800;
                                    ">
                                        ${delivery} days
                                    </div>

                                </div>


                                <div style="
                                    padding:12px;
                                    border-radius:11px;
                                    background:#eef9f7;
                                ">

                                    <div style="
                                        color:#078b7e;
                                        font-size:7px;
                                        font-weight:800;
                                    ">
                                        AI SCORE
                                    </div>

                                    <div style="
                                        margin-top:5px;
                                        color:#078b7e;
                                        font-size:14px;
                                        font-weight:800;
                                    ">
                                        ${score.toFixed(1)}%
                                    </div>

                                </div>

                            </div>


                            <!-- FOOTER -->

                            <div style="
                                display:flex;
                                justify-content:space-between;
                                align-items:center;
                                margin-top:15px;
                                padding-top:13px;
                                border-top:1px solid #edf1f3;
                            ">

                                <div style="
                                    color:#8095a4;
                                    font-size:8px;
                                ">
                                    Deadline: ${deadline} days
                                    · Unit: ₹${unitPrice.toFixed(2)}
                                </div>

                                <div style="
                                    color:#16a34a;
                                    font-size:8px;
                                    font-weight:800;
                                ">
                                    ● AI GENERATED
                                </div>

                            </div>

                        </article>

                    `;

        }).join("")}

            </div>
        `;


    } catch (error) {

        console.error(
            "Orders loading error:",
            error
        );

        const container =
            document.getElementById(
                "liveOrdersContainer"
            );

        if (container) {

            container.innerHTML = `

                <div style="
                    padding:30px;
                    border-radius:16px;
                    background:#fff7f7;
                    border:1px solid #f1d5d5;
                    color:#a33;
                    font-size:11px;
                ">
                    Could not load purchase orders from PostgreSQL.
                </div>

            `;

        }

    }

};


/* Make sidebar Orders button use the premium live page */
window.showOrders = window.showRealOrders;
// ============================================================
// FINAL SUPPLIER NAVIGATION FIX
// ============================================================

window.showSuppliers = async function () {
    const mainContent = document.getElementById("mainContent");

    if (!mainContent) {
        console.error("MediNexus: mainContent not found");
        return;
    }

    mainContent.innerHTML = `
        <div style="padding:32px;">
            <div style="
                background:linear-gradient(135deg,#0b1f33,#123653);
                border:1px solid rgba(20,184,166,0.25);
                border-radius:20px;
                padding:30px;
                color:white;
                margin-bottom:24px;
            ">
                <div style="
                    font-size:13px;
                    color:#14b8a6;
                    font-weight:700;
                    letter-spacing:1px;
                    margin-bottom:8px;
                ">
                    AI-POWERED SUPPLIER INTELLIGENCE
                </div>

                <h1 style="margin:0 0 10px;font-size:30px;">
                    Supplier Intelligence Center
                </h1>

                <p style="margin:0;color:#b9c9d8;">
                    Compare approved suppliers using delivery,
                    reliability, availability, price and risk.
                </p>
            </div>

            <div id="supplierContent">
                <div style="
                    padding:30px;
                    text-align:center;
                    color:#64748b;
                ">
                    Loading supplier intelligence...
                </div>
            </div>
        </div>
    `;

    try {
        const response = await fetch("http://127.0.0.1:5000/api/suppliers");
        const data = await response.json();

        if (!response.ok || !data.suppliers) {
            throw new Error("Supplier data unavailable");
        }

        const suppliers = data.suppliers;

        const approved = suppliers.filter(
            s => String(s.approval_status).toLowerCase() === "approved"
        ).length;

        const healthy = suppliers.filter(
            s => String(s.risk_level).toLowerCase() === "low"
        ).length;

        const watch = suppliers.filter(
            s => String(s.risk_level).toLowerCase() === "medium"
        ).length;

        const highRisk = suppliers.filter(
            s => String(s.risk_level).toLowerCase() === "high"
        ).length;

        document.getElementById("supplierContent").innerHTML = `
            <div style="
                display:grid;
                grid-template-columns:repeat(4,minmax(0,1fr));
                gap:18px;
                margin-bottom:24px;
            ">
                ${supplierMetric("Approved Suppliers", approved, "Approved network")}
                ${supplierMetric("Healthy", healthy, "Low risk")}
                ${supplierMetric("Under Watch", watch, "Medium risk")}
                ${supplierMetric("High Risk", highRisk, "Requires attention")}
            </div>

            <div style="
                background:white;
                border:1px solid #e2e8f0;
                border-radius:18px;
                overflow:hidden;
                box-shadow:0 8px 24px rgba(15,23,42,0.06);
            ">
                <div style="
                    padding:20px 24px;
                    border-bottom:1px solid #e2e8f0;
                    font-size:18px;
                    font-weight:700;
                    color:#0b1f33;
                ">
                    Supplier Comparison
                </div>

                <div style="overflow-x:auto;">
                    <table style="
                        width:100%;
                        border-collapse:collapse;
                        min-width:850px;
                    ">
                        <thead>
                            <tr style="background:#f8fafc;">
                                <th style="padding:15px;text-align:left;">Supplier</th>
                                <th style="padding:15px;text-align:left;">Price</th>
                                <th style="padding:15px;text-align:left;">Delivery</th>
                                <th style="padding:15px;text-align:left;">Reliability</th>
                                <th style="padding:15px;text-align:left;">Availability</th>
                                <th style="padding:15px;text-align:left;">Risk</th>
                            </tr>
                        </thead>

                        <tbody>
                            ${suppliers.slice(0, 20).map(s => `
                                <tr style="border-top:1px solid #eef2f7;">
                                    <td style="padding:15px;font-weight:700;color:#0b1f33;">
                                        ${s.supplier_name}
                                    </td>

                                    <td style="padding:15px;">
                                        ₹${Number(s.unit_price).toFixed(2)}
                                    </td>

                                    <td style="padding:15px;">
                                        ${s.delivery_days} days
                                    </td>

                                    <td style="padding:15px;">
                                        ${s.reliability_score}%
                                    </td>

                                    <td style="padding:15px;">
                                        ${s.availability_score}%
                                    </td>

                                    <td style="padding:15px;">
                                        <span style="
                                            padding:5px 10px;
                                            border-radius:999px;
                                            background:#ecfdf5;
                                            color:#047857;
                                            font-weight:700;
                                            font-size:12px;
                                        ">
                                            ${s.risk_level}
                                        </span>
                                    </td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    } catch (error) {
        console.error("Supplier page error:", error);

        document.getElementById("supplierContent").innerHTML = `
            <div style="
                padding:24px;
                background:#fff7ed;
                border:1px solid #fed7aa;
                border-radius:16px;
                color:#9a3412;
            ">
                Unable to load supplier intelligence.
                Make sure the Flask backend is running.
            </div>
        `;
    }
};

console.log("MediNexus: final supplier navigation loaded");
// ============================================================
// FINAL ORDERS DISPLAY FIX
// ============================================================

window.showOrders = async function () {
    const mainContent = document.getElementById("mainContent");

    if (!mainContent) {
        console.error("MediNexus: mainContent not found");
        return;
    }

    mainContent.innerHTML = `
        <div style="padding:32px;">

            <div style="
                background:linear-gradient(135deg,#0b1f33,#123653);
                border:1px solid rgba(20,184,166,.25);
                border-radius:20px;
                padding:30px;
                color:white;
                margin-bottom:24px;
            ">
                <div style="
                    color:#14b8a6;
                    font-size:12px;
                    font-weight:800;
                    letter-spacing:1px;
                    margin-bottom:8px;
                ">
                    PROCUREMENT CONTROL CENTER
                </div>

                <h1 style="
                    margin:0 0 8px;
                    font-size:30px;
                ">
                    Procurement Orders
                </h1>

                <p style="
                    margin:0;
                    color:#b9c9d8;
                ">
                    Live purchase orders generated by MediNexus.
                </p>
            </div>

            <div id="ordersContent">
                <div style="
                    padding:30px;
                    text-align:center;
                    color:#64748b;
                ">
                    Loading purchase orders...
                </div>
            </div>

        </div>
    `;

    try {
        const response = await fetch(
            "http://127.0.0.1:5000/api/orders"
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error("Unable to load orders");
        }

        const orders = data.orders || [];

        if (orders.length === 0) {

            document.getElementById("ordersContent").innerHTML = `
                <div style="
                    background:white;
                    border:1px solid #e2e8f0;
                    border-radius:18px;
                    padding:50px;
                    text-align:center;
                    color:#64748b;
                ">
                    <div style="
                        font-size:34px;
                        margin-bottom:12px;
                    ">
                        ✓
                    </div>

                    <h2 style="
                        margin:0 0 8px;
                        color:#0b1f33;
                    ">
                        No purchase orders
                    </h2>

                    <p style="margin:0;">
                        MediNexus has not generated any purchase orders yet.
                    </p>
                </div>
            `;

            return;
        }

        document.getElementById("ordersContent").innerHTML = `

            <div style="
                display:flex;
                align-items:center;
                justify-content:space-between;
                gap:16px;
                margin-bottom:20px;
                padding:16px 20px;
                background:#ecfdf5;
                border:1px solid #bbf7d0;
                border-radius:14px;
            ">

                <div>
                    <div style="
                        color:#047857;
                        font-weight:800;
                        font-size:13px;
                    ">
                        LIVE POSTGRESQL DATA
                    </div>

                    <div style="
                        color:#166534;
                        font-size:12px;
                        margin-top:3px;
                    ">
                        ${orders.length} purchase order${orders.length === 1 ? "" : "s"} loaded from PostgreSQL
                    </div>
                </div>

                <div style="
                    width:10px;
                    height:10px;
                    border-radius:50%;
                    background:#16a34a;
                "></div>

            </div>

            <div style="
                display:grid;
                grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
                gap:20px;
            ">

                ${orders.map(order => {

            const medicine =
                order.medicine_name ||
                order.medicine ||
                order.name ||
                "Medicine unavailable";

            const supplier =
                order.supplier_name ||
                order.supplier ||
                "Supplier unavailable";

            const quantity =
                Number(order.quantity || 0);

            const totalCost =
                Number(order.total_cost || 0);

            const deliveryDays =
                Number(order.delivery_days || 0);

            const aiScore =
                Number(order.ai_score || 0);

            const deadlineDays =
                Number(order.deadline_days || 0);

            const unitPrice =
                Number(order.unit_price || 0);

            return `

                        <div style="
                            background:white;
                            border:1px solid #e2e8f0;
                            border-radius:20px;
                            padding:24px;
                            box-shadow:0 8px 24px rgba(15,23,42,.06);
                        ">

                            <div style="
                                display:flex;
                                justify-content:space-between;
                                align-items:center;
                                margin-bottom:20px;
                            ">

                                <div>
                                    <div style="
                                        font-size:11px;
                                        font-weight:800;
                                        color:#64748b;
                                        letter-spacing:1px;
                                    ">
                                        POSTGRESQL PURCHASE ORDER
                                    </div>

                                    <div style="
                                        margin-top:5px;
                                        font-size:21px;
                                        font-weight:800;
                                        color:#0b1f33;
                                    ">
                                        PO-${order.order_id}
                                    </div>
                                </div>

                                <span style="
                                    padding:7px 12px;
                                    border-radius:999px;
                                    background:#fff7ed;
                                    color:#c2410c;
                                    font-size:11px;
                                    font-weight:800;
                                ">
                                    ${order.order_status || "PENDING"}
                                </span>

                            </div>

                            <div style="
                                padding:16px;
                                background:#f8fafc;
                                border-radius:14px;
                                margin-bottom:18px;
                            ">

                                <div style="
                                    font-size:10px;
                                    font-weight:800;
                                    color:#64748b;
                                    letter-spacing:.8px;
                                ">
                                    MEDICINE
                                </div>

                                <div style="
                                    margin-top:5px;
                                    font-size:17px;
                                    font-weight:800;
                                    color:#0b1f33;
                                    word-break:normal;
                                ">
                                    ${medicine}
                                </div>

                                <div style="
                                    margin-top:4px;
                                    color:#64748b;
                                    font-size:12px;
                                ">
                                    ${quantity.toLocaleString()} units
                                </div>

                            </div>

                            <div style="
                                display:grid;
                                grid-template-columns:1fr 1fr;
                                gap:14px;
                            ">

                                <div>
                                    <div style="
                                        font-size:10px;
                                        color:#64748b;
                                        font-weight:800;
                                    ">
                                        SUPPLIER
                                    </div>

                                    <div style="
                                        margin-top:4px;
                                        font-weight:700;
                                        color:#0b1f33;
                                    ">
                                        ${supplier}
                                    </div>
                                </div>

                                <div>
                                    <div style="
                                        font-size:10px;
                                        color:#64748b;
                                        font-weight:800;
                                    ">
                                        TOTAL COST
                                    </div>

                                    <div style="
                                        margin-top:4px;
                                        font-weight:800;
                                        color:#0b1f33;
                                    ">
                                        ₹${totalCost.toFixed(2)}
                                    </div>
                                </div>

                                <div>
                                    <div style="
                                        font-size:10px;
                                        color:#64748b;
                                        font-weight:800;
                                    ">
                                        DELIVERY
                                    </div>

                                    <div style="
                                        margin-top:4px;
                                        font-weight:700;
                                        color:#0b1f33;
                                    ">
                                        ${deliveryDays} days
                                    </div>
                                </div>

                                <div>
                                    <div style="
                                        font-size:10px;
                                        color:#64748b;
                                        font-weight:800;
                                    ">
                                        AI SCORE
                                    </div>

                                    <div style="
                                        margin-top:4px;
                                        font-weight:800;
                                        color:#047857;
                                    ">
                                        ${aiScore.toFixed(1)}%
                                    </div>
                                </div>

                            </div>

                            <div style="
                                margin-top:20px;
                                padding-top:15px;
                                border-top:1px solid #e2e8f0;
                                display:flex;
                                justify-content:space-between;
                                gap:10px;
                                color:#64748b;
                                font-size:11px;
                            ">
                                <span>
                                    Deadline: ${deadlineDays} days
                                </span>

                                <span>
                                    Unit: ₹${unitPrice.toFixed(2)}
                                </span>
                            </div>

                            <div style="
                                margin-top:14px;
                                color:#047857;
                                font-size:11px;
                                font-weight:800;
                            ">
                                ● AI GENERATED
                            </div>

                        </div>

                    `;
        }).join("")}

            </div>
        `;

    } catch (error) {

        console.error("MediNexus Orders error:", error);

        document.getElementById("ordersContent").innerHTML = `
            <div style="
                padding:24px;
                background:#fff7ed;
                border:1px solid #fed7aa;
                border-radius:16px;
                color:#9a3412;
            ">
                Unable to load purchase orders.
                Make sure the Flask backend is running.
            </div>
        `;
    }
};

console.log("MediNexus: final Orders display fix loaded");
// ============================================================
// MEDINEXUS — STOCKOUT CARD LAYOUT FIX
// Direct inline layout override
// ============================================================

window.stockoutItem = function (
    initials,
    name,
    meta,
    days,
    risk,
    percentage
) {

    let badgeBackground = "#ecfdf5";
    let badgeColor = "#047857";

    if (risk === "high") {
        badgeBackground = "#fff0f0";
        badgeColor = "#dc2626";
    }

    if (risk === "medium") {
        badgeBackground = "#fff7e6";
        badgeColor = "#b77900";
    }

    return `
        <div
            class="stockout-item"
            style="
                display:flex !important;
                align-items:center !important;
                width:100% !important;
                min-width:0 !important;
                box-sizing:border-box !important;
                gap:16px !important;
                padding:16px !important;
                border-radius:14px !important;
            "
        >

            <!-- MEDICINE ICON -->
            <div
                style="
                    flex:0 0 42px !important;
                    width:42px !important;
                    height:42px !important;
                    display:grid !important;
                    place-items:center !important;
                "
            >
                ${initials}
            </div>

            <!-- MEDICINE INFORMATION -->
            <div
                style="
                    flex:1 1 auto !important;
                    width:auto !important;
                    min-width:0 !important;
                "
            >

                <div
                    class="medicine-name"
                    style="
                        display:block !important;
                        width:auto !important;
                        min-width:0 !important;
                        white-space:normal !important;
                        word-break:normal !important;
                        overflow-wrap:break-word !important;
                        font-size:14px !important;
                        font-weight:800 !important;
                    "
                >
                    ${name}
                </div>

                <div
                    class="medicine-meta"
                    style="
                        display:block !important;
                        width:auto !important;
                        min-width:0 !important;
                        white-space:normal !important;
                        word-break:normal !important;
                        overflow-wrap:break-word !important;
                        margin-top:4px !important;
                    "
                >
                    ${meta}
                </div>

                <div
                    style="
                        width:100% !important;
                        margin-top:10px !important;
                    "
                >
                    <div
                        class="stock-bar"
                        style="
                            width:100% !important;
                            height:6px !important;
                        "
                    >
                        <div
                            style="
                                width:${percentage}% !important;
                                height:100% !important;
                            "
                        ></div>
                    </div>
                </div>

            </div>

            <!-- RISK -->
            <div
                style="
                    flex:0 0 105px !important;
                    width:105px !important;
                    min-width:105px !important;
                    text-align:right !important;
                "
            >

                <div
                    style="
                        color:#0b2940 !important;
                        font-size:13px !important;
                        font-weight:800 !important;
                        white-space:nowrap !important;
                    "
                >
                    ${days}
                </div>

                <div
                    style="
                        display:inline-block !important;
                        margin-top:6px !important;
                        padding:5px 8px !important;
                        border-radius:999px !important;
                        background:${badgeBackground} !important;
                        color:${badgeColor} !important;
                        font-size:9px !important;
                        font-weight:800 !important;
                        white-space:nowrap !important;
                    "
                >
                    ${risk.toUpperCase()} RISK
                </div>

            </div>

        </div>
    `;
};

console.log("MediNexus: stockout card layout fixed");
// ============================================================
// MEDINEXUS — DEFINITIVE DASHBOARD STOCKOUT LAYOUT FIX
// Applies directly to the rendered DOM.
// ============================================================

(function () {

    function fixStockoutCards() {

        const cards = document.querySelectorAll(
            ".stockout-list .stockout-item"
        );

        cards.forEach(card => {

            // Main card
            card.style.setProperty("display", "flex", "important");
            card.style.setProperty("align-items", "center", "important");
            card.style.setProperty("width", "100%", "important");
            card.style.setProperty("box-sizing", "border-box", "important");
            card.style.setProperty("gap", "16px", "important");
            card.style.setProperty("padding", "18px", "important");

            // All direct children
            const children = Array.from(card.children);

            if (children.length >= 3) {

                // Icon
                children[0].style.setProperty(
                    "flex", "0 0 44px", "important"
                );

                children[0].style.setProperty(
                    "width", "44px", "important"
                );

                // Main information column
                children[1].style.setProperty(
                    "flex", "1 1 auto", "important"
                );

                children[1].style.setProperty(
                    "min-width", "0", "important"
                );

                children[1].style.setProperty(
                    "width", "auto", "important"
                );

                // Right-side risk information
                children[2].style.setProperty(
                    "flex", "0 0 120px", "important"
                );

                children[2].style.setProperty(
                    "width", "120px", "important"
                );

                children[2].style.setProperty(
                    "min-width", "120px", "important"
                );

                children[2].style.setProperty(
                    "text-align", "right", "important"
                );
            }

            // Fix medicine name and description
            const name = card.querySelector(".medicine-name");
            const meta = card.querySelector(".medicine-meta");

            if (name) {
                name.style.setProperty(
                    "display", "block", "important"
                );

                name.style.setProperty(
                    "white-space", "normal", "important"
                );

                name.style.setProperty(
                    "word-break", "normal", "important"
                );

                name.style.setProperty(
                    "overflow-wrap", "normal", "important"
                );

                name.style.setProperty(
                    "width", "auto", "important"
                );

                name.style.setProperty(
                    "font-size", "14px", "important"
                );
            }

            if (meta) {
                meta.style.setProperty(
                    "display", "block", "important"
                );

                meta.style.setProperty(
                    "white-space", "normal", "important"
                );

                meta.style.setProperty(
                    "word-break", "normal", "important"
                );

                meta.style.setProperty(
                    "overflow-wrap", "normal", "important"
                );

                meta.style.setProperty(
                    "width", "auto", "important"
                );
            }

            // Stock progress bar
            const bar = card.querySelector(".stock-bar");

            if (bar) {
                bar.style.setProperty(
                    "width", "100%", "important"
                );

                bar.style.setProperty(
                    "max-width", "100%", "important"
                );
            }
        });
    }


    // Run immediately
    fixStockoutCards();


    // Run whenever Dashboard content changes
    const observer = new MutationObserver(function () {
        fixStockoutCards();
    });


    const mainContent =
        document.getElementById("mainContent");

    if (mainContent) {
        observer.observe(mainContent, {
            childList: true,
            subtree: true
        });
    }


    // Also run shortly after navigation
    setTimeout(fixStockoutCards, 100);
    setTimeout(fixStockoutCards, 500);
    setTimeout(fixStockoutCards, 1000);


    console.log(
        "MediNexus: definitive stockout layout fix active"
    );

})();