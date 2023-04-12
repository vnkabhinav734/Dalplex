const express = require('express');
const router = express.Router();

const CartController = require('../controllers/cart.controller');
const Auth = require('../middleware/auth');


router.get('/getItemsCount', Auth.verifyToken, CartController.getItemsCount);
router.get('/getCart', Auth.verifyToken, CartController.getCart);
router.post('/addToCart', Auth.verifyToken, CartController.addToCart);
router.delete('/deleteFromCart/:id', Auth.verifyToken, CartController.deleteCart);

module.exports = router;