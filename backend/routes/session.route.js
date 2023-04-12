/*Author: Sumit Kumar B00904097*/
const express = require('express');
const router = express.Router();

const SessionController = require('../controllers/session.controller');

router.post('/login', SessionController.login);
router.post('/logout', SessionController.logout);
router.put('/forgotpassword',SessionController.forgotpassword)

module.exports = router;