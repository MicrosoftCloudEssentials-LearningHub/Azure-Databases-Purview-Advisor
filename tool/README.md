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
  
- [Azure Databases Overview](https://azure.microsoft.com/en-us/products/category/databases/?msockid=38ec3806873362243e122ce086486339)
- [Azure Database Architecture Guide](https://learn.microsoft.com/en-us/azure/architecture/databases/)
- [Microsoft Sales and Support](https://support.microsoft.com/contactus?ContactUsExperienceEntryPointAssetId=S.HP.SMC-HOME)

</details>

## Overview

The **Azure Databases Advisor Tool** is designed to help users select the most suitable Azure database service based on their specific use case. It provides recommendations by analyzing user inputs such as data type, scalability needs, latency requirements, and more.

This tool consists of:
- **Static Frontend**: A web-based interface for users to input their requirements and view recommendations.
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
- **Data Type**: Structured, semi-structured, or unstructured.
- **Performance Requirements**: Latency and throughput needs.
- **Scalability**: Horizontal or vertical scaling, global distribution.
- **Consistency Model**: Strong or eventual consistency.
- **Integration Needs**: Compatibility with Azure services.
- **Security and Compliance**: Encryption, role-based access control, compliance requirements.
- **Budget Constraints**: Monthly budget for database services.
- **Deployment Model**: Fully managed (PaaS), self-hosted (IaaS), or serverless.
- **Use Case Specifics**: OLTP, OLAP, or AI/ML workloads.

## Example Recommendation Flow

1. User selects **structured data** with **global distribution** and **high throughput**.
2. The tool recommends **Azure Cosmos DB (SQL API)**.
3. Links to Azure documentation are provided for further exploration.

<div align="center">
  <h3 style="color: #4CAF50;">Total Visitors</h3>
  <img src="https://profile-counter.glitch.me/brown9804/count.svg" alt="Visitor Count" style="border: 2px solid #4CAF50; border-radius: 5px; padding: 5px;"/>
</div>
