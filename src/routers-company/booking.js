const { verifyCompany } = require('../verify');
const { authBooking } = require('../controller-company/booking/auth');
const { showBooking } = require('../controller-company/booking/show');

const booking = require('express')()

booking.put('/auth/:bookingId', verifyCompany, authBooking)
booking.get('/show', verifyCompany, showBooking)

module.exports = {
    booking
};
