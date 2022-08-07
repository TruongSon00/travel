const bookingModel = require('../../models/booking.model');
const { msgErrDatabase, msgErrNoInfo, msgSucces, msgErrMissInfo } = require('../../constants');
const tourModel = require('../../models/tour.model');

// ------ get giá và check vé đủ k và trừ vé có sẵn của tour  -------
// ------ nếu tour off không thể đặt ---------
const getPrice = async (tourId, numberTicket) => {
    const tour = await tourModel.findById(tourId)
        .catch(err => { return { status: false, ...msgErrDatabase } })
    if (!tour)
        return { status: false, ...msgErrNoInfo }
    if (tour.active == false)
        return { status: false, Message: 'Tour tạm dừng phục vụ' }
    if (tour.avaiableTour < numberTicket)
        return { status: false, Message: 'Đã hết vé' }
    const tourUpdate = await tourModel.findByIdAndUpdate(tourId, { avaiableTour: tour.avaiableTour - numberTicket })
        .catch(err => { return { status: false, ...msgErrDatabase } })
    if (!tourUpdate)
        return { status: false, ...msgErrNoInfo }
    return { status: true, price: tour.price * (1 - tour.saleOff / 100) }
}

const addBooking = async (req, res) => {
    //  ------ check dữ liệu đầu vào ------
    const { tourId, numberTicket, phoneNumber, address, timeStart, timeOut } = req.body
    const id = req.id
    if (!tourId || !numberTicket || !phoneNumber || !address || !timeStart || !timeOut)
        return res.status(400).send({ ...msgErrMissInfo })

    // ---------- lấy giá của tour, check vé còn --------
    const checkTicket = await getPrice(tourId, numberTicket)
    if (checkTicket.status === false)
        return res.status(400).send({ Message: checkTicket.Message })
    const price = checkTicket.price
    // ---- them booking ------------
    const newBooking = new bookingModel({ userId: id, tourId, phoneNumber, timeOut, timeStart, address, numberTicket: numberTicket * 1, price })
    newBooking.save()
        .then(booking => {
            res.status(200).send({ ...msgSucces, booking })
        })
        .catch(err => {
            res.status(500).send({ ...msgErrDatabase, err })
        })

}

module.exports = {
    addBooking
};
