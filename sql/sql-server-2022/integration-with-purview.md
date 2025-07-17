# Integrating SQL Server 2022 with Microsoft Purview

Costa Rica

[![Microsoft Purview](https://img.shields.io/badge/Microsoft-Purview-blue)](https://learn.microsoft.com/en-us/azure/purview/)
[![SQL Server 2022](https://img.shields.io/badge/SQL%20Server%202022-blue)](https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver15)

Last updated: 2025-07-17

---

> Microsoft Purview provides a unified data governance solution that enables organizations to manage and govern their on-premises, multi-cloud, and software-as-a-service (SaaS) data. Integrating SQL Server 2022 with Purview allows you to discover, classify, and manage sensitive data, enforce compliance, and monitor data usage across your organization.

<details>
<summary>List of References</summary>

- [Microsoft Purview Documentation](https://learn.microsoft.com/en-us/azure/purview/)
- [SQL Server 2022 Documentation](https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver15)
- [Purview Data Loss Prevention](https://learn.microsoft.com/en-us/azure/purview/concept-data-loss-prevention)
- [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)

</details>

<details>
<summary>Table of Content </summary>

- [How to Integrate SQL Server 2022 with Purview](#how-to-integrate-sql-server-2022-with-purview)
  - [Registering the SQL Server Database in Purview](#registering-the-sql-server-database-in-purview)
  - [Enabling Unity Data Governance](#enabling-unity-data-governance)
  - [Data Classification and Labeling](#data-classification-and-labeling)
- [Managing DLP Data Loss Prevention Projects](#managing-dlp-data-loss-prevention-projects)
- [Cost Management and Budgeting](#cost-management-and-budgeting)
- [Best Practices](#best-practices)
- [Integration with Purview for Unity Catalog](#integration-with-purview-for-unity-catalog)
  - [Steps to Integrate](#steps-to-integrate)
  - [Benefits](#benefits)

</details>

## How to Integrate SQL Server 2022 with Purview

### Registering the SQL Server Database in Purview

- Go to the [Microsoft Purview Studio](https://web.purview.azure.com/).
- Navigate to **Data Map** > **Register** > **SQL Server**.
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

> DLP projects in Purview help you identify, monitor, and protect sensitive data within your SQL Server databases.

<details>
<summary><b>E.g: DLP Policy for Customer PII</b> (Click to expand)</summary>

> Prevent unauthorized export of customer personally identifiable information (PII).

**Steps:**

1. **Create a DLP Policy:** In Purview, define a policy targeting tables/columns with PII (e.g., email, SSN).
2. **Define Detection Rules:** Use built-in or custom classifiers to identify PII fields.
3. **Set Actions:**  
   - Alert data owners when PII is accessed or exported.
   - Optionally, block export or require additional approval for sensitive data.
4. **Monitor and Audit:** Use Purview’s monitoring dashboard to track policy violations and data access patterns.

</details>

<details>
<summary><b>E.g: DLP Policy for Financial Records</b> (Click to expand)</summary>

> Prevent unauthorized access or leak of payroll, tax records, and bank account data.

**Steps:**

1. **Create a DLP Policy:** Target tables like `Payroll`, `Invoices`, or `TaxDocuments`.
2. **Define Detection Rules:** Use financial classifiers to detect fields like `account_number`, `routing_number`, `salary`, etc.
3. **Set Actions:**  
   - Mask fields for non-authorized users.  
   - Trigger real-time alerts for exports or downloads.
4. **Monitor and Audit:** Audit trail of accesses to sensitive financial information.

</details>

<details>
<summary><b>E.g: DLP Policy for Intellectual Property (IP)</b> (Click to expand)</summary>

> Protect proprietary formulas, product designs, or source code stored in SQL Server.

**Steps:**

1. **Create a DLP Policy:** Focus on R&D tables like `ProductDesign`, `AlgorithmSpecs`, or `Blueprints`.
2. **Define Detection Rules:** Customize classifiers using keywords or phrases tied to internal IP.
3. **Set Actions:**  
   - Block queries from external users or consultants.  
   - Require dual-approval for exports or backups.
4. **Monitor and Audit:** Flag and investigate unusual access patterns.

</details>

<details>
<summary><b>E.g: DLP Policy for Healthcare Data (HIPAA)</b> (Click to expand)</summary>

> Comply with healthcare regulations by securing patient records and medical history.

**Steps:**

1. **Create a DLP Policy:** Target tables containing `diagnosis_codes`, `treatment_notes`, or `insurance_info`.
2. **Define Detection Rules:** Enable built-in classifiers for HIPAA-related entities such as `Patient ID`, `Diagnosis`, `Prescriptions`.
3. **Set Actions:**  
   - Encrypt or mask records during query outputs.  
   - Notify compliance officers of any unauthorized attempts.
4. **Monitor and Audit:** Include incident tracking for audits and regulatory reporting.

</details>

## Cost Management and Budgeting

> **Microsoft Purview Account:**: Billed per vCore-hour and per GB of data processed during scans.
> The pricing structure is based on:
>
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
- **Review Costs:** Monitor Purview and SQL Server usage to optimize resource allocation and control expenses.

## Integration with Purview for Unity Catalog

> SQL Server 2022 can be integrated with Microsoft Purview to enable a Unity Catalog for data governance and management. This integration allows you to:

- Discover and classify sensitive data.
- Track data lineage across your SQL Server databases.
- Enable centralized data governance.

### Steps to Integrate

1. **Register the SQL Server Database**:
   - Navigate to the Microsoft Purview portal.
   - Register your SQL Server 2022 as a data source.
2. **Scan the Data Source**:
   - Configure scanning rules to classify and catalog the data.
   - Schedule periodic scans to keep the catalog updated.
3. **Manage Data Lineage**: Use Purview to visualize data lineage across your SQL Server databases.
4. **Set Up Access Policies**: Define access policies for data governance using Purview.

### Benefits

- Enhanced data discovery and classification.
- Improved compliance and governance.
- Centralized management of data assets.

<div align="center">
  <h3 style="color: #4CAF50;">Total Visitors</h3>
  <img src="https://profile-counter.glitch.me/brown9804/count.svg" alt="Visitor Count" style="border: 2px solid #4CAF50; border-radius: 5px; padding: 5px;"/>
</div>
