from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend_database():
    data = request.json
    data_volume = data.get('data_volume')
    data_type = data.get('data_type')
    latency = data.get('latency')
    scalability = data.get('scalability')
    consistency = data.get('consistency')
    integration_needs = data.get('integration_needs')
    security = data.get('security')
    budget = data.get('budget')
    use_case = data.get('use_case')
    backup_recovery = data.get('backup_recovery')
    query_complexity = data.get('query_complexity')
    data_retention = data.get('data_retention')

    # Example recommendation logic
    if use_case == "OLTP":
        if data_type == "structured" and scalability == "global":
            recommendation = "Azure Cosmos DB (SQL API)"
        elif data_volume == "<10GB" and budget == "<100 USD":
            recommendation = "Azure SQL Database (Serverless)"
        else:
            recommendation = "Azure Database for PostgreSQL"
    elif use_case == "OLAP":
        recommendation = "Azure Synapse Analytics"
    elif use_case == "AI/ML":
        recommendation = "Azure Cosmos DB (Gremlin API)"
    else:
        recommendation = "Azure Blob Storage or Azure Data Lake Storage"

    # Add logic for query complexity and data retention
    if query_complexity == "complex" and data_retention == "long-term":
        recommendation += " with advanced analytics and long-term storage options."

    return jsonify({"recommendation": recommendation})

if __name__ == '__main__':
    app.run(debug=True)