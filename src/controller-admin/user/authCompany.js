const { msgErrDatabase, msgSucces, msgSuccesUpdate, msgErrNoInfo } = require("../../constants");
const infoCompanyModel = require("../../models/infoCompany.model");

const authcompany = (req, res) => {
    const { userId } = req.body
    infoCompanyModel.findOneAndUpdate({ userId }, { auth: true }, { new: true }, (err, info) => {
        if (err)
            res.status(500).send({ ...msgErrDatabase })
        else if (info)
            res.status(200).send({ ...msgSuccesUpdate, info })
        else
            res.status(204).send({ ...msgErrNoInfo })
    })
}

module.exports = {
    authcompany
};
