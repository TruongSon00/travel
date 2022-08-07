const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
require('dotenv').config({ path: __dirname + '/.env' })
const db = require('./config/connect')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
app.use(express.static(__dirname + '/uploads'));
const router = require('./routers')
const routerAdmin = require('./routers-admin')
const routerCompany = require('./routers-company')
const path = require('path');

db()
app.use(cookieParser())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/uploads'))
app.use('/api', router)
app.use('/api/admin', routerAdmin)
app.use('/api/company', routerCompany)


if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'))
    })
}



// ----------- socket -------------
const server = http.createServer(app)
const { Server } = require('socket.io')

const socketIO = new Server(server, {
    cors: { origin: '*' }
})

socketIO.on('connection', client => {
    console.log('cleint connect succesfully ' + client.id)
})

server.listen(PORT, () => console.log('Server listening at http://localhost:' + PORT))