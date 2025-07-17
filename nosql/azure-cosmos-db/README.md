# Azure Cosmos DB - Overview

Costa Rica

[![Microsoft Purview](https://img.shields.io/badge/Microsoft-Purview-blue)](https://learn.microsoft.com/en-us/azure/purview/) [![Azure Cosmos DB](https://img.shields.io/badge/Azure-CosmosDB-blue)](https://learn.microsoft.com/en-us/azure/cosmos-db/)

Last updated: 2025-07-17

---

> Azure Cosmos DB is a globally distributed, multi-model database service designed for scalability and performance. It supports document, key-value, graph, and column-family data models.

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

- **Global Distribution**: Data is automatically replicated across multiple regions.
- **Multi-Model Support**: Supports document, key-value, graph, and column-family data models.
- **Low Latency**: Provides millisecond response times for read and write operations.
- **Elastic Scalability**: Automatically scales throughput and storage based on demand.

## Use Cases

- Real-time IoT applications.
- E-commerce platforms requiring low-latency data access.
- Social media applications with high user engagement.

## Sample Code Snippet

```python
from azure.cosmos import CosmosClient

# Initialize the Cosmos client
endpoint = "your-cosmos-db-endpoint"
key = "your-cosmos-db-key"
client = CosmosClient(endpoint, key)

# Create a database
database_name = "your-database-name"
database = client.create_database_if_not_exists(id=database_name)

# Create a container
container_name = "your-container-name"
container = database.create_container_if_not_exists(
    id=container_name,
    partition_key=PartitionKey(path="/partitionKey"),
    offer_throughput=400
)

# Insert an item
item = {
    "id": "1",
    "partitionKey": "example",
    "data": "sample data"
}
container.create_item(body=item)

# Query items
query = "SELECT * FROM c WHERE c.partitionKey='example'"
items = list(container.query_items(query=query, enable_cross_partition_query=True))

for item in items:
    print(item)
```

## Security Features

- **Encryption**: Data is encrypted both at rest and in transit.
- **Access Control**: Role-based access control with Azure Active Directory integration.
- **Compliance**: Meets standards like ISO, SOC, and GDPR.

## Migration Strategies

- **Data Migration Tool**: Use the Azure Cosmos DB Data Migration Tool for seamless migration.
- **Custom Scripts**: Write custom scripts to migrate data from other NoSQL databases.

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
