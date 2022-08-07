const tour = require('express')()
const { search } = require('../controller-company/tour/search')
const { tourDetail } = require('../controller/tour/tourDetail')
const { addTour } = require('../controller-company/tour/add')
const { verifyCompany } = require('../verify')
const { updateTour } = require('../controller-company/tour/update')
const { uploadThumbnail } = require('../uploads/uploadImage')
const { changeActive } = require('../controller-company/tour/changeActive')
const { delTour } = require('../controller-company/tour/del')


tour.post('/add', verifyCompany, uploadThumbnail, addTour)
tour.put('/update', verifyCompany, uploadThumbnail, updateTour)
tour.put('/changeactive', verifyCompany, changeActive)
tour.put('/del', verifyCompany, delTour)
tour.get('/search', verifyCompany, search)
tour.get('/show/:id', tourDetail)

module.exports = tour