const { msgSuccesUpdate, msgErrNoInfo, msgErrDatabase, msgErrMissInfo, msgErrNoPermission } = require('../../constants')
const tourModel = require('../../models/tour.model')
const fs = require('fs/promises');
const path = require('path');

// ------- reemove image ------
const removeImg = async (file) => {
    if (file)
        try {
            await fs.rm(path.join(__dirname, '../../uploads/thumbnail/', file.filename))
        } catch (err) {
            console.log(err);
        }
}

// ------- add tour -------
const updateTour = async (req, res) => {
    // ---- lấy thông tin từ req ------
    const id = req.id
    const { tourId, title, city, region, time, dateStart,
        code, transport, introduction, service, program,
        price, avaiableTour, totalTour, saleOff, category, accompanyingService, introcontent } = req.body

    // -------- get thumbnail ---------
    const tour = await tourModel.findById(tourId)
    if (!tour) {
        removeImg(req.file)
        return res.status(400).send(msgErrNoInfo)
    }
    let thumbnail = tour.thumbnail
    const userId = tour.userId


    // ------- check info --------
    if (!tourId || !title || !city || !region || !time || !dateStart
        || !code || !transport || !introduction || !service || !program
        || !price || !avaiableTour || !totalTour || !saleOff ||
        !category|| !accompanyingService|| !introcontent|| !thumbnail) {
        removeImg(req.file)
        return res.status(400).send({ ...msgErrMissInfo })
    }

    // ------- check tour update image? ---------
    if (req.file) {
        try {
            await fs.rm(path.join(__dirname, '../../uploads/thumbnail/', thumbnail))
        } catch (err) {
            console.log(err);
        }
        // --------- gắn tên ảnh vào thumbnail ----------
        thumbnail = req.file.filename
    }
    // -------- update với userid === companyId ------
    tourModel.findOneAndUpdate({ _id: tourId, userId: id },
        {
            title, city, region, time, dateStart,
            code, transport, introduction, service, program: JSON.parse(program),
            thumbnail, price, avaiableTour, totalTour, saleOff,
            category, accompanyingService, introcontent, thumbnail
        },
        { new: true },
        (err, tour) => {
            if (err) {
                removeImg(req.file)
                return res.status(500).send({ ...msgErrDatabase, err })
            }
            else if (!tour) {
                removeImg(req.file)
                res.status(204).send({ ...msgErrNoInfo })
            }
            else
                res.status(200).send({ ...msgSuccesUpdate, tour })
        })


}


module.exports = { updateTour }