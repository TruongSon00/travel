const { login } = require('../controller/auth/login')
const { register } = require('../controller/auth/register')
const { update } = require('../controller/auth/update')
const { getUser } = require('../controller/auth/getUser')
const { uploadAvatar } = require('../uploads/uploadImage')
const { verifyUser } = require('../verify')

const auth = require('express')()



auth.post('/login', login)
auth.post('/register', register)
auth.put('/update', verifyUser, uploadAvatar, update)
auth.get('/show', verifyUser, getUser)

module.exports = auth