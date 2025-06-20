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

    const result = await response.json();
    document.getElementById('recommendation').innerText = `Recommended Database: ${result.recommendation}`;
});