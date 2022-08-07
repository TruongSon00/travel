const auth = require('./auth')
const feedback = require('./feedback')
const home = require('../controller-admin/multiple/home')
const { tour } = require('./tour')
const { user } = require('./user')
const admin = require('express')()

admin.use('/', home)
admin.use('/', auth)
admin.use('/tour', tour)
admin.use('/user', user)
admin.use('/feedback', feedback)


module.exports = admin