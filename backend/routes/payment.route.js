const express = require('express');
const router = express.Router();

const PaymentController = require('../controllers/payments.controller');
const Auth = require('../middleware/auth');

router.post('/makePayment', Auth.verifyToken, PaymentController.makePayment);

module.exports = router;