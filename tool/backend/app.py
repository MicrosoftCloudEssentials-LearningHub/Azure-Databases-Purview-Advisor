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
    deployment_model = data.get('deployment_model')
    use_case = data.get('use_case')

    # Example recommendation logic
    if use_case == "OLTP":
        if data_type == "structured" and scalability == "global":
            recommendation = "Azure Cosmos DB (SQL API)"
        elif data_volume < 10 and budget < 100:
            recommendation = "Azure SQL Database (Serverless)"
        else:
            recommendation = "Azure Database for PostgreSQL"
    elif use_case == "OLAP":
        recommendation = "Azure Synapse Analytics"
    else:
        recommendation = "Azure Blob Storage or Azure Data Lake Storage"

    return jsonify({"recommendation": recommendation})

if __name__ == '__main__':
    app.run(debug=True)