/*Author: Sumit Kumar B00904097*/
const express = require('express');
const router = express.Router();

const PaymentMethodsController = require('../controllers/paymentmethod.controller');
const Auth = require('../middleware/auth');

router.post('/', Auth.verifyToken, PaymentMethodsController.createPaymentMethods);
router.get('/', Auth.verifyToken, PaymentMethodsController.getPaymentMethodss);
router.get('/:id', Auth.verifyToken, PaymentMethodsController.getPaymentMethodsById);
router.patch('/:id', Auth.verifyToken, PaymentMethodsController.updatePaymentMethods);
router.delete('/', Auth.verifyToken, PaymentMethodsController.deletePaymentMethods);

module.exports = router;