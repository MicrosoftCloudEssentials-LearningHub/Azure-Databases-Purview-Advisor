# Integrating Azure Database for MySQL with Microsoft Purview

Costa Rica

[![Microsoft Purview](https://img.shields.io/badge/Microsoft-Purview-blue)](https://learn.microsoft.com/en-us/azure/purview/) [![Azure Database for MySQL](https://img.shields.io/badge/Azure-MySQL-blue)](https://learn.microsoft.com/en-us/azure/mysql/)

Last updated: 2025-06-19

---

> Microsoft Purview provides a unified data governance solution that enables organizations to manage and govern their on-premises, multi-cloud, and software-as-a-service (SaaS) data. Integrating Azure Database for MySQL with Purview allows you to discover, classify, and manage sensitive data, enforce compliance, and monitor data usage across your organization.

<details>
<summary>List of References</summary>

- [Microsoft Purview Documentation](https://learn.microsoft.com/en-us/azure/purview/)
- [Azure Database for MySQL Documentation](https://learn.microsoft.com/en-us/azure/mysql/)
- [Purview Data Loss Prevention](https://learn.microsoft.com/en-us/azure/purview/concept-data-loss-prevention)
- [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)

</details>

<details>
<summary>Table of Content</summary>

- [How to Integrate Azure Database for MySQL with Purview](#how-to-integrate-azure-database-for-mysql-with-purview)
    - [Registering the MySQL Database in Purview](#registering-the-mysql-database-in-purview)
    - [Enabling Unity Data Governance](#enabling-unity-data-governance)
    - [Data Classification and Labeling](#data-classification-and-labeling)
- [Managing DLP Data Loss Prevention Projects](#managing-dlp-data-loss-prevention-projects)
- [Cost Management and Budgeting](#cost-management-and-budgeting)
- [Best Practices](#best-practices)
- [Integration with Purview for Unity Catalog](#integration-with-purview-for-unity-catalog)
    - [Steps to Integrate](#steps-to-integrate)
    - [Benefits](#benefits)
      
</details>

## How to Integrate Azure Database for MySQL with Purview

### Registering the MySQL Database in Purview

- Go to the [Microsoft Purview Studio](https://web.purview.azure.com/).
- Navigate to **Data Map** > **Register** > **Azure Database for MySQL**.
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

> DLP projects in Purview help you identify, monitor, and protect sensitive data within your MySQL databases.

<details>
<summary><b>E.g: DLP Policy for Subscription-Based Services</b> (Click to expand)</summary>

> Safeguard user payment preferences and account activity in SaaS platforms hosted on MySQL.

**Steps:**
1. **Create a DLP Policy:** Apply to `subscriptions`, `payment_settings`, and `invoices`.
2. **Define Detection Rules:** Use classifiers for credit card tokens, billing addresses, and transaction amounts.
3. **Set Actions:**  
   - Encrypt outputs containing sensitive billing fields.  
   - Alert finance admins for bulk export actions.
4. **Monitor and Audit:** Track frequency of full-table reads and ensure they map to approved business operations.

</details>

<details>
<summary><b>E.g: DLP Policy for E-Commerce Order History</b> (Click to expand)</summary>

> Limit access to buyer preferences, addresses, and purchase patterns.

**Steps:**
1. **Create a DLP Policy:** Focus on tables like `orders`, `shipping_info`, and `order_notes`.
2. **Define Detection Rules:** Detect fields such as customer name, address, product SKUs, and delivery comments.
3. **Set Actions:**  
   - Redact buyer notes unless requested by support staff.  
   - Block ad hoc exports for large date ranges unless business-justified.
4. **Monitor and Audit:** Visualize export frequency spikes around campaign or holiday events.

</details>

<details>
<summary><b>E.g: DLP Policy for Developer Debug Logs</b> (Click to expand)</summary>

> Prevent accidental leaks of sensitive environment metadata logged to MySQL by dev tools.

**Steps:**
1. **Create a DLP Policy:** Apply to `debug_logs`, `system_diagnostics`, or `error_trace`.
2. **Define Detection Rules:** Detect tokens, API keys, internal IPs, or exception traces.
3. **Set Actions:**  
   - Mask sensitive values automatically in user-facing reports.  
   - Notify platform engineers when secrets are detected in logging activity.
4. **Monitor and Audit:** Use classification results to drive improved CI/CD pipeline practices.

</details>

<details>
<summary><b>E.g: DLP Policy for Regional Customer Restrictions</b> (Click to expand)</summary>

> Enforce localization by limiting access to user data based on country or regulatory region.

**Steps:**
1. **Create a DLP Policy:** Target tables like `user_profile`, `preferences`, `order_location` with `region_code` or `country_id`.
2. **Define Detection Rules:** Apply filters by jurisdiction (e.g., only users in LATAM).
3. **Set Actions:**  
   - Block access to region-restricted records for global analysts.  
   - Prompt approval workflows for exports involving cross-border records.
4. **Monitor and Audit:** Visualize access by region and link flagged incidents to internal access policy violations.

</details>

## Cost Management and Budgeting

> [!NOTE]
> - Costs may vary based on region, scan frequency, and data volume.
> - Use [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/) for precise estimates.
> - Set up budgets and alerts in [Azure Cost Management](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/) to avoid overruns.

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
- **Review Costs:** Monitor Purview and MySQL usage to optimize resource allocation and control expenses.

## Integration with Purview for Unity Catalog

> Azure Database for MySQL can be integrated with Microsoft Purview to enable a Unity Catalog for data governance and management. This integration allows you to:

- Discover and classify sensitive data.
- Track data lineage across your MySQL databases.
- Enable centralized data governance.

### Steps to Integrate

1. **Register the MySQL Database**:
   - Navigate to the Microsoft Purview portal.
   - Register your Azure Database for MySQL as a data source.
2. **Scan the Data Source**:
   - Configure scanning rules to classify and catalog the data.
   - Schedule periodic scans to keep the catalog updated.
3. **Manage Data Lineage**: Use Purview to visualize data lineage across your MySQL databases.
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
