# Integrating Azure SQL Managed Instance with Microsoft Purview

Costa Rica

[![Microsoft Purview](https://img.shields.io/badge/Microsoft-Purview-blue)](https://learn.microsoft.com/en-us/azure/purview/)
[![Azure SQL Managed Instance](https://img.shields.io/badge/Azure-SQLMI-blue)](https://learn.microsoft.com/en-us/azure/sql-managed-instance/)

Last updated: 2025-07-17

---

> Microsoft Purview provides a unified data governance solution that enables organizations to manage and govern their on-premises, multi-cloud, and software-as-a-service (SaaS) data. Integrating Azure SQL Managed Instance with Purview allows you to discover, classify, and manage sensitive data, enforce compliance, and monitor data usage across your organization.

<details>
<summary>List of References</summary>

- [Microsoft Purview Documentation](https://learn.microsoft.com/en-us/azure/purview/)
- [Azure SQL Managed Instance Documentation](https://learn.microsoft.com/en-us/azure/sql-managed-instance/)
- [Purview Data Loss Prevention](https://learn.microsoft.com/en-us/azure/purview/concept-data-loss-prevention)
- [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)

</details>

<details>
<summary>Table of Content</summary>

- [How to Integrate Azure SQL Managed Instance with Purview](#how-to-integrate-azure-sql-managed-instance-with-purview)
  - [Registering the SQL Managed Instance in Purview](#registering-the-sql-managed-instance-in-purview)
  - [Enabling Unity Data Governance](#enabling-unity-data-governance)
  - [Data Classification and Labeling](#data-classification-and-labeling)
- [Managing DLP Data Loss Prevention Projects](#managing-dlp-data-loss-prevention-projects)
- [Cost Management and Budgeting](#cost-management-and-budgeting)
- [Best Practices](#best-practices)
- [Integration with Purview for Unity Catalog](#integration-with-purview-for-unity-catalog)
  - [Steps to Integrate](#steps-to-integrate)
  - [Benefits](#benefits)

</details>

## How to Integrate Azure SQL Managed Instance with Purview

### Registering the SQL Managed Instance in Purview

- Go to the [Microsoft Purview Studio](https://web.purview.azure.com/).
- Navigate to **Data Map** > **Register** > **Azure SQL Managed Instance**.
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

> DLP projects in Purview help you identify, monitor, and protect sensitive data within your SQL Managed Instances.

<details>
<summary><b>E.g: DLP Policy for Confidential B2B Contracts</b> (Click to expand)</summary>

> Secure access to supplier agreements and B2B NDAs hosted in SQL Managed Instance.

**Steps:**

1. **Create a DLP Policy:** Focus on tables like `LegalDocuments`, `VendorContracts`, or `PartnerNDAs`.
2. **Define Detection Rules:** Use keyword-based classifiers for contract terms, clause types, and party identifiers.
3. **Set Actions:**  
   - Require legal team approval for downloads.  
   - Automatically redact sensitive fields such as termination clauses or pricing terms.
4. **Monitor and Audit:** Use Purview logs to identify users repeatedly accessing high-risk agreements.

</details>

<details>
<summary><b>E.g: DLP Policy for Multi-Tenant Data Isolation</b> (Click to expand)</summary>

> Prevent leakage of tenant data in multi-customer environments running on a shared SQL Managed Instance.

**Steps:**

1. **Create a DLP Policy:** Classify tenant identifiers in tables like `CustomerData`, `BillingRecords`, or `AppUsage`.
2. **Define Detection Rules:** Match against `tenant_id`, `org_id`, and region-specific markers.
3. **Set Actions:**  
   - Deny joins or exports that span data from multiple tenant IDs.  
   - Enforce row-level security labels through Purview policies.
4. **Monitor and Audit:** Generate alerts for cross-tenant queries and export attempts.

</details>

<details>
<summary><b>E.g: DLP Policy for Business Continuity Reports</b> (Click to expand)</summary>

> Protect internal disaster recovery plans and business impact assessments stored in SQL MI.

**Steps:**

1. **Create a DLP Policy:** Tag documentation tables like `DR_Playbooks`, `RecoveryPlans`, and `BCP_RiskAssessment`.
2. **Define Detection Rules:** Detect sensitive recovery identifiers, backup architecture, and RTO/RPO values.
3. **Set Actions:**  
   - Mask recovery steps for roles outside of IT continuity planning.  
   - Alert when data is exported to external drives or unmanaged Azure storage.
4. **Monitor and Audit:** Review policy violations during disaster simulations or test drills.

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

> [!NOTE]
>
> - Costs may vary based on region, scan frequency, and data volume.
> - Use [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/) for precise estimates.
> - Set up budgets and alerts in [Azure Cost Management](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/) to avoid overruns.

## Best Practices

- **Automate Scans:** Schedule regular scans to keep metadata and classifications current.
- **Least Privilege:** Assign only necessary permissions to users and service principals.
- **Monitor Usage:** Regularly review Purview dashboards for unusual activity or policy violations.
- **Review Costs:** Monitor Purview and SQL Managed Instance usage to optimize resource allocation and control expenses.

## Integration with Purview for Unity Catalog

> Azure SQL Managed Instance can be integrated with Microsoft Purview to enable a Unity Catalog for data governance and management. This integration allows you to:

- Discover and classify sensitive data.
- Track data lineage across your SQL Managed Instances.
- Enable centralized data governance.

### Steps to Integrate

1. **Register the SQL Managed Instance**:
   - Navigate to the Microsoft Purview portal.
   - Register your Azure SQL Managed Instance as a data source.
2. **Scan the Data Source**:
   - Configure scanning rules to classify and catalog the data.
   - Schedule periodic scans to keep the catalog updated.
3. **Manage Data Lineage**: Use Purview to visualize data lineage across your SQL Managed Instances.
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
