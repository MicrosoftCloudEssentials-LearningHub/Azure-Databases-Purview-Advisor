from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    data_type = data.get('data_type')
    scalability = data.get('scalability')
    purview_integration = data.get('purview_integration')

    recommendation = ''

    if data_type == 'sql' and scalability == 'high' and purview_integration == 'yes':
        recommendation = 'Azure SQL Database'
    elif data_type == 'nosql' and scalability == 'high' and purview_integration == 'yes':
        recommendation = 'Azure Cosmos DB'
    elif data_type == 'sql' and scalability == 'medium':
        recommendation = 'Azure SQL Managed Instance'
    elif data_type == 'nosql' and scalability == 'medium':
        recommendation = 'Azure Cache for Redis'
    else:
        recommendation = 'Azure Database for PostgreSQL'

    return jsonify({'recommendation': recommendation})

if __name__ == '__main__':
    app.run(debug=True)