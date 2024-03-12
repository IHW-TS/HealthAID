
document.getElementById('loadSymptoms').addEventListener('click', function() {
    fetch('/api/get-symptoms', { // Assurez-vous que cette URL correspond à votre route côté serveur
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const symptomsList = document.getElementById('symptomsList');
        symptomsList.innerHTML = '';
        data.forEach(symptom => {
            const li = document.createElement('li');
            li.textContent = symptom.Name;
            symptomsList.appendChild(li);
        });
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('diagnosisForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const symptoms = document.getElementById('symptoms').value.split(',').map(Number);
    const gender = document.getElementById('gender').value;
    const yearOfBirth = parseInt(document.getElementById('yearOfBirth').value);

    fetch('/api/diagnosis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ symptoms, gender, yearOfBirth })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('diagnosisResult').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Erreur:', error));
});


  