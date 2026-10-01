# MediNexus

## Hospital Pharmacy Inventory Replenishment System

MediNexus is a hospital pharmacy inventory and procurement management system designed to help monitor medicine stock levels and support faster, data-driven replenishment decisions.

## Problem Statement

Hospitals need to maintain sufficient medicine stock while avoiding shortages and unnecessary overstocking.

MediNexus helps identify medicines that require attention and supports procurement decisions using inventory status, consumption, supplier availability, delivery time, reliability, price, risk, and deadline requirements.

## Key Features

- Medicine inventory monitoring
- Stock-level tracking
- Daily consumption tracking
- Days remaining calculation
- Low-stock and critical-stock identification
- Supplier comparison
- Procurement requirement analysis
- Supplier recommendation
- Purchase order generation
- PostgreSQL database integration
- Purchase order management

## System Workflow

Requirement  
↓  
Inventory Analysis  
↓  
Procurement Analysis  
↓  
Supplier Recommendation  
↓  
Approval  
↓  
Purchase Order  
↓  
PostgreSQL

## Technology Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Python
- Flask
- REST APIs

### Database
- PostgreSQL

## Procurement Decision Logic

MediNexus currently uses a rule-based weighted scoring approach to compare suppliers.

The scoring considers:

- Delivery time
- Deadline feasibility
- Supplier reliability
- Product availability
- Price
- Procurement risk

The system evaluates available suppliers and provides a recommendation to support the procurement decision.

## Example

A user can enter a requirement such as:

> We need 500 units of Cefixime 200mg within 5 days for the emergency department.

MediNexus analyzes the requirement and available suppliers, displays the procurement analysis, and allows the user to approve the purchase order.

## Project Structure

MediNexus/
├── data/
│   ├── inventory.csv
│   ├── medicines.csv
│   ├── suppliers.csv
│   └── backend.py
├── app.py
├── generate_suppliers.py
├── get_medicines.py
├── load_data.py
├── index.html
├── script.js
├── style.css
├── .gitignore
└── README.md
