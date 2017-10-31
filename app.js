const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// ROUTES
const Routes = require('./routes/routes')
const nerdRoutes = require('./routes/nerds')
const userRoutes = require('./routes/users')

const db = require('./config/db')

// PORT
// const port = process.env.PORT || 3001
const port = 3001

// CONNECT DATABASE
mongoose.connect(db.url, {useMongoClient: true})
.then(() => console.log('Connected database ...'))
.catch(err => console.log(err))


app.use(bodyParser.json())
app.use(bodyParser.json({type: 'application/vnd.api+json'}))
app.use(bodyParser.urlencoded({extended: true}))

app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/views'))

// ROUTES
// require('./app/routes')(app)
app.use('/', Routes)
app.use('/api/user', userRoutes)
app.use('/api/nerd', nerdRoutes)


app.listen(port)

console.log('Listen to port ' + port)

exports = module.exports = app
