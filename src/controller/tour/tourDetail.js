const { msgErrShow, msgSucces, msgErrDatabase, msgErrNoInfo } = require('../../constants');
const mongoose = require("mongoose");
const tourModel = require('../../models/tour.model');
const feedbackModel = require('../../models/feedback.model');
const { showTourDetail } = require('../../commonFunc');

const tourDetail = async (req, res) => {
    const id = req.params.id
    const { tourPre, feedbackPrepare } = showTourDetail(id)

    try {
        // ------ show tour detail ------
        const tour = await tourPre.exec()
        if (!tour[0])
            return res.status(204).send({ ...msgErrNoInfo })

        // ------ show feedback detail ------
        const feedback = await feedbackPrepare.exec()
        res.status(200).send({ ...msgSucces, tour, feedback })
    } catch (err) {
        res.status(500).send({ ...msgErrDatabase, err })

    }
}

module.exports = {
    tourDetail
};
