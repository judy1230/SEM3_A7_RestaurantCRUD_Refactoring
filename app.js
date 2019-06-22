const express = require('express')
const app = express()
//載入mongoose
const mongoose = require('mongoose')
const Restaurant = require('./models/restaurant.js')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')




//連線到mongoDB
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true})
//mongoose 連線後透過mongoose.connection拿到 connection的物件
const db = mongoose.connection

//連線成功
db.on('error', () => {
	console.log('mongodb error!')
})

//連線成功
db.once('open', () => {
	console.log('mongodb connected!')
})

//express template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// setting static files
app.use(express.static('public'))
app.use('/', require('./routers/home.js'))
app.use('/restaurants', require('./routers/restaurants.js'))

//設定express port 3000
app.listen(3000, () => {
	console.log('App is running!')
})