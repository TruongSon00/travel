const userModel = require('../../models/user.model')
const bcrypt = require('bcrypt')
const { msgErrDatabase, msgErrMissInfo, msgErrEmailValidate, msgErrEmailAvai, msgSuccesAdd } = require('../../constants');

// ----- Register ----------

const register = async (req, res) => {



    //-------- lấy thông tin từ req --------
    const { username, email, password, phoneNumber } = req.body
    if (!username || !email || !password || !phoneNumber) {
        return res.status(400).send(msgErrMissInfo)
    }
    const check = /\S+@\S+\.\S+/
    if (!check.test(email)) {
        return res.status(400).send(msgErrEmailValidate)
    }
    // --------- kiểm tra email tồn tại chưa ---------
    try {
        const findUser = await userModel.findOne({ email })
        if (findUser) {
            return res.status(400).send(msgErrEmailAvai)
        }

        // ------tạo user -------
        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new userModel({ username, email, password: hashPassword, avatar: 'person.png', phoneNumber })
        await newUser.save()
        res.status(200).send(msgSuccesAdd)


    } catch (err) {
        res.status(500).send({ ...msgErrDatabase, err })

    }
}

module.exports = { register }