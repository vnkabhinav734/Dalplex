/*Author: Sumit Kumar B00904097*/
const express = require('express');
const router = express.Router();

const BookingController = require('../controllers/booking.controller');
const Auth = require('../middleware/auth');

router.post('/', BookingController.createBooking);
router.get('/', Auth.verifyToken, BookingController.getBookings);
//router.get('/:id', Auth.verifyToken, BookingController.getBookingById);
router.get('/slot/:id/:courtid', Auth.verifyToken, BookingController.getBookingSlots);
router.get('/slot/:id/:courtid/:date', Auth.verifyToken, BookingController.getBookingSlotsByDate);
router.patch('/:id', Auth.verifyToken, BookingController.updateBooking);
router.delete('/', Auth.verifyToken, BookingController.deleteBooking);
router.get('/:id',BookingController.upComingBookings)

module.exports = router;