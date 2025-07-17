# Integrating Azure Managed Instance for Apache Cassandra with Microsoft Purview

Costa Rica

[![Microsoft Purview](https://img.shields.io/badge/Microsoft-Purview-blue)](https://learn.microsoft.com/en-us/azure/purview/) [![Azure Managed Instance for Apache Cassandra](https://img.shields.io/badge/Azure-Cassandra%20Managed%20Instance-blue)](https://learn.microsoft.com/en-us/azure/managed-instance-apache-cassandra/)

Last updated: 2025-06-20

---

> Azure Managed Instance for Apache Cassandra provides a scalable, cloud-native database service for running your Cassandra workloads without managing infrastructure. Integrating this managed instance with Microsoft Purview enables visibility into keyspaces, tables, and columns, along with classification, lineage tracking, and policy enforcement for sensitive workloads.

<details>
<summary>List of References</summary>

- [Microsoft Purview Documentation](https://learn.microsoft.com/en-us/azure/purview/)
- [Azure Managed Instance for Apache Cassandra](https://learn.microsoft.com/en-us/azure/managed-instance-apache-cassandra/)
- [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)

</details>

<details>
<summary>Table of Content</summary>

- [How to Integrate Cassandra with Purview](#how-to-integrate-cassandra-with-purview)
  - [Source Registration](#source-registration)
  - [Metadata Extraction](#metadata-extraction)
  - [Data Classification](#data-classification)
- [DLP and Governance](#dlp-and-governance)
  - [Example DLP Policies](#example-dlp-policies)
- [Cost Monitoring](#cost-monitoring)
- [Best Practices](#best-practices)
- [Unity Catalog Use Case](#unity-catalog-use-case)

</details>

## How to Integrate Cassandra with Purview

### Source Registration

- Navigate to [Microsoft Purview Studio](https://web.purview.azure.com/).
- Go to **Data Map** > **Register** > **Azure Managed Instance for Apache Cassandra**.
- Input required details: cluster endpoint, authentication credentials, and integration runtime.
- Validate connectivity via SHIR or a Managed Private Endpoint if running in a secure VNet.

### Metadata Extraction

- Purview supports scanning keyspaces, tables, and column metadata.
- Apply column sampling to preview structure without scanning entire rows.
- Enable schema change detection to track evolution over time.

### Data Classification

- Use built-in classifiers to tag data types like `email`, `ssn`, `account_id`.
- Create custom classifiers for domain-specific terms used in your tables.
- Apply Microsoft Information Protection (MIP) labels to drive access control or masking.

## DLP and Governance

> Set guardrails to control access, restrict data exposure, and monitor sensitive patterns in Cassandra-based applications.

<details>
<summary><b>E.g: DLP Policy for Login Sessions</b> (Click to expand)</summary>

> Secure login and session data in tables like `auth_tokens`, `user_sessions`.

**Steps:**
1. **Target Keyspaces/Tables:** Apply to authentication-related datasets.
2. **Detection Rules:** Look for session IDs, refresh tokens, IP addresses.
3. **Policy Actions:**  
   - Expire tokens on suspected export events.  
   - Alert security team for rapid token scans.
4. **Audit:** Compare access rates with baseline query behavior.

</details>

<details>
<summary><b>E.g: DLP Policy for Retail Orders</b> (Click to expand)</summary>

> Protect sensitive e-commerce data in `orders`, `cart_items`, `billing`.

**Steps:**
1. **Scope:** Focus on fields such as `customer_id`, `product_price`, `shipping_address`.
2. **Detection:** Classify based on customer profile info and transaction markers.
3. **Actions:**  
   - Obfuscate pricing from non-analytics roles.  
   - Prevent outbound transfers to unmanaged apps.
4. **Review:** Generate daily logs of export attempts and access frequency spikes.

</details>

<details>
<summary><b>E.g: DLP Policy for IoT Sensor Data</b> (Click to expand)</summary>

> Restrict telemetry data in `sensor_logs`, `device_metrics`, `edge_state`.

**Steps:**
1. **Identify:** Detect geo-coordinates, MAC addresses, and voltage spikes.
2. **Policy Application:** Tag location data as confidential in production.
3. **Actions:**  
   - Limit export for field-level engineers.  
   - Block foreign IP access to telemetry dashboards.
4. **Monitoring:** Trigger anomaly detection for off-hours queries.

</details>

<details>
<summary><b>E.g: DLP Policy for Academic Records</b> (Click to expand)</summary>

> Safeguard university data stored in `grades`, `student_profiles`, `transcripts`.

**Steps:**
1. **Target Fields:** `student_id`, `gpa`, `disciplinary_notes`.
2. **Actions:**  
   - Mask grades from public query interfaces.  
   - Restrict access based on academic roles.
3. **Verification:** Audit with Registrar’s office quarterly.

</details>

## Cost Monitoring

> [!NOTE]  
> Cassandra and Purview cost models are separate but complementary.

- **Cassandra Managed Instance:** Billed by vCores, storage, and throughput usage.
- **Purview:** Charges based on scan frequency, size of scanned metadata, and classification rules applied.
- Optimize by:
  - Limiting scan scope to business-critical keyspaces.
  - Scheduling incremental metadata updates.
  - Using tagging to prioritize governance on sensitive domains.

## Best Practices

- **Consistency in Naming:** Use a uniform schema naming convention for easier classification.
- **Isolation:** Isolate environments (dev, test, prod) and scan selectively.
- **Access Segmentation:** Limit exposure of Cassandra admin roles when linked with Purview.
- **Security Audits:** Use Purview logs + Azure Monitor for tamper detection and access auditing.

## Unity Catalog Use Case

> Use Microsoft Purview to extend Cassandra data observability across pipelines.

### Steps:

1. Register Cassandra instance in **Purview** and enable **Unity Catalog Sync**.
2. Set up **Lineage Connectors** to link ingestion and downstream datasets (e.g., Synapse, Power BI).
3. Define **Domain Owners** for keyspaces to assign governance accountability.
4. Visualize **Data Movement** across transformations and usage in analytics layers.

### Benefits

- End-to-end visibility into structured + NoSQL data ecosystems.
- Federated policy management from Purview to Azure services.
- Reduced compliance risk through sensitivity tracking and reporting.

<!-- START BADGE -->
<div align="center">
  <img src="https://img.shields.io/badge/Total%20views-31-limegreen" alt="Total views">
  <p>Refresh Date: 2025-07-16</p>
</div>
<!-- END BADGE -->
