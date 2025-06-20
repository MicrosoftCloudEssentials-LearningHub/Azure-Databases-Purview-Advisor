document.getElementById('recommend-button').addEventListener('click', function() {
    const dataType = document.getElementById('data-type').value;
    const scalability = document.getElementById('scalability').value;
    const purviewIntegration = document.getElementById('purview-integration').value;

    let recommendation = '';

    if (dataType === 'sql' && scalability === 'high' && purviewIntegration === 'yes') {
        recommendation = 'Azure SQL Database';
    } else if (dataType === 'nosql' && scalability === 'high' && purviewIntegration === 'yes') {
        recommendation = 'Azure Cosmos DB';
    } else if (dataType === 'sql' && scalability === 'medium') {
        recommendation = 'Azure SQL Managed Instance';
    } else if (dataType === 'nosql' && scalability === 'medium') {
        recommendation = 'Azure Cache for Redis';
    } else {
        recommendation = 'Azure Database for PostgreSQL';
    }

    document.getElementById('recommendation-result').textContent = recommendation;
});