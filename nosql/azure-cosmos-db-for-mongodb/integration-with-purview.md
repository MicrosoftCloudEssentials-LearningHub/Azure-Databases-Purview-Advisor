# Integrating Azure Cosmos DB for MongoDB with Microsoft Purview

Costa Rica

[![Microsoft Purview](https://img.shields.io/badge/Microsoft-Purview-blue)](https://learn.microsoft.com/en-us/azure/purview/) [![Azure Cosmos DB for MongoDB](https://img.shields.io/badge/Azure-Cosmos%20DB%20for%20MongoDB-blue)](https://learn.microsoft.com/en-us/azure/cosmos-db/mongodb/)

Last updated: 2025-06-20

---

> Microsoft Purview provides a unified data governance solution that enables organizations to manage and govern their on-premises, multi-cloud, and SaaS data. Integrating **Azure Cosmos DB for MongoDB** with Purview allows you to discover, classify, and protect sensitive document-based data while enforcing governance standards and compliance across your organization.

<details>
<summary>List of References</summary>

- [Microsoft Purview Documentation](https://learn.microsoft.com/en-us/azure/purview/)
- [Azure Cosmos DB for MongoDB Documentation](https://learn.microsoft.com/en-us/azure/cosmos-db/mongodb/)
- [Purview MongoDB Integration Guide](https://learn.microsoft.com/en-us/azure/purview/how-to-register-scan-mongodb)
- [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)

</details>

<details>
<summary>Table of Content</summary>

- [How to Integrate Cosmos DB for MongoDB with Purview](#how-to-integrate-cosmos-db-for-mongodb-with-purview)
  - [Registering the Data Source](#registering-the-data-source)
  - [Scan Configuration](#scan-configuration)
  - [Classification and Labeling](#classification-and-labeling)
- [Governance and DLP Setup](#governance-and-dlp-setup)
  - [Example DLP Policies](#example-dlp-policies)
- [Cost Management](#cost-management)
- [Best Practices](#best-practices)
- [Unity Catalog Integration](#unity-catalog-integration)

</details>

## How to Integrate Cosmos DB for MongoDB with Purview

### Registering the Data Source

- Navigate to the [Microsoft Purview Studio](https://web.purview.azure.com/).
- Under **Data Map**, select **Register** > **Azure Cosmos DB for MongoDB**.
- Provide account URI, authentication method, database names, and integration runtime details.
- Ensure connectivity using a Managed VNet or SHIR as needed.

### Scan Configuration

- Choose collections to scan or use pattern-based selectors.
- Define scan rulesets to extract metadata (e.g., schema, index fields).
- Schedule full or incremental scans to avoid unnecessary costs and optimize discovery.

### Classification and Labeling

- Use built-in classifiers or create custom ones for domain-specific fields.
- Apply sensitivity labels (e.g., Confidential, Restricted) from Microsoft Information Protection.
- Labels can drive automated policies (e.g., data masking, alerting, role-based access).

## Governance and DLP Setup

> Use Microsoft Purview to create Data Loss Prevention (DLP) policies targeting MongoDB collections. Here are real-world examples:

<details>
<summary><b>E.g: DLP Policy for User Profiles</b> (Click to expand)</summary>

> Protect customer and employee profile data stored in `user_data`, `accounts`, `profiles` collections.

**Steps:**
1. **Define a DLP Policy:** Target collections with sensitive document schemas.
2. **Set Detection Parameters:** Trigger on PII, credentials, and contact information fields.
3. **Policy Actions:**  
   - Log access to sensitive fields.  
   - Block copy/export operations for untrusted entities.
4. **Monitor Activity:** Use built-in auditing to review scan and access logs.

</details>

<details>
<summary><b>E.g: DLP Policy for Payment Transactions</b> (Click to expand)</summary>

> Safeguard financial data in `payments`, `invoices`, `billing_records`.

**Steps:**
1. **Define Policy Scope:** Look for fields like `credit_card`, `billing_address`, and `transaction_id`.
2. **Detection:** Use built-in financial data classifiers.
3. **Policy Actions:**  
   - Encrypt fields before serving to external users.  
   - Generate alerts for more than 100 financial records queried in under 1 minute.
4. **Audit:** Track query logs through Azure Monitor integration.

</details>

<details>
<summary><b>E.g: DLP Policy for Healthcare Records</b> (Click to expand)</summary>

> Protect personal health information (PHI) within `patients`, `treatment_history`, and `medications`.

**Steps:**
1. **Policy Creation:** Include diagnosis codes and treatment plans.
2. **PHI Detection:** Use custom tags like `diagnosis`, `symptoms`, `prescription_id`.
3. **Actions:**  
   - Mask fields for users not in the HealthPractitioner group.  
   - Block export to unsupported formats.
4. **Logs:** Enable alerting on access by country or device-type anomalies.

</details>

<details>
<summary><b>E.g: DLP Policy for HR Records</b> (Click to expand)</summary>

> Secure data in `hr`, `payroll`, and `performance_reviews` collections.

**Steps:**
1. **Scope:** Apply to fields like `salary`, `review_score`, `benefit_plan`.
2. **Detection:** Match on numerical ranges and string pattern validation (e.g., ID formats).
3. **Actions:**  
   - Restrict access to HR-only security groups.  
   - Redact data for cross-departmental queries.
4. **Monitoring:** Report monthly activity summaries to HR audit teams.

</details>

<details>
<summary><b>E.g: DLP Policy for Legal Case Data</b> (Click to expand)</summary>

> Protect sensitive legal content in `case_files`, `legal_memos`, and `contracts`.

**Steps:**
1. **Classifier Setup:** Identify documents referencing legal codes, client names, settlement terms.
2. **Actions:**  
   - Encrypt entire documents upon detection.  
   - Flag and quarantine documents shared externally.
3. **Compliance Logging:** Store evidence trails in Purview for 7 years.

</details>

## Cost Management

> [!NOTE]  
> Purview and Cosmos DB pricing are consumption-based.

- **Cosmos DB Billing:** Based on RU/s, storage size, indexing, replication.
- **Purview Billing:** Based on scan duration (vCore/hour) and volume (GB scanned).
- **Tips:**
  - Limit scan scope to active collections.
  - Use Purview Data Map capacity planning.
  - Automate cost alerts using Azure Cost Management.

## Best Practices

- **Schema Tagging:** Add metadata tags to collections for visibility and classification.
- **Minimum Privilege:** Use role-based access controls via Azure AD.
- **Regular Scans:** Automate daily or weekly scans to stay up-to-date.
- **Cross-Service Monitoring:** Integrate with Azure Monitor and Defender for Cloud for unified security.

## Unity Catalog Integration

> Unlock full data lineage and policy-based access using Microsoft Purview and Unity Catalog together.

### Integration Steps

1. **Register Cosmos DB source in Unity Catalog (via Purview connector)**  
2. **Create Data Products:** Classify MongoDB collections into curated data assets.  
3. **Set Data Lineage:** Map ingestion workflows from Cosmos DB to analytics/BI tools.  
4. **Assign Stewards and Policies:** Define who owns, maintains, and accesses the data.

### Benefits

- Unified governance across structured and unstructured data.
- Compliance-ready posture for PII, PCI, HIPAA use cases.
- Reduced risk through discoverability and controlled data distribution.

<div align="center">
  <h3 style="color: #4CAF50;">Total Visitors</h3>
  <img src="https://profile-counter.glitch.me/brown9804/count.svg" alt="Visitor Count" style="border: 2px solid #4CAF50; border-radius: 5px; padding: 5px;"/>
</div>
