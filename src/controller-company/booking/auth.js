const { default: mongoose } = require('mongoose');
const { msgErrNoInfo, msgErrNoPermission, msgSuccesUpdate, msgErrDatabase } = require('../../constants');
const bookingModel = require('../../models/booking.model');
const ObjectId = mongoose.Types.ObjectId

const authBooking = async (req, res) => {
    const bookingId = req.params.bookingId
    const id = req.id
    const authPre = bookingModel.aggregate([
        { $match: { _id: new ObjectId(bookingId) } },
        {
            $lookup: {
                from: 'tours',
                localField: 'tourId',
                foreignField: '_id',
                as: 'tour',

                pipeline: [
                    { $project: { userId: 1 } },
                    {
                        $lookup: {
                            from: 'users',
                            localField: 'userId',
                            foreignField: '_id',
                            as: 'company',
                            pipeline: [
                                { $project: { _id: 1 } }
                            ]
                        }
                    }
                ]
            }
        }
    ])

    try {
        const booking = await authPre.exec()
        if (!booking[0])
            return res.status(204).send(msgErrNoInfo)

        // --------- check permission -----------
        const companyId = booking[0].tour[0].company[0]._id
        if (companyId != id)
            return res.status(400).send(msgErrNoPermission)

        // ------ auth booking -----------
        const bookingUpdate = await bookingModel.findByIdAndUpdate(bookingId, { auth: 1 })
        if (!bookingUpdate)
            return res.status(204).send(msgErrNoInfo)
        res.status(200).send(msgSuccesUpdate)

    } catch (err) {
        res.status(500).send({ ...msgErrDatabase, err })
    }
}

module.exports = {
    authBooking
};
