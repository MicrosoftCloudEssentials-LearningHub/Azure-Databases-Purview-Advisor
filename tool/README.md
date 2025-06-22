# Azure Databases Advisor Tool - Unofficial

Costa Rica

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[brown9804](https://github.com/brown9804)

Last updated: 2025-06-20

----------

> [!IMPORTANT]
> The information and code in this repository are provided for demonstration purposes only. For official guidance, support, or more detailed information, please refer to Microsoft's official documentation or contact Microsoft directly: [Microsoft Sales and Support](https://support.microsoft.com/contactus?ContactUsExperienceEntryPointAssetId=S.HP.SMC-HOME)

<details>
<summary><b>List of References</b> (Click to expand)</summary>

- [Azure Storage Scalability Targets](https://learn.microsoft.com/en-us/azure/architecture/best-practices/data-partitioning#scalability-targets)
- [Types of Data in Azure](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/data-store-overview)
- [Performance best practices for Azure SQL Database and Azure SQL Managed Instance](https://learn.microsoft.com/en-us/azure/azure-sql/database/performance-guidance-overview)
- [Global Distribution with Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/distribute-data-globally)
- [Consistency Levels in Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels)
- [Introduction to Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/introduction)
- [Security overview for Azure SQL Database and Azure SQL Managed Instance](https://learn.microsoft.com/en-us/azure/azure-sql/database/security-overview)
- [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)
- [OLTP and OLAP in Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/oltp-olap-overview)
- [Azure Backup and Disaster Recovery](https://learn.microsoft.com/en-us/azure/backup/backup-overview)
- [Query Performance Insight](https://learn.microsoft.com/en-us/azure/azure-sql/database/query-performance-insight-use)
- [Data retention and deletion in Microsoft Azure](https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-data-retention)

</details>

## Overview

The **Azure Databases Advisor Tool** is designed to help users select the most suitable Azure database service based on their specific use case. It provides recommendations by analyzing user inputs such as data type, scalability needs, latency requirements, and more.

This tool consists of:
- **Static Frontend**: A web-based interface for users to input their requirements and view recommendations. The frontend operates independently and uses hardcoded logic for recommendations.
- **Optional Backend**: A Flask API that processes user inputs and provides dynamic recommendations. The backend must be deployed separately to enable advanced functionality.

## Features

- **Interactive Questionnaire**: Users can answer detailed questions about their use case, including data volume, type, latency, scalability, and budget.
- **Dynamic Recommendations**: The tool suggests Azure database services such as Azure SQL Database, Cosmos DB, PostgreSQL, Synapse Analytics, and more.
- **Integration with Azure**: Designed to work seamlessly with Azure services and deployment models.
- **Customizable Backend**: The Flask API processes user inputs and provides tailored recommendations.
- **Static Web App**: A user-friendly frontend for interacting with the tool.

## Project Structure

```
tool/
├── backend/
│   └── app.py
└── web-app/
    ├── index.html
    ├── script.js
    └── styles.css
```

## Usage

### Frontend
The static web app is deployed via Azure Static Web Apps or GitHub Pages. It provides an interactive form for users to input their requirements. By default, the frontend operates independently and uses hardcoded logic for recommendations.

### Backend (Optional)
The backend (Flask API) processes user inputs and generates recommendations dynamically. To enable backend functionality:
1. Deploy the Flask API (`app.py`) to Azure App Service or Azure Functions.
2. Update the backend URL in `script.js` to point to the deployed API.

### Deployment Instructions

#### Backend Deployment
1. Use Azure App Service or Azure Functions to deploy the Flask API (`app.py`).
2. Ensure the API endpoint is accessible to the frontend.
3. Use Azure Monitor for logging and diagnostics.

#### Frontend Deployment
1. Deploy the static web app (`index.html`, `script.js`, `styles.css`) to Azure Static Web Apps.
2. Update the backend URL in `script.js` to point to the deployed API (if using the backend).

#### Security
- Secure API endpoints with Azure Active Directory (AAD) authentication.
- Use HTTPS for all communications.

## Expanded Questionnaire

The tool now includes the following questions to refine recommendations:
- **Data Volume**: Expected size and growth.
  - Options: `<10GB`, `10GB-1TB`, `>1TB`.
- **Data Type**: Structured, semi-structured, or unstructured.
  - Options: `Structured`, `Semi-structured`, `Unstructured`.
- **Latency Requirements**: Maximum acceptable delay for database operations.
  - Options: `<10ms`, `10-100ms`, `>100ms`.
- **Scalability Needs**: Horizontal or vertical scaling, global distribution.
  - Options: `Global`, `Local`.
- **Consistency Model**: Strong or eventual consistency.
  - Options: `Strong`, `Eventual`.
- **Integration Needs**: Compatibility with Azure services.
  - Options: `Yes`, `No`.
- **Security Requirements**: Encryption, role-based access control, compliance requirements.
  - Options: `Encryption`, `RBAC`, `Compliance`.
- **Budget Constraints**: Monthly budget for database services.
  - Options: `<100 USD`, `100-500 USD`, `>500 USD`.
- **Use Case Specifics**: OLTP, OLAP, or AI/ML workloads.
  - Options: `OLTP`, `OLAP`, `AI/ML`.
- **Backup and Disaster Recovery**: Automated backups and disaster recovery options.
  - Options: `Yes`, `No`.
- **Query Complexity**: Expected complexity of database queries.
  - Options: `Simple`, `Moderate`, `Complex`.
- **Data Retention Policy**: Retention period for data.
  - Options: `Short-term`, `Medium-term`, `Long-term`.

## Advanced Settings

If the "Advanced Settings" button is not working, please refer to [Advanced Configuration for Azure Databases](https://learn.microsoft.com/en-us/azure/azure-sql/database/advanced-configuration) for more information.

## Example Recommendation Flow

1. User selects **structured data** with **global distribution** and **high throughput**.
2. The tool recommends **Azure Cosmos DB (SQL API)**.
3. Links to Azure documentation are provided for further exploration.

<div align="center">
  <h3 style="color: #4CAF50;">Total Visitors</h3>
  <img src="https://profile-counter.glitch.me/brown9804/count.svg" alt="Visitor Count" style="border: 2px solid #4CAF50; border-radius: 5px; padding: 5px;"/>
</div>
