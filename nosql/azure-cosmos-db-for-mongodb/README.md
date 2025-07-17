# Azure Cosmos DB for MongoDB - Overview

Costa Rica

[![Microsoft Purview](https://img.shields.io/badge/Microsoft-Purview-blue)](https://learn.microsoft.com/en-us/azure/purview/)

Last updated: 2025-07-17

---

> Azure Cosmos DB for MongoDB provides a globally distributed, multi-model database service that is compatible with MongoDB APIs, enabling seamless integration and scalability.

<details>
<summary>Table of Content</summary>

- [Features](#features)
- [Use Cases](#use-cases)
- [Sample Code Snippet](#sample-code-snippet)
- [Security Features](#security-features)
- [Migration Strategies](#migration-strategies)
- [Performance Tuning](#performance-tuning)

</details>

## Features

- **MongoDB Compatibility**: Supports MongoDB APIs for seamless integration.
- **Global Distribution**: Data is automatically replicated across multiple regions.
- **Elastic Scalability**: Automatically scales throughput and storage based on demand.

## Use Cases

- Applications requiring MongoDB compatibility.
- Real-time analytics and reporting.
- E-commerce platforms with high user engagement.

## Sample Code Snippet

```python
from pymongo import MongoClient

# Connect to the Cosmos DB for MongoDB
client = MongoClient("your-cosmos-db-mongodb-endpoint")
db = client["your-database-name"]
collection = db["your-collection-name"]

# Insert a document
document = {"_id": "1", "data": "sample data"}
collection.insert_one(document)

# Query documents
for doc in collection.find():
    print(doc)
```

## Security Features

- **Encryption**: Data is encrypted both at rest and in transit.
- **Access Control**: Role-based access control with Azure Active Directory integration.
- **Compliance**: Meets standards like ISO, SOC, and GDPR.

## Migration Strategies

- **Data Migration Tool**: Use the Azure Cosmos DB Data Migration Tool for seamless migration.
- **Custom Scripts**: Write custom scripts to migrate data from MongoDB.

## Performance Tuning

- **Indexing**: Customize indexing policies to optimize query performance.
- **Partitioning**: Design partition keys to distribute data evenly.
- **Throughput Management**: Adjust throughput settings based on workload requirements.

<!-- START BADGE -->
<div align="center">
  <img src="https://img.shields.io/badge/Total%20views-31-limegreen" alt="Total views">
  <p>Refresh Date: 2025-07-16</p>
</div>
<!-- END BADGE -->
