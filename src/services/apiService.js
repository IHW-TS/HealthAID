const axios = require('axios');
const { getAuthToken } = require('../utils/auth');

const API_ENDPOINT = 'https://healthservice.priaid.ch';

// Fonction pour récupérer les symptômes de l'API
async function getSymptoms() {
    const token = await getAuthToken();
    const response = await axios.get(`${API_ENDPOINT}/symptoms`, {
        params: {
            token: token,
            language: 'en-gb',  
            format: 'json'
        }
    });
    return response.data;
}

// Fonction pour obtenir un diagnostic basé sur les symptômes
async function getDiagnosis(symptoms, gender, yearOfBirth) {
    const token = await getAuthToken();
    const response = await axios.get(`${API_ENDPOINT}/diagnosis`, {
        params: {
            symptoms: JSON.stringify(symptoms),  // symptoms doit être un tableau d'ID de symptômes
            gender: gender,
            yearOfBirth: yearOfBirth,
            language: 'en-gb',  
            token: token
        }
    });
    return response.data;
}

module.exports = {
    getSymptoms,
    getDiagnosis
};
