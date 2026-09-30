import requests
import csv
import time

URL = "https://rxnav.nlm.nih.gov/REST/drugs.json"

medicine_names = [
    "acetaminophen",
    "amoxicillin",
    "azithromycin",
    "cefixime",
    "ibuprofen",
    "ciprofloxacin",
    "doxycycline",
    "metronidazole",
    "cephalexin",
    "cefuroxime",
    "ceftriaxone",
    "clindamycin",
    "erythromycin",
    "levofloxacin",
    "moxifloxacin",
    "ofloxacin",
    "norfloxacin",
    "rifampin",
    "isoniazid",
    "ethambutol",
    "pyrazinamide",
    "metformin",
    "glimepiride",
    "gliclazide",
    "insulin",
    "sitagliptin",
    "linagliptin",
    "empagliflozin",
    "dapagliflozin",
    "pioglitazone",
    "amlodipine",
    "losartan",
    "valsartan",
    "telmisartan",
    "olmesartan",
    "atenolol",
    "metoprolol",
    "propranolol",
    "bisoprolol",
    "lisinopril",
    "enalapril",
    "ramipril",
    "atorvastatin",
    "rosuvastatin",
    "simvastatin",
    "pravastatin",
    "omeprazole",
    "pantoprazole",
    "esomeprazole",
    "lansoprazole",
    "rabeprazole",
    "famotidine",
    "cetirizine",
    "loratadine",
    "fexofenadine",
    "levocetirizine",
    "diphenhydramine",
    "montelukast",
    "salbutamol",
    "budesonide",
    "fluticasone",
    "beclomethasone",
    "prednisolone",
    "dexamethasone",
    "hydrocortisone",
    "diclofenac",
    "naproxen",
    "ketorolac",
    "meloxicam",
    "celecoxib",
    "tramadol",
    "gabapentin",
    "pregabalin",
    "carbamazepine",
    "phenytoin",
    "levetiracetam",
    "sertraline",
    "fluoxetine",
    "escitalopram",
    "paroxetine",
    "amitriptyline",
    "clonazepam",
    "diazepam",
    "ondansetron",
    "domperidone",
    "metoclopramide",
    "loperamide",
    "lactulose",
    "bisacodyl",
    "senna",
    "ferrous sulfate",
    "folic acid",
    "calcium carbonate",
    "vitamin d",
    "vitamin b12",
    "potassium chloride",
    "magnesium oxide",
    "allopurinol",
    "colchicine",
    "levothyroxine",
    "methimazole",
    "carbimazole"
]

all_medicines = {}

print("Starting RxNorm medicine collection...")
print("Search terms:", len(medicine_names))
print()

for index, medicine_name in enumerate(medicine_names, start=1):

    print(f"[{index}/{len(medicine_names)}] Searching: {medicine_name}")

    try:
        response = requests.get(
            URL,
            params={"name": medicine_name},
            timeout=30
        )

        if response.status_code != 200:
            print("  Skipped - API status:", response.status_code)
            continue

        data = response.json()

        groups = data.get("drugGroup", {}).get("conceptGroup", [])

        for group in groups:

            # We prefer SCD = Semantic Clinical Drug
            if group.get("tty") != "SCD":
                continue

            medicines = group.get("conceptProperties", [])

            for medicine in medicines:

                rxcui = medicine.get("rxcui")
                name = medicine.get("name")

                if rxcui and name:
                    all_medicines[rxcui] = {
                        "medicine_name": name,
                        "rxcui": rxcui,
                        "source": "RxNorm"
                    }

        print("  Records collected:", len(all_medicines))

        # Stop once we have enough records
        if len(all_medicines) >= 1000:
            print()
            print("Reached 1,000 medicine records.")
            break

        # Small delay so we don't hammer the API
        time.sleep(0.2)

    except requests.exceptions.RequestException as error:
        print("  Connection error:", error)


# Keep only the first 1,000 unique medicines
medicines = list(all_medicines.values())[:1000]

print()
print("=" * 50)
print("COLLECTION COMPLETE")
print("=" * 50)
print("Unique medicines collected:", len(medicines))


# Create the data folder if needed
import os

os.makedirs("data", exist_ok=True)

# Save CSV
file_path = "data/medicines.csv"

with open(file_path, "w", newline="", encoding="utf-8") as file:

    writer = csv.writer(file)

    writer.writerow([
        "medicine_id",
        "medicine_name",
        "rxcui",
        "source"
    ])

    for medicine in medicines:

        writer.writerow([
            medicine["rxcui"],
            medicine["medicine_name"],
            medicine["rxcui"],
            medicine["source"]
        ])

print()
print("CSV CREATED SUCCESSFULLY")
print("File:", file_path)
print("Records:", len(medicines))