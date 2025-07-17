# Integrating Azure SQL Database with Microsoft Purview

Costa Rica

[![Microsoft Purview](https://img.shields.io/badge/Microsoft-Purview-blue)](https://learn.microsoft.com/en-us/azure/purview/)
[![Azure SQL Database](https://img.shields.io/badge/Azure-SQL-blue)](https://learn.microsoft.com/en-us/azure/sql-database/)

Last updated: 2025-07-17

---

> Microsoft Purview provides a unified data governance solution that enables organizations to manage and govern their on-premises, multi-cloud, and software-as-a-service (SaaS) data. Integrating Azure SQL Database with Purview allows you to discover, classify, and manage sensitive data, enforce compliance, and monitor data usage across your organization.

<details>
<summary>List of References</summary>

- [Microsoft Purview Documentation](https://learn.microsoft.com/en-us/azure/purview/)
- [Azure SQL Database Documentation](https://learn.microsoft.com/en-us/azure/sql-database/)
- [Purview Data Loss Prevention](https://learn.microsoft.com/en-us/azure/purview/concept-data-loss-prevention)
- [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)

</details>

<details>
<summary>Table of Content</summary>

- [How to Integrate Azure SQL Database with Purview](#how-to-integrate-azure-sql-database-with-purview)
   - [Registering the SQL Database in Purview](#registering-the-sql-database-in-purview)
   - [Enabling Unity Data Governance](#enabling-unity-data-governance)
   - [Data Classification and Labeling](#data-classification-and-labeling)
- [Managing DLP Data Loss Prevention Projects](#managing-dlp-data-loss-prevention-projects)
- [Cost Management and Budgeting](#cost-management-and-budgeting)
- [Best Practices](#best-practices)
- [Integration with Purview for Unity Catalog](#integration-with-purview-for-unity-catalog)
   - [Steps to Integrate](#steps-to-integrate)
   - [Benefits](#benefits)

</details>

## How to Integrate Azure SQL Database with Purview

### Registering the SQL Database in Purview

- Go to the [Microsoft Purview Studio](https://web.purview.azure.com/).
- Navigate to **Data Map** > **Register** > **Azure SQL Database**.
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

> DLP projects in Purview help you identify, monitor, and protect sensitive data within your SQL databases.

<details>
<summary><b>E.g: DLP Policy for Customer Signup Data</b> (Click to expand)</summary>

> Secure sensitive information submitted during user registration flows.

**Steps:**
1. **Create a DLP Policy:** Apply to tables like `UserAccounts`, `RegistrationForms`, or `NewCustomers`.
2. **Define Detection Rules:** Detect fields like name, email, contact number, and national IDs.
3. **Set Actions:**  
   - Redact sensitive fields for non-customer-service roles.  
   - Block export of records with incomplete user verification.
4. **Monitor and Audit:** Log weekly metrics on account access by department.

</details>

<details>
<summary><b>E.g: DLP Policy for Geo-Sensitive Access</b> (Click to expand)</summary>

> Restrict access to localized customer data based on geographic region (e.g., Costa Rica customers).

**Steps:**
1. **Create a DLP Policy:** Filter tables like `Orders`, `SupportRequests`, or `UserPreferences` with `country_code = 'CR'`.
2. **Define Detection Rules:** Use country-based tagging and IP-based access logging.
3. **Set Actions:**  
   - Require additional authentication when data is accessed from non-local regions.  
   - Alert regional data stewards for out-of-pattern queries.
4. **Monitor and Audit:** Use Purview to trace anomalies in data flow and access trends by geography.

</details>

<details>
<summary><b>E.g: DLP Policy for Product Feedback & Survey Responses</b> (Click to expand)</summary>

> Safeguard subjective customer inputs that may contain unstructured PII.

**Steps:**
1. **Create a DLP Policy:** Apply to columns like `feedback_text`, `support_notes`, or `survey_responses`.
2. **Define Detection Rules:** Use natural language classifiers to identify PII embedded in comments.
3. **Set Actions:**  
   - Mask responses by default and allow reveal only to specific analysts.  
   - Flag and redact offensive or unfiltered content before storage.
4. **Monitor and Audit:** Review flagged content for moderation effectiveness.

</details>

## Cost Management and Budgeting

> **Microsoft Purview Account:**: Billed per vCore-hour and per GB of data processed during scans.
> The pricing structure is based on:
> - **Data Map** (capacity units, always-on)
> - **Scanning** (pay-as-you-go, based on vCore usage and scan duration)
> - **Managed Virtual Network** and **API/Data Transfer** costs for cross-cloud governance
> - **Resource Set Processing** (based on processing time)

> [!TIP]
> Click here to understand more about [Azure Purview Cost Estimation](../../Purview/Cost-Estimation.md)

> [!NOTE]
> - Costs may vary based on region, scan frequency, and data volume.
> - Use [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/) for precise estimates.
> - Set up budgets and alerts in [Azure Cost Management](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/) to avoid overruns.

## Best Practices

- **Automate Scans:** Schedule regular scans to keep metadata and classifications current.
- **Least Privilege:** Assign only necessary permissions to users and service principals.
- **Monitor Usage:** Regularly review Purview dashboards for unusual activity or policy violations.
- **Review Costs:** Monitor Purview and SQL Database usage to optimize resource allocation and control expenses.

## Integration with Purview for Unity Catalog

> Azure SQL Database can be integrated with Microsoft Purview to enable a Unity Catalog for data governance and management. This integration allows you to:

- Discover and classify sensitive data.
- Track data lineage across your SQL databases.
- Enable centralized data governance.

### Steps to Integrate

1. **Register the SQL Database**:
   - Navigate to the Microsoft Purview portal.
   - Register your Azure SQL Database as a data source.
2. **Scan the Data Source**:
   - Configure scanning rules to classify and catalog the data.
   - Schedule periodic scans to keep the catalog updated.
3. **Manage Data Lineage**: Use Purview to visualize data lineage across your SQL databases.
4. **Set Up Access Policies**: Define access policies for data governance using Purview.

### Benefits

- Enhanced data discovery and classification.
- Improved compliance and governance.
- Centralized management of data assets.

<!-- START BADGE -->
<div align="center">
  <img src="https://img.shields.io/badge/Total%20views-9-limegreen" alt="Total views">
  <p>Refresh Date: 2025-07-16</p>
</div>
<!-- END BADGE -->
