const { msgErrDatabase, msgErrNoInfo, msgSucces } = require("../../constants");
const tourModel = require("../../models/tour.model");

const getTourUpdate = async (req, res) => {
    const tourId = req.body.tourId
    try {
        const tour = await tourModel.findById(tourId)
        if (!tour)
            return res.status(204).send({ ...msgErrNoInfo })

        res.status(200).send({ ...msgSucces, tour })
    } catch (err) {
        res.status(500).send({ ...msgErrDatabase, err })

    }


}
module.exports = {
    getTourUpdate
};
