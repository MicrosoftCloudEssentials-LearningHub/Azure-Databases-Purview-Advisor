# Integrating Oracle Database on Azure with Microsoft Purview

Costa Rica

[![Microsoft Purview](https://img.shields.io/badge/Microsoft-Purview-blue)](https://learn.microsoft.com/en-us/azure/purview/)
[![Oracle Database on Azure](https://img.shields.io/badge/Azure-Oracle-blue)](https://learn.microsoft.com/en-us/azure/oracle/)

Last updated: 2025-06-19

---

> Microsoft Purview provides a unified data governance solution that enables organizations to manage and govern their on-premises, multi-cloud, and software-as-a-service (SaaS) data. Integrating Oracle Database on Azure with Purview allows you to discover, classify, and manage sensitive data, enforce compliance, and monitor data usage across your organization.

<details>
<summary>List of References</summary>

- [Microsoft Purview Documentation](https://learn.microsoft.com/en-us/azure/purview/)
- [Oracle Database on Azure Documentation](https://learn.microsoft.com/en-us/azure/oracle/)
- [Purview Data Loss Prevention](https://learn.microsoft.com/en-us/azure/purview/concept-data-loss-prevention)
- [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)

</details>

<details>
<summary>Table of Content</summary>

- [How to Integrate Oracle Database on Azure with Purview](#how-to-integrate-oracle-database-on-azure-with-purview)
    - [Registering the Oracle Database in Purview](#registering-the-oracle-database-in-purview)
    - [Enabling Unity Data Governance](#enabling-unity-data-governance)
    - [Data Classification and Labeling](#data-classification-and-labeling)
- [Managing DLP Data Loss Prevention Projects](#managing-dlp-data-loss-prevention-projects)
- [Cost Management and Budgeting](#cost-management-and-budgeting)
    - [Cost Components](#cost-components)
    - [Example Monthly Budget](#example-monthly-budget)
- [Best Practices](#best-practices)
- [Integration with Purview for Unity Catalog](#integration-with-purview-for-unity-catalog)
    - [Steps to Integrate](#steps-to-integrate)
    - [Benefits](#benefits)

</details>


## How to Integrate Oracle Database on Azure with Purview

### Registering the Oracle Database in Purview

- Go to the [Microsoft Purview Studio](https://web.purview.azure.com/).
- Navigate to **Data Map** > **Register** > **Oracle Database on Azure**.
- Provide the required connection details (server name, authentication, etc.).
- Set up a scan rule set to define what metadata and classifications to extract.
- Schedule regular scans to keep metadata and classifications up to date.

### Enabling Unity Data Governance

- Use **Unity Catalog** within Purview to manage access policies, data lineage, and data sharing.
- Assign roles such as Data Owner, Data Steward, and Data Consumer to control access and responsibilities.
- Track data movement and transformations for compliance and auditing.

### Data Classification and Labeling

- Apply built-in or custom classifiers to automatically detect and label sensitive data (e.g., PII, financial data).
- Use labels to drive downstream policies such as Data Loss Prevention (DLP) and access controls.

## Managing DLP (Data Loss Prevention) Projects

> DLP projects in Purview help you identify, monitor, and protect sensitive data within your Oracle databases.

<details>
<summary><b>E.g: DLP Policy for GDPR Right to Be Forgotten</b> (Click to expand)</summary>

> Enforce data erasure requests across customer-related tables in Oracle.

**Steps:**
1. **Create a DLP Policy:** Monitor and respond to deletion requests for tables like `CUSTOMERS`, `CONTACT_LOGS`, and `ACCOUNT_HISTORY`.
2. **Define Detection Rules:** Use Purview’s data subject tagging to flag all relevant personal data fields.
3. **Set Actions:**  
   - Notify data stewards when retention period expires or deletion is requested.  
   - Automatically flag noncompliant records.
4. **Monitor and Audit:** Prove compliance via retention logs and erasure workflows.

</details>

<details>
<summary><b>E.g: DLP Policy for Financial Reconciliation Data</b> (Click to expand)</summary>

> Protect sensitive reconciliation and journal entry data from internal leaks.

**Steps:**
1. **Create a DLP Policy:** Focus on Oracle ERP data, such as `GL_JOURNALS`, `RECON_TABLES`, or `LEDGER_ENTRIES`.
2. **Define Detection Rules:** Apply financial data classifiers or tag custom ERP schema elements.
3. **Set Actions:**  
   - Require managerial approval for exports over certain thresholds.  
   - Redact financial summaries for non-finance roles.
4. **Monitor and Audit:** Track peak financial period access and anomalous queries.

</details>

<details>
<summary><b>E.g: DLP Policy for Clinical Trial Data (GxP Compliance)</b> (Click to expand)</summary>

> Secure trial participant data, dosage logs, and test results hosted in Oracle schemas.

**Steps:**
1. **Create a DLP Policy:** Target schemas like `TRIAL_RESULTS`, `PATIENT_TRACKING`, or `MEDICATION_LOGS`.
2. **Define Detection Rules:** Detect patient IDs, consent forms, and controlled substance indicators.
3. **Set Actions:**  
   - Encrypt output from trials unless accessed by certified trial managers.  
   - Block trial data sharing outside approved vendors.
4. **Monitor and Audit:** Export access reports for regulatory inspections.

</details>

## Cost Management and Budgeting

> Integrating with Purview introduces additional costs for scanning, classification, and governance. Below is a breakdown and example budget.

### Cost Components

> **Microsoft Purview Account:**: Billed per vCore-hour and per GB of data processed during scans.
> The pricing structure is based on:
> - **Data Map** (capacity units, always-on)
> - **Scanning** (pay-as-you-go, based on vCore usage and scan duration)
> - **Managed Virtual Network** and **API/Data Transfer** costs for cross-cloud governance
> - **Resource Set Processing** (based on processing time)

> [!TIP]
> Click here to understand more about [Azure Purview Cost Estimation](../../Purview/Cost-Estimation.md)

## Best Practices

- **Automate Scans:** Schedule regular scans to keep metadata and classifications current.
- **Least Privilege:** Assign only necessary permissions to users and service principals.
- **Monitor Usage:** Regularly review Purview dashboards for unusual activity or policy violations.
- **Review Costs:** Monitor Purview and Oracle Database usage to optimize resource allocation and control expenses.

## Integration with Purview for Unity Catalog

> Oracle Database on Azure can be integrated with Microsoft Purview to enable a Unity Catalog for data governance and management. This integration allows you to:

- Discover and classify sensitive data.
- Track data lineage across your Oracle databases.
- Enable centralized data governance.

### Steps to Integrate

1. **Register the Oracle Database**:
   - Navigate to the Microsoft Purview portal.
   - Register your Oracle Database on Azure as a data source.

2. **Scan the Data Source**:
   - Configure scanning rules to classify and catalog the data.
   - Schedule periodic scans to keep the catalog updated.

3. **Manage Data Lineage**:
   - Use Purview to visualize data lineage across your Oracle databases.

4. **Set Up Access Policies**:
   - Define access policies for data governance using Purview.

### Benefits

- Enhanced data discovery and classification.
- Improved compliance and governance.
- Centralized management of data assets.

<div align="center">
  <h3 style="color: #4CAF50;">Total Visitors</h3>
  <img src="https://profile-counter.glitch.me/brown9804/count.svg" alt="Visitor Count" style="border: 2px solid #4CAF50; border-radius: 5px; padding: 5px;"/>
</div>
