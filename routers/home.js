const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant.js')

// restaurant 首頁
router.get('/', (req, res) => {
	Restaurant.find().sort({ name: 'asc' })
		.exec((err, restaurants) => {
			if (err) return console.error(err)
			return res.render('index', { restaurants: restaurants })
		})
})
router.get('/search', (req, res) => {
	Restaurant.find((err, restaurants) => {
		const keyword = req.query.keyword
		if (err) return console.error(err)
		const restaurantSearch = restaurants.filter(({ name, category }) => {
			// return (name || category) includes keyword
			return (category.toLowerCase().includes(keyword.toLowerCase()) || name.toLowerCase().includes(keyword.toLowerCase()))
		})
		return res.render('index', { restaurants: restaurantSearch })
	})
})

module.exports = router