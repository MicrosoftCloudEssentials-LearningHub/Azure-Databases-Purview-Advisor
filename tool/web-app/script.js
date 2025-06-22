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
function updateThemeToggleButton() {
    const isDark = document.body.classList.contains('dark-mode');
    if (isDark) {
        themeToggle.innerHTML = '☀️ Light Mode';
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
        themeToggle.setAttribute('title', 'Switch to light mode');
    } else {
        themeToggle.innerHTML = '🌙 Dark Mode';
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        themeToggle.setAttribute('title', 'Switch to dark mode');
    }
}
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateThemeToggleButton();
    // Add a note indicating which mode is being switched to
    let note = document.getElementById('theme-note');
    if (!note) {
        note = document.createElement('div');
        note.id = 'theme-note';
        note.style.marginTop = '8px';
        themeToggle.parentNode.appendChild(note);
    }
    note.textContent = document.body.classList.contains('dark-mode')
        ? 'Switched to dark mode. Click to change to light mode.'
        : 'Switched to light mode. Click to change to dark mode.';
});
updateThemeToggleButton();

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
const summaryIcons = {
    'data-volume': '💾',
    'data-type': '📦',
    'latency': '⚡',
    'scalability': '🌍',
    'consistency': '🔗',
    'integration-needs': '🔌',
    'security': '🔒',
    'budget': '💸',
    'use-case': '🗄️',
    'backup-recovery': '🛡️',
    'query-complexity': '🧩',
    'data-retention': '⏳'
};
const docLinks = {
    'data-volume': 'https://learn.microsoft.com/en-us/azure/architecture/best-practices/data-partitioning#scalability-targets',
    'data-type': 'https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/data-store-overview',
    'latency': 'https://learn.microsoft.com/en-us/azure/azure-sql/database/performance-guidance-overview',
    'scalability': 'https://learn.microsoft.com/en-us/azure/cosmos-db/distribute-data-globally',
    'consistency': 'https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels',
    'integration-needs': 'https://learn.microsoft.com/en-us/azure/data-factory/introduction',
    'security': 'https://learn.microsoft.com/en-us/azure/azure-sql/database/security-overview',
    'budget': 'https://azure.microsoft.com/en-us/pricing/calculator/',
    'use-case': 'https://learn.microsoft.com/en-us/azure/azure-sql/database/oltp-olap-overview',
    'backup-recovery': 'https://learn.microsoft.com/en-us/azure/backup/backup-overview',
    'query-complexity': 'https://learn.microsoft.com/en-us/azure/azure-sql/database/query-performance-insight-use',
    'data-retention': 'https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-data-retention'
};
function updateSummary() {
    const ul = document.getElementById('summary-list');
    ul.innerHTML = '';
    formFields.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const label = document.querySelector(`label[for="${id}"]`);
            const icon = summaryIcons[id] || '';
            const doc = docLinks[id] ? `<a href="${docLinks[id]}" target="_blank" class="doc-link" title="Microsoft documentation" style="margin-left:0.4em;font-size:1.1em;">🔗</a>` : '';
            const li = document.createElement('li');
            li.innerHTML = `<span class="summary-icon">${icon}</span><span class="summary-label">${label ? label.childNodes[0].textContent.trim() : id}:</span> <span>${el.value}</span>${doc}`;
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
        showJustification(justification, confidence);
    } catch (error) {
        document.getElementById('recommendation-result').innerHTML = `<span class="error">Error: ${error.message}</span>`;
    } finally {
        document.getElementById('loading-spinner').style.display = 'none';
    }
});

// --- Show Justification and Confidence Score ---
function showJustification(justification, confidence) {
    const justDiv = document.getElementById('recommendation-justification');
    const confDiv = document.getElementById('confidence-score');
    // Extended technical definition and disclaimer
    const extendedDef = `<div style="margin-bottom:0.7em;">
        <strong>About this Azure Service:</strong><br>
        <span id="extended-service-def"></span>
    </div>
    <div style="font-size:0.97em;color:#b71c1c;margin-bottom:0.5em;">
        <strong>Disclaimer:</strong> This tool is an advisor only. For official guidance, support, or more detailed information, please refer to <a href='https://support.microsoft.com/contactus?ContactUsExperienceEntryPointAssetId=S.HP.SMC-HOME' target='_blank' rel='noopener'>Microsoft Sales and Support</a> or the official Microsoft documentation.
    </div>`;
    document.getElementById('justification-text').innerHTML = extendedDef + justification;
    justDiv.style.display = 'block';
    document.getElementById('confidence-value').textContent = confidence + '%';
    confDiv.style.display = 'block';
    // Try to show a broad technical definition for the recommended service
    const recDiv = document.getElementById('recommendation-result');
    let rec = '';
    if (recDiv) {
        const match = recDiv.innerHTML.match(/<strong>([\w\s\-\/]+)<\/strong>/i);
        if (match) {
            rec = match[1].trim();
        }
    }
    const defs = {
        'Azure SQL Database': `Azure SQL Database is a fully managed platform as a service (PaaS) database engine that handles most of the database management functions such as upgrading, patching, backups, and monitoring without user involvement. It provides built-in high availability, scalability, and security. Learn more at <a href='https://learn.microsoft.com/en-us/azure/azure-sql/database/' target='_blank'>Azure SQL Database documentation</a>.`,
        'Azure Cosmos DB': `Azure Cosmos DB is a globally distributed, multi-model database service designed for mission-critical applications. It offers turnkey global distribution, elastic scaling of throughput and storage, multi-model support (including document, key-value, graph, and column-family), and guarantees single-digit millisecond latencies at the 99th percentile. Learn more at <a href='https://learn.microsoft.com/en-us/azure/cosmos-db/introduction' target='_blank'>Azure Cosmos DB documentation</a>.`,
        'Azure SQL Managed Instance': `Azure SQL Managed Instance is a fully managed SQL Server database engine instance hosted in Azure cloud. It provides near 100% compatibility with the latest SQL Server (Enterprise Edition) database engine, making it easy to migrate SQL Server workloads to Azure. Learn more at <a href='https://learn.microsoft.com/en-us/azure/azure-sql/managed-instance/managed-instance-overview' target='_blank'>Azure SQL Managed Instance documentation</a>.`,
        'Azure Database for PostgreSQL': `Azure Database for PostgreSQL is a managed database service for app development and deployment that provides built-in high availability, automated backups, scaling, and security. It supports community PostgreSQL and offers flexible server and hyperscale (Citus) deployment options. Learn more at <a href='https://learn.microsoft.com/en-us/azure/postgresql/' target='_blank'>Azure Database for PostgreSQL documentation</a>.`,
        'Azure Database for MySQL': `Azure Database for MySQL is a managed database service for app development and deployment with built-in high availability, security, and scaling. It supports community MySQL and offers flexible server deployment. Learn more at <a href='https://learn.microsoft.com/en-us/azure/mysql/' target='_blank'>Azure Database for MySQL documentation</a>.`,
        'Azure Synapse Analytics': `Azure Synapse Analytics is an integrated analytics service that accelerates time to insight across data warehouses and big data systems. It brings together big data and data warehousing into a single service for end-to-end analytics. Learn more at <a href='https://learn.microsoft.com/en-us/azure/synapse-analytics/' target='_blank'>Azure Synapse Analytics documentation</a>.`,
        'Azure Databricks': `Azure Databricks is an Apache Spark-based analytics platform optimized for the Microsoft Azure cloud. It provides collaborative notebooks, integrated workflows, and enterprise-grade security for big data analytics and AI. Learn more at <a href='https://learn.microsoft.com/en-us/azure/databricks/' target='_blank'>Azure Databricks documentation</a>.`,
        'Azure Cache for Redis': `Azure Cache for Redis is a fully managed, in-memory cache that enables high-performance and scalable architectures. It is based on the popular open-source Redis cache and provides sub-millisecond data access to power fast, scalable applications. Learn more at <a href='https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/' target='_blank'>Azure Cache for Redis documentation</a>.`,
        'SQL Server on Azure Virtual Machines': `SQL Server on Azure Virtual Machines enables you to use full versions of SQL Server in the cloud without having to manage any on-premises hardware. It provides full control over the SQL Server instance and operating system. Learn more at <a href='https://learn.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/sql-server-on-azure-vm-iaas-overview' target='_blank'>SQL Server on Azure VM documentation</a>.`,
        'MongoDB Atlas on Azure (SaaS)': `MongoDB Atlas on Azure is a fully managed MongoDB service that automates deployment, scaling, and management of MongoDB clusters on Azure. Learn more at <a href='https://www.mongodb.com/atlas/azure' target='_blank'>MongoDB Atlas on Azure documentation</a>.`,
        'Oracle Database on Azure (IaaS)': `Oracle Database on Azure enables you to run Oracle Database workloads on Azure infrastructure, providing high availability, security, and integration with Azure services. Learn more at <a href='https://learn.microsoft.com/en-us/azure/architecture/example-scenario/oracle/oracle-db-migration-azure/' target='_blank'>Oracle Database on Azure documentation</a>.`,
        'Azure Managed Instance for Apache Cassandra': `Azure Managed Instance for Apache Cassandra is a managed service that provides scalability and high availability for Cassandra workloads, with automated patching, scaling, and hybrid deployment support. Learn more at <a href='https://learn.microsoft.com/en-us/azure/managed-instance-apache-cassandra/' target='_blank'>Azure Managed Instance for Apache Cassandra documentation</a>.`,
        'Azure Cosmos DB for MongoDB': `Azure Cosmos DB for MongoDB is a fully managed, scalable, and highly available database service that supports MongoDB workloads with global distribution and low-latency access. Learn more at <a href='https://learn.microsoft.com/en-us/azure/cosmos-db/mongodb/mongodb-introduction' target='_blank'>Azure Cosmos DB for MongoDB documentation</a>.`
    };
    if (rec && defs[rec]) {
        document.getElementById('extended-service-def').innerHTML = defs[rec];
    } else {
        document.getElementById('extended-service-def').innerHTML = 'For more information about this Azure service, please refer to the <a href="https://azure.microsoft.com/en-us/products/category/databases/" target="_blank">official Azure documentation</a>.';
    }
}

// --- Reset Button Logic ---
document.getElementById('reset-form').addEventListener('click', function () {
    setTimeout(() => {
        updateSummary();
        document.getElementById('recommendation-result').innerHTML = '';
        document.getElementById('recommendation-justification').style.display = 'none';
        document.getElementById('confidence-score').style.display = 'none';
        document.getElementById('comparison-table').style.display = 'none';
    }, 10);
});

// --- Feedback Widget ---
document.getElementById('feedback').addEventListener('change', function () {
    if (this.value === 'yes') {
        this.style.background = '#c8e6c9';
    } else if (this.value === 'no') {
        this.style.background = '#ffcdd2';
    } else {
        this.style.background = '';
    }
});

// --- Accessibility: Focus on recommendation result after submit ---
function focusRecommendation() {
    const rec = document.getElementById('recommendation-result');
    if (rec) rec.setAttribute('tabindex', '-1');
    rec && rec.focus && rec.focus();
}

// --- Comparison Table (stub, to be filled with real data if needed) ---
function showComparisonTable(options) {
    const tableDiv = document.getElementById('comparison-table');
    if (!options || !options.length) {
        tableDiv.style.display = 'none';
        return;
    }
    let html = '<table><tr><th>Option</th><th>Strengths</th><th>Weaknesses</th></tr>';
    options.forEach(opt => {
        html += `<tr><td>${opt.name}</td><td>${opt.strengths}</td><td>${opt.weaknesses}</td></tr>`;
    });
    html += '</table>';
    tableDiv.innerHTML = '<h4>Compare Options</h4>' + html;
    tableDiv.style.display = 'block';
}

// --- Advanced Settings Toggle ---
const advToggle = document.getElementById('toggle-advanced');
const advSettings = document.getElementById('advanced-settings');
advToggle.addEventListener('click', function () {
    const expanded = advToggle.getAttribute('aria-expanded') === 'true';
    advToggle.setAttribute('aria-expanded', !expanded);
    advSettings.style.display = expanded ? 'none' : 'block';
    advToggle.textContent = expanded ? 'Show Advanced Settings' : 'Hide Advanced Settings';
});