const userModel = require('../../models/user.model')
const bcrypt = require('bcrypt')
const fs = require('fs/promises');
const { msgErrMissInfo, msgSuccesUpdate, msgErrDatabase, msgErrNoInfo, msgErrMissImg, msgErrEmailValidate, msgErrEmailAvai } = require('../../constants')
const infoCompanyModel = require('../../models/infoCompany.model');
const path = require('path');

// ------- reemove image ------
const removeImg = async (file) => {
    if (file)
        try {
            await fs.rm(path.join(__dirname, '../../uploads/avatar/', file.filename))
        } catch (err) {
            console.log(err);
        }
}

// ----- update ----------
const update = async (req, res) => {
    // -------- get avatar ---------
    const id = req.id
    const user = await userModel.findById(id)
    if (!user)
        return res.status(400).send(msgErrNoInfo)
    let avatar = user.avatar

    // ---- lấy thông tin từ req ------
    const { username, email, password, phoneNumber, address } = req.body
    if (!username || !email || !password || !avatar || !phoneNumber || !address) {
        removeImg(req.file)
        return res.status(400).send(msgErrMissInfo)
    }

    // ------- check email --------
    const check = /\S+@\S+\.\S+/
    if (!check.test(email)) {
        removeImg(req.file)
        return res.status(400).send(msgErrEmailValidate)
    }

    try {
        //  ------- check email tồn tịa chưa --------
        const findUser = await userModel.findOne({ email, _id: { $ne: id } })
        if (findUser) {
            removeImg(req.file)
            return res.status(400).send(msgErrEmailAvai)
        }

        // ------- update company -----------
        const hashPassword = await bcrypt.hash(password, 10)

        // ------- check admin update image? ---------
        if (req.file) {
            try {
                await fs.rm(path.join(__dirname, '../../uploads/avatar/', avatar))
            } catch (err) {
                console.log(err);
            }
            // --------- gắn tên ảnh vào avatar ----------
            avatar = req.file.filename
        }
        const company = await userModel.findByIdAndUpdate(id, { username, email, password: hashPassword, avatar, phoneNumber }, { new: true })
        if (!company) {
            removeImg(req.file)
            return res.status(204).send(msgErrNoInfo)
        }


        // ---------- update info ---------
        const info = await infoCompanyModel.findOneAndUpdate({ userId: id }, { address }, { new: true })
        if (!info) {
            removeImg(req.file)
            return res.status(204).send(msgErrNoInfo)
        }

        res.status(200).send({ ...msgSuccesUpdate, company })

    } catch (err) {
        removeImg(req.file)
        res.status(500).send({ ...msgErrDatabase, err })

    }
}

module.exports = { update }