const { msgErrMissInfo, msgSuccesAdd, msgErrDatabase } = require('../../constants')
const tourModel = require('../../models/tour.model')
const fs = require('fs/promises');
const path = require('path');

// ------- reemove image ------
const removeImg = (thumbnail) => {
    try {
        fs.rm(path.join(__dirname, '../../uploads/thumbnail/', thumbnail))
    } catch (err) {
        console.log(err);
    }
}

// ------- add tour -------

const addTour = (req, res) => {
    // -------- check file ảnh upload ---------
    if (!req.file)
        return res.status(400).send({ Message: 'Vui long chọn ảnh' })
    // -------- gắn tên ảnh vào thumbnail ---------
    const thumbnail = req.file.filename
    // ---- lấy thông tin từ req ------
    const { id } = req
    const { title, city, region, time, dateStart,
        code, transport, introduction, service,
        program, price, avaiableTour, totalTour,
        saleOff } = req.body

    // ----- check info ---------
    if (!title || !city || !region || !time || !dateStart
        || !code || !transport || !introduction || !service
        || !program || !thumbnail || !price || !avaiableTour
        || !totalTour || !saleOff) {
        removeImg(thumbnail)
        return res.status(400).send(msgErrMissInfo)
    }
    // ------- tạo mới tuor ------------
    const newTour = new tourModel({
        userId: id, title, city, region, time, dateStart
        , code, transport, introduction, service,
        program: JSON.parse(program), thumbnail, price, avaiableTour, totalTour, saleOff
    })
    newTour.save()
        .then(tour => res.status(200).send({ ...msgSuccesAdd, tour }))
        .catch(err => {
            removeImg(thumbnail)
            res.status(500).send({ ...msgErrDatabase, err })
        })

}


module.exports = { addTour }