const tour = require('express')()
const { search } = require('../controller/tour/search')
const show = require('../controller/tour/show')
const { tourDetail } = require('../controller/tour/tourDetail')
const { rating } = require('../controller/tour/rate')
const { verify } = require('../verify');
const { bestSeller } = require('../controller/tour/bestSeller')
const { showCompany } = require('../controller/tour/showCompanyDetail')

tour.get('/search', search)
tour.get('/show/:id', tourDetail)
tour.get('/show', show)

// --- show company detail -----------
tour.get('/showCompany/:companyId', showCompany)
tour.get('/bestseller', bestSeller)
tour.post('/rate', verify, rating)

module.exports = tour