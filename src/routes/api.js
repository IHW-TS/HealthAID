const express = require('express');
const symptomCheckerController = require('../controllers/symptomCheckerController');

const router = express.Router();

router.get('/symptoms', symptomCheckerController.getSymptoms);
router.post('/diagnosis', symptomCheckerController.performDiagnosis);

module.exports = router;
