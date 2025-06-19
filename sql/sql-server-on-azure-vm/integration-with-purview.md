# Integrating SQL Server on Azure VM with Microsoft Purview

Costa Rica

[![Microsoft Purview](https://img.shields.io/badge/Microsoft-Purview-blue)](https://learn.microsoft.com/en-us/azure/purview/)
[![SQL Server on Azure VM](https://img.shields.io/badge/Azure-SQLServer-blue)](https://learn.microsoft.com/en-us/sql/sql-server/sql-server-on-azure-vm)

Last updated: 2025-06-19

---

> Microsoft Purview provides a unified data governance solution that enables organizations to manage and govern their on-premises, multi-cloud, and software-as-a-service (SaaS) data. Integrating SQL Server on Azure VM with Purview allows you to discover, classify, and manage sensitive data, enforce compliance, and monitor data usage across your organization.

<details>
<summary>List of References</summary>

- [Microsoft Purview Documentation](https://learn.microsoft.com/en-us/azure/purview/)
- [SQL Server on Azure VM Documentation](https://learn.microsoft.com/en-us/sql/sql-server/sql-server-on-azure-vm)
- [Purview Data Loss Prevention](https://learn.microsoft.com/en-us/azure/purview/concept-data-loss-prevention)
- [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)

</details>

<details>
<summary>Table of Content</summary>

- [How to Integrate SQL Server on Azure VM with Purview](#how-to-integrate-sql-server-on-azure-vm-with-purview)
    - [Registering the SQL Server on Azure VM in Purview](#registering-the-sql-server-on-azure-vm-in-purview)
    - [Enabling Unity Data Governance](#enabling-unity-data-governance)
    - [Data Classification and Labeling](#data-classification-and-labeling)
- [Managing DLP Data Loss Prevention Projects](#managing-dlp-data-loss-prevention-projects)
    - [Example: DLP Policy for Customer PII](#example-dlp-policy-for-customer-pii)
- [Cost Management and Budgeting](#cost-management-and-budgeting)
    - [Cost Components](#cost-components)
    - [Example Monthly Budget](#example-monthly-budget)
- [Best Practices](#best-practices)
- [Integration with Purview for Unity Catalog](#integration-with-purview-for-unity-catalog)
    - [Steps to Integrate](#steps-to-integrate)
    - [Benefits](#benefits)
  
</details>

## How to Integrate SQL Server on Azure VM with Purview

### 1. Registering the SQL Server on Azure VM in Purview

- Go to the [Microsoft Purview Studio](https://web.purview.azure.com/).
- Navigate to **Data Map** > **Register** > **SQL Server on Azure VM**.
- Provide the required connection details (server name, authentication, etc.).
- Set up a scan rule set to define what metadata and classifications to extract.
- Schedule regular scans to keep metadata and classifications up to date.

### 2. Enabling Unity Data Governance

- Use **Unity Catalog** within Purview to manage access policies, data lineage, and data sharing.
- Assign roles such as Data Owner, Data Steward, and Data Consumer to control access and responsibilities.
- Track data movement and transformations for compliance and auditing.

### 3. Data Classification and Labeling

- Apply built-in or custom classifiers to automatically detect and label sensitive data (e.g., PII, financial data).
- Use labels to drive downstream policies such as Data Loss Prevention (DLP) and access controls.

## Managing DLP (Data Loss Prevention) Projects

> DLP projects in Purview help you identify, monitor, and protect sensitive data within your SQL Server databases hosted on Azure VMs.

### Example: DLP Policy for Customer PII

> Prevent unauthorized export of customer personally identifiable information (PII).

**Steps:**
1. **Create a DLP Policy:**  
   In Purview, define a policy targeting tables/columns with PII (e.g., email, SSN).
2. **Define Detection Rules:**  
   Use built-in or custom classifiers to identify PII fields.
3. **Set Actions:**  
   - Alert data owners when PII is accessed or exported.
   - Optionally, block export or require additional approval for sensitive data.
4. **Monitor and Audit:**  
   Use Purview’s monitoring dashboard to track policy violations and data access patterns.

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
> Click here to understand more about [Azure Purview Cost Estimation](./Purview/Cost-Estimation.md)

### Example Monthly Budget

| Resource                        | Estimated Monthly Cost |
|----------------------------------|-----------------------|
| Purview (2 vCores, light usage)  | $300                  |
| Data Scanning (100GB/month)      | $20                   |
| **Total**                        | **$320**              |

> [!NOTE]
> - Costs may vary based on region, scan frequency, and data volume.
> - Use [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/) for precise estimates.
> - Set up budgets and alerts in [Azure Cost Management](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/) to avoid overruns.

## Best Practices

- **Automate Scans:** Schedule regular scans to keep metadata and classifications current.
- **Least Privilege:** Assign only necessary permissions to users and service principals.
- **Monitor Usage:** Regularly review Purview dashboards for unusual activity or policy violations.
- **Review Costs:** Monitor Purview and SQL Server on Azure VM usage to optimize resource allocation and control expenses.

## Integration with Purview for Unity Catalog

> SQL Server on Azure VM can be integrated with Microsoft Purview to enable a Unity Catalog for data governance and management. This integration allows you to:

- Discover and classify sensitive data.
- Track data lineage across your SQL Server databases hosted on Azure VMs.
- Enable centralized data governance.

### Steps to Integrate

1. **Register the SQL Server Database**:
   - Navigate to the Microsoft Purview portal.
   - Register your SQL Server on Azure VM as a data source.

2. **Scan the Data Source**:
   - Configure scanning rules to classify and catalog the data.
   - Schedule periodic scans to keep the catalog updated.

3. **Manage Data Lineage**:
   - Use Purview to visualize data lineage across your SQL Server databases.

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
