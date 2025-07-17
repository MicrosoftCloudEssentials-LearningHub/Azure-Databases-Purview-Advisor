# Integrating MongoDB Atlas on Azure with Microsoft Purview

Costa Rica

[![Microsoft Purview](https://img.shields.io/badge/Microsoft-Purview-blue)](https://learn.microsoft.com/en-us/azure/purview/) [![MongoDB Atlas on Azure](https://img.shields.io/badge/MongoDB-Atlas%20on%20Azure-orange)](https://learn.microsoft.com/en-us/azure/architecture/databases/mongodb-atlas/)

Last updated: 2025-07-17

---

> MongoDB Atlas is a fully managed NoSQL database solution deployed on Azure, supporting high scalability and developer agility. When integrated with Microsoft Purview, it provides classification, lineage, and policy enforcement features that enhance data governance across document-based workloads.

<details>
<summary>List of References</summary>

- [Microsoft Purview Documentation](https://learn.microsoft.com/en-us/azure/purview/)
- [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)

</details>

<details>
<summary>Table of Content</summary>

- [How to Integrate MongoDB Atlas with Purview](#how-to-integrate-mongodb-atlas-with-purview)
  - [Registration and Access Setup](#registration-and-access-setup)
  - [Metadata and Lineage Scanning](#metadata-and-lineage-scanning)
  - [Classification and Labeling](#classification-and-labeling)
- [Governance and DLP Controls](#governance-and-dlp-controls)
- [Cost Insights](#cost-insights)
- [Governance Best Practices](#governance-best-practices)
- [Unity Catalog Integration](#unity-catalog-integration)

</details>

## How to Integrate MongoDB Atlas with Purview

### Registration and Access Setup

- Use a **custom connector** or ODBC/JDBC bridge to connect MongoDB Atlas to Purview.
- Grant read-only API access to metadata via [MongoDB Atlas Data API](https://www.mongodb.com/docs/atlas/api/data-api/).
- Configure network access using VPC/VNet peering or Private Endpoint.
- Register the data source in **Purview Studio** under **Other Sources** → **Generic NoSQL**.

### Metadata and Lineage Scanning

- Define collections and fields to scan using JSON paths or regex.
- Schedule regular scans to detect schema drift.
- Connect MongoDB ingestion pipelines (e.g., via Azure Data Factory) to enable **lineage tracing**.

### Classification and Labeling

- Use built-in classifiers or define custom tags like `document_id`, `user_email`, `customer_journey`.
- Label fields using Microsoft Information Protection (MIP): e.g., Confidential, Restricted.
- Configure label inheritance across nested documents and arrays.

## Governance and DLP Controls

> Protect sensitive document structures across customer, analytics, and operational data models.

<details>
<summary><b>E.g: DLP Policy for CRM Records</b> (Click to expand)</summary>

> Apply governance to `customers`, `leads`, `interactions`.

**Steps:**
1. **Classify Fields:** `customer_name`, `contact_info`, `lead_source`.
2. **Set Policy Triggers:** Block JSON exports exceeding 100 records/hour.
3. **Apply Actions:**  
   - Mask names and contact info for sales interns.  
   - Enforce MFA for modification privileges.
4. **Monitor:** Enable dashboard alerts on unusual query bursts.

</details>

<details>
<summary><b>E.g: DLP Policy for Financial Forecasts</b> (Click to expand)</summary>

> Secure forecasting models stored in `budgets`, `models`, `assumptions`.

**Steps:**
1. **Scope:** Forecasted revenue, cost-of-sales fields.
2. **Detection Rules:** Numeric limits, field tags (e.g., `model_id`, `confidence_score`).
3. **Actions:**  
   - Encrypt collections at-rest with customer-managed keys.  
   - Allow read-only access from trusted Azure regions.
4. **Audits:** Maintain access logs for at least 12 months.

</details>

<details>
<summary><b>E.g: DLP Policy for Legal Contracts</b> (Click to expand)</summary>

> Protect legal content in `contracts`, `legal_reviews`, `negotiations`.

**Steps:**
1. **Tag Fields:** `contract_number`, `counterparty`, `signature_date`.
2. **Policy Actions:**  
   - Restrict full-text searches by non-legal roles.  
   - Block download/printing of full documents.
3. **Alerting:** Trigger alerts if accessed outside office hours.

</details>

<details>
<summary><b>E.g: DLP Policy for Product Telemetry</b> (Click to expand)</summary>

> Manage telemetry in `events`, `device_stats`, `system_logs`.

**Steps:**
1. **Classify Columns:** Device IDs, geographic coordinates.
2. **Policies:**  
   - Mask PII from telemetry streams ingested via Event Hubs.  
   - Block data streaming to unknown destinations.
3. **Monitoring:** Visualize flows with lineage diagrams in Purview.

</details>

## Cost Insights

> [!NOTE]  
> MongoDB Atlas and Purview are billed independently.

- **MongoDB Atlas**: Billed by storage, cluster tier, backup snapshots, and network usage.
- **Microsoft Purview**: Charges for metadata scanning, vCore hours, and classification volume.
- Optimize by:
  - Using partial scans via field inclusion/exclusion.
  - Defining metadata rules for incremental ingestion.

## Governance Best Practices

- **Schema Versioning:** Track field changes across collections via Purview logs.
- **Security Groups:** Align Purview roles with Atlas database access controls.
- **Data Domains:** Categorize assets by purpose (Operational, Analytical, Archival).
- **Threat Detection:** Integrate with Microsoft Defender for threat telemetry.

## Unity Catalog Integration

> If paired with Azure Synapse or Databricks, MongoDB Atlas lineage can be extended via Unity Catalog.

### Steps

1. Use a **Synapse Link** or **Azure Data Factory** to flow data from MongoDB Atlas.
2. Register all destination data assets in Microsoft Purview.
3. Map lineage: `MongoDB Atlas → Azure Data Lake → Power BI/Dashboards`.
4. Visualize and enforce domain-specific policies.

### Benefits

- Secure NoSQL lineage from ingestion to analytics.
- Unified discovery across structured and document databases.
- Role-based governance over sensitive fields.

<!-- START BADGE -->
<div align="center">
  <img src="https://img.shields.io/badge/Total%20views-31-limegreen" alt="Total views">
  <p>Refresh Date: 2025-07-16</p>
</div>
<!-- END BADGE -->
