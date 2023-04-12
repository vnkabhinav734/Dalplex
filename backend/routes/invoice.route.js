/*Author: Sumit Kumar B00904097*/
const express = require('express');
const router = express.Router();

const InvoiceController = require('../controllers/invoice.controller');
const Auth = require('../middleware/auth');

router.post('/', Auth.verifyToken, InvoiceController.createInvoice);
router.get('/', Auth.verifyToken, InvoiceController.getInvoices);
router.get('/:id', Auth.verifyToken, InvoiceController.getInvoiceById);
router.patch('/:id', Auth.verifyToken, InvoiceController.updateInvoice);
router.delete('/', Auth.verifyToken, InvoiceController.deleteInvoice);

module.exports = router;