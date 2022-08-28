const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect(process.env.database_url)
        .then(() => console.log('========= connect successfully ========='))
        .catch((err) => console.log('--------- connect fail ---------' + err ))
}

module.exports = connect