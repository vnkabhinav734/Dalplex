/*Author: Sumit Kumar B00904097*/
const Booking = require('../models/bookings.model');
require("dotenv").config();

const createBooking = async (request, response) => {
    const { userid, categoryid, courtid, program, interval, semester, registeredon, status } = request.body;

    const booking = new Booking({ userid, categoryid, courtid, program, interval, semester, registeredon, status });
    try {
        await booking.save();
        response.status(201).json(booking);
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
};

const getBookings = async (request, response) => {
    try {
        const bookings = await Booking.find();
        response.json(bookings);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const getBookingSlots = async (request, response) => {
    const { id, courtid } = request.params;
    try {
        const bookings = await Booking.find();
        const bookedSlots = bookings.filter((item) => item.status == 'confirmed' && item.categoryid == id && item.courtid == courtid);
        
        let timeIntervals = [];
        const today = new Date();
        today.setDate(today.getDate() + 1);

        // generate all time intervals from 6AM to 10PM
        for (let i = 6; i < 22; i++) {
            let hour = i % 12;
            if (hour === 0) {
                hour = 12;
            }
            let startTime = hour + ':00 ' + (i >= 12 ? 'PM' : 'AM');
            let endTime = (hour + 1) + ':00 ' + (i >= 11 ? 'PM' : 'AM');
            timeIntervals.push(startTime + ' - ' + endTime);
        }
    
        const allSlots = Array.from({ length: process.env.MAX_BOOKING_DAY }, (_, i) => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + i + 1);
        
            // Generate slots for the current date
            const slotsForDate = timeIntervals.map(interval => {
            const id = `${currentDate.getTime()}-${interval}`;
            const isBooked = bookedSlots.some(slot => {
                // Compare the date part of slot.date and currentDate
                const slotDate = new Date(slot.date);
                return slot.interval === interval && slotDate.toDateString() === currentDate.toDateString();
            });
            const status = isBooked ? "booked" : "available";
            return { id, interval, status, date: currentDate };
            });
        
            return slotsForDate;
        }).reduce((prev, curr) => prev.concat(curr), []);

        response.json(allSlots);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const getBookingSlotsByDate = async (request, response) => {
    const { id, date, courtid } = request.params;
    try {
        const bookings = await Booking.find();
        const bookedSlots = bookings.filter((item) => item.status == 'confirmed' && item.categoryid == id && item.courtid == courtid);
        
        let timeIntervals = [];
        const today = new Date();
        today.setDate(today.getDate() + 1);

        // generate all time intervals from 6AM to 10PM
        for (let i = 6; i < 22; i++) {
            let hour = i % 12;
            if (hour === 0) {
                hour = 12;
            }
            let startTime = hour + ':00 ' + (i >= 12 ? 'PM' : 'AM');
            let endTime = (hour + 1) + ':00 ' + (i >= 11 ? 'PM' : 'AM');
            timeIntervals.push(startTime + ' - ' + endTime);
        }
    
        const allSlots = Array.from({ length: process.env.MAX_BOOKING_DAY }, (_, i) => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + i + 1);
        
            // Generate slots for the current date
            const slotsForDate = timeIntervals.map(interval => {
            const id = `${currentDate.getTime()}-${interval}`;
            const isBooked = bookedSlots.some(slot => {
                // Compare the date part of slot.date and currentDate
                const slotDate = new Date(slot.registeredon);
                return slot.interval === interval && slotDate.toDateString() === currentDate.toDateString();
            });
            const status = isBooked ? "booked" : "available";
            return { id, interval, status, date: currentDate };
            });
        
            return slotsForDate;
        }).reduce((prev, curr) => prev.concat(curr), []);

        response.json(allSlots.filter((item) => item.date.toDateString() === date));
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const getBookingById = async (request, response) => {
    const { id } = request.params;

    try {
        const booking = await Booking.findById(id);
        if (!booking) {
            return response.status(404).json({ message: 'Booking not found' });
        }
        response.json(booking);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const deleteBooking = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedBooking = await Booking.findByIdAndDelete(id);
    if (!deletedBooking) {
      return response.status(404).json({ message: "Booking not found" });
    }
    response.json(deletedBooking);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const updateBooking = async (request, response) => {
  const { id } = request.params;
  const updates = {
    userid: request.body.userid, 
    categoryid: request.body.categoryid,
    courtid: request.body.courtid,
    program: request.body.program, 
    interval: request.body.interval, 
    semester: request.body.semester, 
    registeredon: request.body.registeredon, 
    status: request.body.status
  };

  try {
    const booking = await Booking.findByIdAndUpdate(id, updates, { new: true });
    if (!booking) {
      return response.status(404).json({ message: "Booking not found" });
    }
    response.json(booking);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};
const upComingBookings = async (request, response) => {
    try {
        const userid = request.params;
        const bookings = Booking.find({userid: userid.id});
        const currentDate=new Date()
        const upComingBookings= (await bookings).filter(item=> new Date(item.registeredon)>=currentDate);
        response.json(upComingBookings);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
  }

module.exports = {
    createBooking,
    getBookings,
    getBookingById,
    deleteBooking,
    updateBooking,
    getBookingSlots,
    getBookingSlotsByDate,
    upComingBookings
};