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
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
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
        // For demo, use hardcoded logic:
        let recommendation = 'Azure SQL Database';
        let justification = 'Recommended for structured data, strong consistency, and moderate query complexity.';
        let confidence = 85;
        if (data.data_type === 'semi-structured' || data.data_type === 'unstructured') {
            recommendation = 'Azure Cosmos DB';
            justification = 'Cosmos DB supports semi-structured/unstructured data, global scaling, and low-latency.';
            confidence = 92;
        } else if (data.use_case === 'OLAP') {
            recommendation = 'Azure Synapse Analytics';
            justification = 'Best for analytical workloads and complex queries on large datasets.';
            confidence = 90;
        } else if (data.use_case === 'AI/ML') {
            recommendation = 'Azure Databricks or Cosmos DB';
            justification = 'Supports AI/ML workloads and scalable data processing.';
            confidence = 80;
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