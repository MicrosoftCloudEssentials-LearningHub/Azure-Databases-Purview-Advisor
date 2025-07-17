# Azure Databases Advisor Tool - Unofficial

Costa Rica

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[brown9804](https://github.com/brown9804)

Last updated: 2025-07-17

----------

> [!IMPORTANT]
> The information and code in this repository are provided for demonstration purposes only. For official guidance, support, or more detailed information, please refer to Microsoft's official documentation or contact Microsoft directly: [Microsoft Sales and Support](https://support.microsoft.com/contactus?ContactUsExperienceEntryPointAssetId=S.HP.SMC-HOME)

<details>
<summary><b>List of References</b> (Click to expand)</summary>

- [Azure Storage Scalability Targets](https://learn.microsoft.com/en-us/azure/architecture/best-practices/data-partitioning#scalability-targets)
- [Types of Data in Azure](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/data-store-overview)
- [Global Distribution with Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/distribute-data-globally)
- [Consistency Levels in Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels)
- [Introduction to Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/introduction)
- [Security overview for Azure SQL Database and Azure SQL Managed Instance](https://learn.microsoft.com/en-us/azure/azure-sql/database/security-overview)
- [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)
- [Azure Backup and Disaster Recovery](https://learn.microsoft.com/en-us/azure/backup/backup-overview)
- [Query Performance Insight](https://learn.microsoft.com/en-us/azure/azure-sql/database/query-performance-insight-use)

</details>


> The [Azure Databases Advisor Tool](https://microsoftcloudessentials-learninghub.github.io/Azure-Databases-Purview-Advisor/) is designed to help users select the most suitable Azure database service based on their specific use case. It provides recommendations by analyzing user inputs such as data type, scalability needs, latency requirements, and more.

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

<details>
<summary><strong>Frontend (Click here to expand)</strong></summary>

> The static web app is deployed via Azure Static Web Apps or GitHub Pages. It provides an interactive form for users to input their requirements. By default, the frontend operates independently and uses hardcoded logic for recommendations.

</details>

<details>
<summary><strong>Backend (Click here to expand) - Optional </strong></summary>

> The backend (Flask API) processes user inputs and generates recommendations dynamically. To enable backend functionality:

1. Deploy the Flask API (`app.py`) to Azure App Service or Azure Functions.
2. Update the backend URL in `script.js` to point to the deployed API.

</details>

<details>
<summary><strong>Deployment Instructions (Click here to expand)</strong></summary>

> **Backend Deployment**:
1. Use Azure App Service or Azure Functions to deploy the Flask API (`app.py`).
2. Ensure the API endpoint is accessible to the frontend.
3. Use Azure Monitor for logging and diagnostics.

> **Frontend Deployment**:
1. Deploy the static web app (`index.html`, `script.js`, `styles.css`) to Azure Static Web Apps.
2. Update the backend URL in `script.js` to point to the deployed API (if using the backend).

</details>

<details>
<summary><strong>Security (Click here to expand)</strong></summary>

- Secure API endpoints with Azure Active Directory (AAD) authentication.
- Use HTTPS for all communications.

</details>

## Expanded Questionnaire

> The tool now includes the following questions to refine recommendations:

<details>
  <summary><strong>View All Options (Click to expand)</strong></summary>
  <table>
    <thead>
      <tr>
        <th>Question</th>
        <th>Options</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Data Volume</td><td>&lt;10GB, 10GB-1TB, &gt;1TB</td></tr>
      <tr><td>Data Type</td><td>Structured, Semi-structured, Unstructured</td></tr>
      <tr><td>Latency Requirements</td><td>&lt;10ms, 10-100ms, &gt;100ms</td></tr>
      <tr><td>Scalability Needs</td><td>Global, Local</td></tr>
      <tr><td>Consistency Model</td><td>Strong, Eventual</td></tr>
      <tr><td>Integration Needs</td><td>Yes, No</td></tr>
      <tr><td>Security Requirements</td><td>Encryption, RBAC, Compliance</td></tr>
      <tr><td>Budget Constraints</td><td>&lt;100 USD, 100-500 USD, &gt;500 USD</td></tr>
      <tr><td>Use Case</td><td>OLTP, OLAP, AI/ML</td></tr>
      <tr><td>Backup & Recovery</td><td>Yes, No</td></tr>
      <tr><td>Query Complexity</td><td>Simple, Moderate, Complex</td></tr>
      <tr><td>Data Retention</td><td>Short-term, Medium-term, Long-term</td></tr>
    </tbody>
  </table>
</details>

<!-- START BADGE -->
<div align="center">
  <img src="https://img.shields.io/badge/Total%20views-31-limegreen" alt="Total views">
  <p>Refresh Date: 2025-07-16</p>
</div>
<!-- END BADGE -->
