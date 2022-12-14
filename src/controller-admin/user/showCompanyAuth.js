const { showCompany } = require('../../commonFunc');
const { msgSucces, msgErrNoInfo, msgErrDatabase } = require("../../constants");
const showCompanyAuth = async (req, res) => {
    const companyPre = showCompany({ info: { $elemMatch: { auth: true } } }, { createdAt: -1 })
    try {
        const companys = await companyPre.exec()
        if (companys[0])
            res.status(200).send({ ...msgSucces, companys })
        else
            res.status(204).send({ ...msgErrNoInfo })
    } catch (err) {
        res.status(500).send({ ...msgErrDatabase, err })

    }
}

module.exports = {
    showCompanyAuth
};
