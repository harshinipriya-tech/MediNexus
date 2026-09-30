import csv
import random

# Supplier names
supplier_names = [
    "MediSource Healthcare",
    "HealthCorp India",
    "MedSupply",
    "PharmaLink",
    "Apollo MedTrade",
    "CarePlus Pharma",
    "PrimeMed Distributors",
    "LifeLine Medical Supply",
    "NovaPharm Distribution",
    "MedAxis Healthcare",
    "VitalCare Suppliers",
    "HealthBridge Pharma",
    "WellMed Distributors",
    "TrustMed Healthcare",
    "MedCore Supply",
    "RapidCare Medical",
    "HealthFirst Pharma",
    "GlobalMed Distributors",
    "SafeMeds Healthcare",
    "Regional Pharma Supply"
]

# Create 1000 supplier records
suppliers = []

for i in range(1, 1001):

    base_supplier = supplier_names[(i - 1) % len(supplier_names)]

    supplier = {
        "supplier_id": f"SUP{i:04d}",
        "supplier_name": f"{base_supplier} {((i - 1) // len(supplier_names)) + 1}",
        "unit_price": round(random.uniform(1.50, 2.50), 2),
        "delivery_days": random.randint(2, 10),
        "reliability_score": random.randint(75, 99),
        "availability_score": random.randint(80, 99),
        "approval_status": random.choice(["Approved", "Approved", "Approved", "Under Watch"]),
        "risk_level": random.choice(["Low", "Low", "Low", "Medium", "High"])
    }

    suppliers.append(supplier)

# Save inside data folder
output_file = "data/suppliers.csv"

with open(output_file, "w", newline="", encoding="utf-8") as file:

    fieldnames = [
        "supplier_id",
        "supplier_name",
        "unit_price",
        "delivery_days",
        "reliability_score",
        "availability_score",
        "approval_status",
        "risk_level"
    ]

    writer = csv.DictWriter(file, fieldnames=fieldnames)

    writer.writeheader()
    writer.writerows(suppliers)

print("SUPPLIER DATASET CREATED SUCCESSFULLY")
print("Records:", len(suppliers))
print("File:", output_file)