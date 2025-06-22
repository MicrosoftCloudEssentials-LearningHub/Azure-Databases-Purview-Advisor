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

document.getElementById('advisor-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const dataVolume = document.getElementById('data-volume').value;
    const dataType = document.getElementById('data-type').value;
    const latency = document.getElementById('latency').value;
    const scalability = document.getElementById('scalability').value;
    const consistency = document.getElementById('consistency').value;
    const integrationNeeds = document.getElementById('integration-needs').value;
    const security = document.getElementById('security').value;
    const budget = document.getElementById('budget').value;
    const useCase = document.getElementById('use-case').value;
    const backupRecovery = document.getElementById('backup-recovery').value;

    try {
        const response = await fetch('http://your-backend-url/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                data_volume: dataVolume, 
                data_type: dataType, 
                latency, 
                scalability, 
                consistency, 
                integration_needs: integrationNeeds, 
                security, 
                budget, 
                use_case: useCase, 
                backup_recovery: backupRecovery 
            })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch recommendation. Please check the backend URL or try again later.');
        }

        const result = await response.json();
        document.getElementById('recommendation').innerText = `Recommended Database: ${result.recommendation}`;

        // Save configuration to local storage
        localStorage.setItem('databaseConfig', JSON.stringify({
            dataVolume,
            dataType,
            latency,
            scalability,
            consistency,
            integrationNeeds,
            security,
            budget,
            useCase,
            backupRecovery
        }));

        // Export results as PDF
        const pdfContent = `Recommended Database: ${result.recommendation}\n\nConfiguration:\n${JSON.stringify({
            dataVolume,
            dataType,
            latency,
            scalability,
            consistency,
            integrationNeeds,
            security,
            budget,
            useCase,
            backupRecovery
        }, null, 2)}`;

        const blob = new Blob([pdfContent], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'database-recommendation.pdf';
        link.click();

    } catch (error) {
        document.getElementById('recommendation').innerText = `Error: ${error.message}`;
    }
});