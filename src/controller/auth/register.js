const userModel = require('../../models/user.model')
const infoCompanyModel = require('../../models/infoCompany.model')
const bcrypt = require('bcrypt')
const fs = require('fs/promises');
const { msgErrDatabase, msgSuccesAdd, msgErrMissImg, msgErrMissInfo, msgErrEmailValidate, msgErrEmailAvai } = require('../../constants');
const path = require('path');

// ------- reemove image ------
const removeImg = (file) => {
    try {
        fs.rm(path.join(__dirname, '../../uploads/avatar/', file.filename))
    } catch (err) {
        console.log(err);
    }
}

// ----- Register ----------

const register = async (req, res) => {
    // -------- check file ảnh upload ---------
    if (!req.file)
        return res.status(400).send(msgErrMissImg)
    // -------- gắn tên ảnh vào avatar ---------
    const avatar = req.file.filename

    // ---- lấy thông tin từ req ------
    const { username, email, password, address, phoneNumber } = req.body
    if (!username || !email || !password || !address || !phoneNumber || !avatar) {
        removeImg(req.file)
        return res.status(400).send(msgErrMissInfo)
    }

    // ---------- check email -------
    const check = /\S+@\S+\.\S+/
    if (!check.test(email)) {
        removeImg(req.file)
        return res.status(400).send(msgErrEmailValidate)
    }
    try {
        // --------- check email tồn tại chưa --------
        const findUser = await userModel.findOne({ email })
        if (findUser) {
            removeImg(req.file)
            return res.status(400).send(msgErrEmailAvai)
        }

        // --------- thêm mới company ---------
        const hashPassword = await bcrypt.hash(password, 10)
        const newCompany = new userModel({ username, email, avatar, phoneNumber, password: hashPassword, role: 2 })
        await newCompany.save()
            return res.status(400).send(msgSuccesAdd)

    } catch (err) {
        removeImg(req.file)
        res.status(500).send({ ...msgErrDatabase, err })

    }


}

module.exports = {register}



