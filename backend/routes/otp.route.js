/*Author: Sumit Kumar B00904097*/
const express = require('express');
const router = express.Router();

const VerificationController = require('../controllers/otp.controller');
const Auth = require('../middleware/auth');

router.post('/', VerificationController.createVerification);
router.get('/', Auth.verifyToken, VerificationController.getVerifications);
router.get('/:id', Auth.verifyToken, VerificationController.getVerificationById);
router.patch('/:id', Auth.verifyToken, VerificationController.updateVerification);
router.delete('/', Auth.verifyToken, VerificationController.deleteVerification);

module.exports = router;