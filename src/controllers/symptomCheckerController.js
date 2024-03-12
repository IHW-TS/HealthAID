const { getAuthToken } = require('../utils/auth');
const { getSymptoms } = require('../services/apiService');

exports.checkSymptoms = async (req, res) => {
    try {
        const token = await getAuthToken();
        if (!token) {
            return res.status(401).json({ error: "Auth token could not be retrieved." });
        }

        const symptoms = await getSymptoms(token);
        res.json(symptoms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// src/controllers/symptomCheckerController.js
const { getDiagnosis } = require('../services/apiService');

exports.checkDiagnosis = async (req, res) => {
  const { symptoms, gender, yearOfBirth } = req.query;
  try {
    const diagnosis = await getDiagnosis(symptoms, gender, yearOfBirth);
    res.json(diagnosis);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const apiService = require('../services/apiService');

// Cette fonction récupère les symptômes à partir de l'API APIMedic
exports.getSymptoms = async (req, res) => {
    try {
        const symptomsData = await apiService.getSymptoms();
        res.json(symptomsData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Cette fonction effectue le diagnostic en utilisant l'API APIMedic
exports.performDiagnosis = async (req, res) => {
    try {
        const { symptoms, gender, yearOfBirth } = req.body; 
        const diagnosisData = await apiService.getDiagnosis(symptoms, gender, yearOfBirth);
        res.json(diagnosisData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


