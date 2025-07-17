# Integrating Azure Database for PostgreSQL with Microsoft Purview

Costa Rica

[![Microsoft Purview](https://img.shields.io/badge/Microsoft-Purview-blue)](https://learn.microsoft.com/en-us/azure/purview/) [![Azure PostgreSQL](https://img.shields.io/badge/Azure-PostgreSQL-blue)](https://learn.microsoft.com/en-us/azure/postgresql/)

Last updated: 2025-07-17

---

> Microsoft Purview offers a centralized data governance solution across hybrid and multi-cloud environments. Integrating **Azure Database for PostgreSQL** with Purview allows you to automate metadata scanning, classify structured and unstructured data, monitor access to sensitive data, and apply policy-driven DLP controls, all in support of regulatory and business compliance.

<details>
<summary>List of References</summary>

- [Microsoft Purview Documentation](https://learn.microsoft.com/en-us/azure/purview/)
- [Azure Database for PostgreSQL Documentation](https://learn.microsoft.com/en-us/azure/postgresql/)
- [Purview Data Loss Prevention](https://learn.microsoft.com/en-us/azure/purview/concept-data-loss-prevention)
- [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)

</details>

<details>
<summary>Table of Content</summary>

- [How to Integrate Azure PostgreSQL with Purview](#how-to-integrate-azure-postgresql-with-purview)
  - [Registering PostgreSQL in Purview](#registering-postgresql-in-purview)
  - [Enabling Unity Data Governance](#enabling-unity-data-governance)
  - [Data Classification and Labeling](#data-classification-and-labeling)
- [Managing DLP Data Loss Prevention Projects](#managing-dlp-data-loss-prevention-projects)
- [Cost Management and Budgeting](#cost-management-and-budgeting)
- [Best Practices](#best-practices)
- [Integration with Purview for Unity Catalog](#integration-with-purview-for-unity-catalog)
  - [Steps to Integrate](#steps-to-integrate)
  - [Benefits](#benefits)

</details>

## How to Integrate Azure PostgreSQL with Purview

### Registering PostgreSQL in Purview

- Open [Microsoft Purview Studio](https://web.purview.azure.com/).
- Navigate to **Data Map** > **Register** > **Azure Database for PostgreSQL**.
- Provide necessary connection details: host, port, authentication type, SSL config.
- Select the relevant databases and schemas to scan.
- Configure scan rules and schedule automatic scans for metadata refresh.

### Enabling Unity Data Governance

- Utilize **Unity Catalog** to define and enforce access controls across datasets.
- Assign governance roles like Data Owner, Steward, and Consumer to PostgreSQL data assets.
- Enable lineage tracking to trace how data flows from PostgreSQL into downstream BI or ML systems.

### Data Classification and Labeling

- Use built-in classifiers (e.g., PII, financial, healthcare) or configure custom regex patterns.
- Apply tags like `Confidential`, `Internal Use Only`, or `GDPR-Sensitive` to selected PostgreSQL columns.
- Integrate these labels with Microsoft Purview policies to drive access restrictions and audits.

## Managing DLP (Data Loss Prevention) Projects

> DLP policies for PostgreSQL in Purview help safeguard sensitive data, detect risky behaviors, and mitigate unauthorized access or exports.

<details>
<summary><b>E.g: DLP Policy for Privacy Requests (GDPR)</b> (Click to expand)</summary>

> Fulfill data subject requests and enforce retention policies on customer records.

**Steps:**

1. **Create a DLP Policy:** Apply to tables like `customers`, `login_sessions`, `preferences`.
2. **Define Detection Rules:** Use classifiers for names, emails, phone numbers, and IP addresses.
3. **Set Actions:**  
   - Alert Data Protection Officers on access to expired retention data.  
   - Mark records eligible for deletion or redaction.
4. **Monitor and Audit:** Review logs and policy triggers using Purview’s compliance dashboard.

</details>

<details>
<summary><b>E.g: DLP Policy for Financial Transaction Logs</b> (Click to expand)</summary>

> Protect payment records in compliance with PCI DSS or local finance laws.

**Steps:**

1. **Create a DLP Policy:** Focus on tables like `transactions`, `billing_statements`, `refunds`.
2. **Define Detection Rules:** Detect patterns like credit card numbers, bank routing codes, or IBANs.
3. **Set Actions:**  
   - Mask account numbers and transaction details for general users.  
   - Notify finance leads on suspected mass exports or dumps.
4. **Monitor and Audit:** View access maps filtered by time-of-day or source IP.

</details>

<details>
<summary><b>E.g: DLP Policy for Healthcare Encounters</b> (Click to expand)</summary>

> Enforce HIPAA-equivalent practices for healthcare-related apps built on PostgreSQL.

**Steps:**

1. **Create a DLP Policy:** Scan tables like `medical_visits`, `patient_conditions`, `insurance_claims`.
2. **Define Detection Rules:** Detect MRNs, ICD-10 codes, medication fields.
3. **Set Actions:**  
   - Restrict access to only licensed care teams.  
   - Encrypt report exports and flag audit logs for external transmission.
4. **Monitor and Audit:** Maintain a change-tracking history for sensitive records.

</details>

## Cost Management and Budgeting

> Integrating with Purview introduces additional costs for scanning, classification, and governance. Below is a breakdown and example budget.

> [!NOTE]
>
> - Costs may vary based on region, scan frequency, and data volume.
> - Use [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/) for precise estimates.
> - Set up budgets and alerts in [Azure Cost Management](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/) to avoid overruns.

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

- **Schedule Incremental Scans:** Focus on delta changes to avoid excess charges.
- **Leverage RBAC:** Ensure PostgreSQL roles are tightly aligned with Purview access control.
- **Implement Data Contracts:** Define allowed usages for datasets via descriptions and labels.
- **Audit Regularly:** Review DLP violation trends and adjust scan cadence or detection logic as needed.

## Integration with Purview for Unity Catalog

> PostgreSQL assets can be governed under the **Unity Catalog** via Purview, providing centralized visibility and access management.

### Steps to Integrate

1. **Register PostgreSQL as a Data Source:** Define connections for each instance (Flexible Server, Hyperscale, Single Server).
2. **Classify and Label Data:** Run classifier scans and apply sensitivity tags.
3. **Configure Lineage Mapping:** Capture transformations and downstream usage in Power BI, Synapse, or Logic Apps.
4. **Apply Policy Definitions:** Use Purview roles and access conditions to define allowable actions (read, export, delete).

### Benefits

- Improved visibility of PostgreSQL data estate across dev/test/prod.
- Lower compliance risk through automated audits and DLP enforcement.
- Empowered data consumers with governed, cataloged, and discoverable datasets.

<!-- START BADGE -->
<div align="center">
  <img src="https://img.shields.io/badge/Total%20views-1282-limegreen" alt="Total views">
  <p>Refresh Date: 2025-07-17</p>
</div>
<!-- END BADGE -->
