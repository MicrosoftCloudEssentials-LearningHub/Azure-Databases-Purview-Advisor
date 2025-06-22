document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.style.display = index === stepIndex ? 'block' : 'none';
        });
    }

    showStep(currentStep);

    document.getElementById('next-step').addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });

    document.getElementById('prev-step').addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });

    // Pre-fill defaults
    document.getElementById('data-volume').value = '<10GB';
    document.getElementById('data-type').value = 'structured';
    document.getElementById('latency').value = '<10ms';
});

// --- Tooltip logic for info icons ---
document.querySelectorAll('.info-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function () {
        let tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.innerText = icon.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);
        const rect = icon.getBoundingClientRect();
        tooltip.style.left = rect.right + 8 + 'px';
        tooltip.style.top = rect.top + 'px';
        icon._tooltip = tooltip;
    });
    icon.addEventListener('mouseleave', function () {
        if (icon._tooltip) {
            icon._tooltip.remove();
            icon._tooltip = null;
        }
    });
    icon.addEventListener('focus', function () {
        icon.dispatchEvent(new Event('mouseenter'));
    });
    icon.addEventListener('blur', function () {
        icon.dispatchEvent(new Event('mouseleave'));
    });
});

// --- Theme toggle logic ---
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    // Add a note indicating which mode is being switched to
    let note = document.getElementById('theme-note');
    if (!note) {
        note = document.createElement('div');
        note.id = 'theme-note';
        note.style.marginTop = '8px';
        themeToggle.parentNode.appendChild(note);
    }
    note.textContent = isDark ? 'Switched to dark mode. Click to change to light mode.' : 'Switched to light mode. Click to change to dark mode.';
});

// --- Preset use case autofill ---
const presetMap = {
    ecommerce: {
        'data-volume': '10GB-1TB', 'data-type': 'structured', 'latency': '10-100ms', 'scalability': 'global', 'consistency': 'strong', 'integration-needs': 'yes', 'security': 'encryption', 'budget': '100-500 USD', 'use-case': 'OLTP', 'backup-recovery': 'yes', 'query-complexity': 'moderate', 'data-retention': 'medium-term'
    },
    iot: {
        'data-volume': '>1TB', 'data-type': 'semi-structured', 'latency': '<10ms', 'scalability': 'global', 'consistency': 'eventual', 'integration-needs': 'yes', 'security': 'rbac', 'budget': '>500 USD', 'use-case': 'OLTP', 'backup-recovery': 'yes', 'query-complexity': 'simple', 'data-retention': 'short-term'
    },
    analytics: {
        'data-volume': '>1TB', 'data-type': 'structured', 'latency': '>100ms', 'scalability': 'local', 'consistency': 'eventual', 'integration-needs': 'yes', 'security': 'compliance', 'budget': '>500 USD', 'use-case': 'OLAP', 'backup-recovery': 'yes', 'query-complexity': 'complex', 'data-retention': 'long-term'
    }
};
document.getElementById('preset-usecase').addEventListener('change', function () {
    const preset = presetMap[this.value];
    if (preset) {
        Object.entries(preset).forEach(([id, val]) => {
            const el = document.getElementById(id);
            if (el) el.value = val;
        });
        updateSummary();
    }
});

// --- Live summary logic ---
const formFields = [
    'data-volume','data-type','latency','scalability','consistency','integration-needs','security','budget','use-case','backup-recovery','query-complexity','data-retention'
];
function updateSummary() {
    const ul = document.getElementById('summary-list');
    ul.innerHTML = '';
    formFields.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const label = document.querySelector(`label[for="${id}"]`);
            const li = document.createElement('li');
            li.textContent = `${label ? label.childNodes[0].textContent.trim() : id}: ${el.value}`;
            ul.appendChild(li);
        }
    });
}
formFields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', updateSummary);
});
document.addEventListener('DOMContentLoaded', updateSummary);

// --- Recommendation logic with loading spinner, justification, confidence, export ---
document.getElementById('advisor-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    document.getElementById('recommendation-result').innerHTML = '';
    document.getElementById('loading-spinner').style.display = 'block';
    document.getElementById('export-btn').style.display = 'none';

    // Gather form data
    const data = {};
    formFields.forEach(id => {
        const el = document.getElementById(id);
        if (el) data[id.replace(/-/g, '_')] = el.value;
    });

    try {
        // Simulate backend call (replace with real fetch in production)
        // const response = await fetch('http://your-backend-url/recommend', { ... });
        // const result = await response.json();
        // Expanded logic for more Azure database options with richer justifications:
        let recommendation = 'Azure SQL Database';
        let justification = 'If you are building modern cloud applications that require high availability, scalability, and minimal maintenance, Azure SQL Database (PaaS) is a strong choice. It’s fully managed and ideal for apps needing relational data with features like automatic tuning and built-in AI.';
        let confidence = 85;

        if (data.data_type === 'semi-structured' || data.data_type === 'unstructured') {
            if (data.use_case === 'AI/ML') {
                recommendation = 'Azure Databricks or Cosmos DB';
                justification = 'Azure Databricks is ideal for scalable AI/ML workloads and big data processing. Cosmos DB supports semi-structured/unstructured data, global scaling, and low-latency, making it suitable for IoT, gaming, and retail apps.';
                confidence = 85;
            } else if (data.use_case === 'OLAP') {
                recommendation = 'Azure Synapse Analytics or Cosmos DB';
                justification = 'Azure Synapse Analytics is best for analytical workloads and complex queries on large datasets. Cosmos DB is suitable for globally distributed, low-latency NoSQL workloads, supporting multiple APIs and millisecond response times.';
                confidence = 88;
            } else if (data.data_type === 'semi-structured') {
                recommendation = 'Azure Cosmos DB';
                justification = 'Cosmos DB supports semi-structured data (JSON, etc.), offers global distribution, multi-model support, and low-latency access. It is unmatched for globally distributed, low-latency NoSQL workloads.';
                confidence = 92;
            } else {
                recommendation = 'Azure Data Lake or Cosmos DB';
                justification = 'For unstructured data, Azure Data Lake provides scalable storage and analytics, while Cosmos DB supports unstructured data with global distribution and elastic scaling.';
                confidence = 80;
            }
        } else if (data.use_case === 'OLAP') {
            recommendation = 'Azure Synapse Analytics';
            justification = 'Best for analytical workloads, data warehousing, and complex queries on large, structured datasets. It integrates with other Azure services for advanced analytics and big data.';
            confidence = 90;
        } else if (data.use_case === 'AI/ML') {
            recommendation = 'Azure Databricks or Cosmos DB';
            justification = 'Azure Databricks is optimized for AI/ML and big data analytics, supporting collaborative data science and advanced analytics. Cosmos DB can be used for storing and serving large, diverse datasets with global distribution.';
            confidence = 80;
        } else if (data.use_case === 'cache' || (data.query_complexity === 'simple' && data.latency === '<10ms')) {
            recommendation = 'Azure Cache for Redis';
            justification = 'Azure Cache for Redis is perfect for caching, session storage, and real-time analytics, boosting performance for high-throughput applications with sub-millisecond latency.';
            confidence = 90;
        } else if (data.data_type === 'structured') {
            if (data.consistency === 'strong' && data.scalability === 'global') {
                recommendation = 'Azure Cosmos DB';
                justification = 'Cosmos DB offers strong consistency, global distribution, and is suitable for mission-critical applications needing millisecond response times and elastic scaling.';
                confidence = 88;
            } else if (data.use_case === 'OLTP' && data.budget && data.budget.includes('100-500')) {
                recommendation = 'Azure SQL Database';
                justification = 'Azure SQL Database is a fully managed PaaS for modern cloud apps needing high availability, scalability, and security for relational data. Features include automatic tuning and built-in AI.';
                confidence = 87;
            } else if (data.use_case === 'OLTP' && data.integration_needs === 'yes' && data.backup_recovery === 'yes') {
                recommendation = 'Azure SQL Managed Instance';
                justification = 'Managed Instance is ideal for organizations migrating from on-prem SQL Server with minimal changes, offering near 100% compatibility and built-in backup, integration, and security features.';
                confidence = 85;
            } else if (data.use_case === 'OLTP' && data.security === 'compliance') {
                recommendation = 'Azure Database for PostgreSQL';
                justification = 'Azure Database for PostgreSQL (PaaS) is excellent for AI-ready, mission-critical apps with support for vector search, PostgreSQL extensions, and advanced analytics.';
                confidence = 83;
            } else if (data.use_case === 'OLTP' && data.security === 'encryption') {
                recommendation = 'Azure Database for MySQL';
                justification = 'Azure Database for MySQL (PaaS) is ideal for web apps like WordPress or Magento, offering high availability, seamless scaling, and built-in encryption.';
                confidence = 83;
            } else if (data.use_case === 'OLTP' && data.data_retention === 'long-term') {
                recommendation = 'SQL Server on Azure Virtual Machines';
                justification = 'SQL Server on Azure VMs (IaaS) is best for legacy apps and custom configurations, providing full control over the OS and SQL Server features.';
                confidence = 80;
            } else if (data.use_case === 'OLTP' && data.security === 'rbac') {
                recommendation = 'Azure SQL Managed Instance';
                justification = 'Managed Instance supports advanced security features including RBAC, and is suitable for enterprise workloads needing high compatibility and managed operations.';
                confidence = 82;
            } else if (data.use_case === 'OLTP' && data.data_retention === 'short-term') {
                recommendation = 'Azure SQL Database';
                justification = 'Azure SQL Database is cost-effective for short-term, high-availability OLTP workloads, with minimal maintenance and built-in intelligence.';
                confidence = 80;
            } else if (data.use_case === 'OLTP' && data.budget && data.budget.includes('>500')) {
                recommendation = 'SQL Server 2022 (IaaS)';
                justification = 'SQL Server 2022 on Azure VMs is the most Azure-integrated version yet, offering data virtualization, enhanced security, and hybrid cloud support for enterprises needing advanced analytics and cloud connectivity.';
                confidence = 80;
            } else if (data.use_case === 'OLTP' && data.security === 'compliance' && data.integration_needs === 'yes') {
                recommendation = 'Oracle Database on Azure (IaaS)';
                justification = 'Oracle Database on Azure provides a familiar environment for Oracle workloads, with low-latency access and integration with Azure services.';
                confidence = 78;
            } else {
                recommendation = 'Azure SQL Database';
                justification = 'Azure SQL Database is a general-purpose, fully managed relational database for most structured OLTP workloads, with high availability and built-in AI.';
                confidence = 85;
            }
        } else if (data.data_type === 'nosql' || data.use_case === 'NoSQL') {
            if (data.consistency === 'eventual' && data.scalability === 'global') {
                recommendation = 'Azure Cosmos DB';
                justification = 'Cosmos DB is a globally distributed, multi-model NoSQL database with tunable consistency, high throughput, and millisecond response times.';
                confidence = 90;
            } else if (data.use_case === 'OLTP' && data.integration_needs === 'yes') {
                recommendation = 'Azure Managed Instance for Apache Cassandra';
                justification = 'Azure Managed Instance for Apache Cassandra (PaaS) simplifies operations for Cassandra workloads with automated scaling and hybrid deployment support.';
                confidence = 85;
            } else if (data.use_case === 'OLTP' && data.data_type === 'semi-structured') {
                recommendation = 'Azure Cosmos DB for MongoDB';
                justification = 'Cosmos DB for MongoDB provides MongoDB API compatibility, global distribution, and managed service, adding elastic scaling and low-latency.';
                confidence = 85;
            } else if (data.use_case === 'OLTP' && data.data_type === 'semi-structured' && data.budget && data.budget.includes('>500')) {
                recommendation = 'MongoDB Atlas on Azure (SaaS)';
                justification = 'MongoDB Atlas on Azure is a fully managed SaaS offering with advanced features and integrations, providing a familiar MongoDB experience and multi-cloud flexibility.';
                confidence = 80;
            } else {
                recommendation = 'Azure Cosmos DB';
                justification = 'Cosmos DB is a flexible, fully managed NoSQL database for a wide range of NoSQL workloads, supporting multiple APIs and global distribution.';
                confidence = 85;
            }
        } else if (data.use_case === 'cache') {
            recommendation = 'Azure Cache for Redis';
            justification = 'Azure Cache for Redis is perfect for caching, session storage, and real-time analytics, boosting performance for high-throughput applications.';
            confidence = 90;
        }
        // Show result
        document.getElementById('recommendation-result').innerHTML = `
            <div class="summary-card">
                <h3>Recommendation</h3>
                <p><strong>${recommendation}</strong></p>
                <p>${justification}</p>
                <div class="confidence-bar"><span style="width:${confidence}%;"></span></div>
                <p class="confidence-label">Confidence: ${confidence}%</p>
            </div>
        `;
        document.getElementById('export-btn').style.display = 'inline-block';
    } catch (error) {
        document.getElementById('recommendation-result').innerHTML = `<span class="error">Error: ${error.message}</span>`;
    } finally {
        document.getElementById('loading-spinner').style.display = 'none';
    }
});

// --- Export/share functionality ---
document.getElementById('export-btn').addEventListener('click', function () {
    const summary = document.getElementById('live-summary').innerText;
    const recommendation = document.getElementById('recommendation-result').innerText;
    const blob = new Blob([summary + '\n\n' + recommendation], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'azure-db-recommendation.txt';
    link.click();
});