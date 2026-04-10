const express = require('express');
const auth = require('../../middlewares/auth');
const documentController = require('../../controllers/document.controller');

const router = express.Router();

// Only users with the 'admin' role can access this route
router.post('/generate-pdf', auth('manageUsers'), documentController.generatePdf);

module.exports = router;