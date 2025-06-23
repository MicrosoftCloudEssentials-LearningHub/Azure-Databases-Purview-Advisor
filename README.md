# Azure Databases Advisor \& <br/> Unifying Data Governance with Microsoft Purview - Overview

Costa Rica

[![GitHub](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com)
[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[brown9804](https://github.com/brown9804)

Last updated: 2025-06-03

----------

<details>
<summary><b>Table of Content</b> (Click to expand)</summary>
  
- [Overview](#overview)
- [Products/Services](#productsservices)

</details>


> [!IMPORTANT]
> The [Azure Databases Advisor Tool](https://microsoftcloudessentials-learninghub.github.io/Azure-Databases-Purview/) is designed to help users select the most suitable Azure database service based on their specific use case. It provides recommendations by analyzing user inputs such as data type, scalability needs, latency requirements, and more.
> The information provided and any document (such as scripts, sample codes, etc.) is provided `AS-IS` and `WITH ALL FAULTS`. Pricing estimates are for `demonstration purposes only and do not reflect final pricing`. `Microsoft assumes no liability` for your use of this information and makes no guarantees or warranties, expressed or implied, regarding its accuracy or completeness, including any pricing details. `Please note that these demos are intended as a guide and are based on personal experiences. For official guidance, support, or more detailed information, please refer to Microsoft's official documentation or contact Microsoft directly`: [Microsoft Sales and Support](https://support.microsoft.com/contactus?ContactUsExperienceEntryPointAssetId=S.HP.SMC-HOME)

## Overview 

<div align="center">
  <img src="https://github.com/brown9804/MSCloudEssentials_LPath/assets/24630902/697f7265-647a-41e2-a2f5-ec4b66cf3321" alt="Centered Image" style="border: 2px solid #4CAF50; border-radius: 5px; padding: 5px;"/>
</div>

<details>
<summary><b>Details</b> (Click to expand)</summary>

> - **Formats**<br/>
>     - Structured: Stored in predefined formats like rows and columns with consistent schema enforcement.<br/>
>     - Unstructured: Exists in diverse formats like free text, images, audio, video, and documents that lack a formal structure.<br/>
> - **Storage Model**<br/>
>     - Structured: Uses rigid, predefined schemas in relational databases ensuring integrity and data validation.<br/>
>     - Unstructured: Stored in flexible formats such as object storage, document stores, or blob storage without a fixed schema.<br/>
> - **Databases**<br/>
>     - Structured: Managed through SQL-based systems like Azure SQL, MySQL, and PostgreSQL.<br/>
>     - Unstructured: Supported by NoSQL systems like Cosmos DB, MongoDB, and cloud-native data lakes.<br/>
> - **Ease of Search**<br/>
>     - Structured: Easily queried using SQL, indexing, and standardized query languages.<br/>
>     - Unstructured: Requires more advanced approaches like keyword extraction, OCR, or AI-assisted search tools.<br/>
> - **Analysis Methods**<br/>
>     - Structured: Suited for quantitative techniques, including statistical modeling, trend analysis, and aggregation.<br/>
>     - Unstructured: Often analyzed with qualitative approaches like NLP, sentiment analysis, topic modeling, or deep learning.<br/>
> - **Tools and Technologies**<br/>
>     - Structured: RDBMS (SQL Server, Oracle), OLTP systems, CRM platforms, and OLAP tools for analytics.<br/>
>     - Unstructured: NoSQL DBMS, data mining frameworks, ML pipelines, AI services, and visualization platforms like Power BI.<br/>
> - **Specialists**<br/>
>     - Structured: Typically handled by business analysts, software engineers, solution architects, and DBAs.<br/>
>     - Unstructured: Requires data scientists, AI/ML specialists, information architects, and advanced data engineers.<br/>

</details>


## Products/Services 

```mermaid
graph TB
    A[Azure Databases]
    A --> B[SQL Products]
    A --> C[NoSQL Products]
    A --> D[Other DBs]

    B --> B1[SQL DB<br>Hyperscale]
    B --> B2[SQL DB]
    B --> B3[SQL MI]
    B --> B4[SQL on VM]

    C --> C1[Cosmos DB<br>NoSQL]
    C --> C2[MI for Cassandra]
    C --> C3[Cosmos DB<br>MongoDB]
    C --> C4[MongoDB Atlas]

    D --> D1[PostgreSQL]
    D --> D2[MySQL]
    D --> D3[Oracle at Azure]
    D --> D4[Redis]
```

<details>
<summary><b>Azure SQL Database</b> (PaaS) - Click to expand </summary>

> - **Description:** Fully managed PaaS Database Engine that automates upgrades, patching, backups, and monitoring.<br/>
> - **Benefits:** Reduces management overhead and total cost of ownership.<br/>
> - **Differentiators:** Built-in high availability, scalability, and security.<br/>
> - **Use Cases:** Ideal for modern cloud applications requiring performance, scale, and low operational maintenance.<br/>
> - **Related Products:** Azure App Service, Power BI, Azure Analysis Services.<br/>

Click here to read more about a [quick guide on Azure SQL Database](./sql/azure-sql-database/)
 
</details>

<details>
<summary><b>Azure SQL Managed Instance</b> (PaaS) - Click to expand </summary>

> - **Description:** Fully managed SQL Server instance with near-complete compatibility with on-premises SQL Server.<br/>
> - **Benefits:** Simplifies migration from on-premises without code changes.<br/>
> - **Differentiators:** Supports SQL Server Agent, linked servers, and cross-database transactions.<br/>
> - **Use Cases:** Enterprise app migrations from legacy environments.<br/>
> - **Related Products:** Azure Data Factory, Azure Databricks, Azure Synapse Analytics.<br/>

Click here to read more about a [quick guide on Azure SQL Managed Instance](./sql/azure-sql-managed-instance)

</details>

<details>
<summary><b>SQL Server on Azure Virtual Machines</b> (IaaS) - Click to expand </summary>

> - **Description:** SQL Server running on Azure VMs, offering full OS-level access and control.<br/>
> - **Benefits:** Offers flexibility and customization for apps with unique OS or database dependencies.<br/>
> - **Differentiators:** Supports specialized SQL Server features not available in PaaS offerings.<br/>
> - **Use Cases:** Best for lift-and-shift migrations requiring full control and legacy support.<br/>
> - **Related Products:** Azure Backup, Azure Site Recovery, Azure Monitor.<br/>

Click here to read more about a [quick guide on SQL Server on Azure Virtual Machines](./sql/sql-server-on-azure-vm)

</details>

<details>
<summary><b>Azure Database for PostgreSQL</b> (PaaS) - Click to expand </summary>

> - **Description:** Enterprise-ready community PostgreSQL database service, fully managed by Microsoft.<br/>
> - **Benefits:** High availability with up to 99.99% SLA, built-in security, and scalability.<br/>
> - **Differentiators:** Supports PostgreSQL extensions and advanced indexing options.<br/>
> - **Use Cases:** Cloud-native applications using PostgreSQL frameworks like Django or Flask.<br/>
> - **Related Products:** Azure Kubernetes Service, Azure App Service, Power BI.<br/>

Click here to read more about a [quick guide on Azure Database for PostgreSQL](./sql/azure-database-for-postgresql)

</details>

<details>
<summary><b>Azure Database for MySQL</b> (PaaS) - Click to expand </summary>

> - **Description:** Managed MySQL service providing open-source compatibility and built-in scaling.<br/>
> - **Benefits:** Automatic backups, patching, high availability, and zone redundancy.<br/>
> - **Differentiators:** Community edition with scalable performance tiers.<br/>
> - **Use Cases:** Applications using PHP, Ruby, or Node.js; WordPress and ecommerce platforms.<br/>
> - **Related Products:** Azure Web Apps, Azure Functions, Azure Logic Apps.<br/>

Click here to read more about a [quick guide on Azure Database for MySQL](./sql/azure-database-for-mysql)

</details>

<details>
<summary><b>Oracle Database on Azure</b> (IaaS) - Click to expand </summary>

> - **Description:** Enables customers to run Oracle workloads directly on Azure infrastructure.<br/>
> - **Benefits:** Leverages existing Oracle licenses and integrations with Azure services.<br/>
> - **Differentiators:** Official Oracle support with flexible deployment topologies.<br/>
> - **Use Cases:** Running core enterprise Oracle applications with high availability.<br/>
> - **Related Products:** Azure Site Recovery, Azure Backup, Azure Active Directory.<br/>

Click here to read more about a [quick guide on Oracle Database on Azure](./sql/oracle-database-on-azure)

</details>

<details>
<summary><b>SQL Server 2022</b> (IaaS) - Click to expand </summary>

> - **Description:** Latest release of SQL Server with built-in hybrid and cloud-connected capabilities.<br/>
> - **Benefits:** Brings innovations like ledger tables, Synapse Link, and built-in security enhancements.<br/>
> - **Differentiators:** Full hybrid flexibility for modern apps with backward compatibility.<br/>
> - **Use Cases:** Enterprise apps requiring up-to-date SQL features and strong cloud connectivity.<br/>
> - **Related Products:** Azure Synapse Analytics, Power BI, Azure Data Factory.<br/>

Click here to read more about a [quick guide on SQL Server 2022](./sql/sql-server-2022)

</details>

<details>
<summary><b>Azure Cosmos DB</b> (PaaS) - Click to expand </summary>

> - **Description:** Globally distributed, multi-model NoSQL database for ultra-low latency and high throughput.<br/>
> - **Benefits:** Turnkey global replication, automatic scaling, and multi-region writes.<br/>
> - **Differentiators:** Supports multiple APIs (SQL, MongoDB, Cassandra, Gremlin, Table).<br/>
> - **Use Cases:** IoT, retail, gaming, real-time personalization, and telemetry apps.<br/>
> - **Related Products:** Azure Functions, Azure Logic Apps, Azure Container Instances.<br/>

Click here to read more about a [quick guide on Azure Cosmos DB](./nosql/azure-cosmos-db)

</details>

<details>
<summary><b>Azure Managed Instance for Apache Cassandra</b> (PaaS) - Click to expand </summary>

> - **Description:** Managed Cassandra database service designed for massive scale and availability.<br/>
> - **Benefits:** Built-in automation, scalability, and hybrid deployment options.<br/>
> - **Differentiators:** Supports native Cassandra drivers and schemas with Azure-managed benefits.<br/>
> - **Use Cases:** Wide-column workloads such as product catalogs, fraud detection, and event monitoring.<br/>
> - **Related Products:** Azure Synapse Analytics, Azure HDInsight, Azure Databricks.<br/>

Click here to read more about a [quick guide on Azure Managed Instance for Apache Cassandra](./nosql/azure-managed-instance-for-apache-cassandra)

</details>

<details>
<summary><b>Azure Cosmos DB for MongoDB</b> (PaaS)</summary>

> - **Description:** Fully managed implementation of MongoDB using Cosmos DB’s global infrastructure.<br/>
> - **Benefits:** Globally available with strong SLAs and elastic scalability.<br/>
> - **Differentiators:** Offers wire protocol compatibility with native MongoDB SDKs and tools.<br/>
> - **Use Cases:** Web apps, content management, cataloging, and personalized recommendation engines.<br/>
> - **Related Products:** Azure Kubernetes Service, Azure Databricks, Azure Functions.<br/>

Click here to read more about a [quick guide on Azure Cosmos DB for MongoDB](./nosql/azure-cosmos-db-for-mongodb)

</details>

<details>
<summary><b>MongoDB Atlas on Azure</b> (SaaS) - Click to expand </summary>

> - **Description:** Official managed MongoDB service deployed in Azure’s cloud infrastructure.<br/>
> - **Benefits:** High automation, operational best practices, and global clusters.<br/>
> - **Differentiators:** Offers native integration with MongoDB features and support from MongoDB Inc.<br/>
> - **Use Cases:** Mobile and IoT apps, gaming, metadata management, and logging platforms.<br/>
> - **Related Products:** Azure Kubernetes Service, Azure Databricks, Azure Functions.<br/>

Click here to read more about a [quick guide on MongoDB Atlas on Azure](./nosql/mongo-db-atlas-on-azure)

</details>

<details>
<summary><b>Azure Cache for Redis</b> (PaaS) - Click to expand </summary>

> - **Description:** In-memory data store used for caching, messaging, and fast key-value operations.<br/>
> - **Benefits:** Ultra-low latency and high throughput data access.<br/>
> - **Differentiators:** Fully managed Redis with security, scaling, and geo-replication.<br/>
> - **Use Cases:** Session stores, real-time leaderboards, background task queues.<br/>
> - **Related Products:** Azure Web Apps, Azure Functions, Azure Logic Apps.<br/>

Click here to read more about a [quick guide on Azure Cache for Redis](./nosql/azure-cache-for-redis)

</details>


<div align="center">
  <h3 style="color: #4CAF50;">Total Visitors</h3>
  <img src="https://profile-counter.glitch.me/brown9804/count.svg" alt="Visitor Count" style="border: 2px solid #4CAF50; border-radius: 5px; padding: 5px;"/>
</div>
