const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// ROUTES
const Routes = require('./routes/routes')
const nerdRoutes = require('./routes/nerds')
const userRoutes = require('./routes/users')


const db = require('./config/db')

// PORT
// const port = process.env.PORT || 3000
const port = 3003

// CONNECT DATABASE
mongoose.connect(db.url, (err) => {
    err ? console.log(err) : console.log('Connected database...')
})

app.use(bodyParser.json())

app.use(bodyParser.json({type: 'application/vnd.api+json'}))

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname + '/views'))

// routes
app.use('/', Routes)
app.use('/api/user', userRoutes)
app.use('/api/nerd', nerdRoutes)


app.listen(port)

console.log('Listen to port ' + port)

exports = module.exports = app
