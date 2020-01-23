const asyncHandler = require('../middleware/asyncHandler')
const errorResponse = require('../utils/errorResponse')
const Office = require('../models/Office')


exports.getOffices = asyncHandler(async (req, res, next) => {
  const offices = await Office.find().populate('userId').populate('workers') //TODO: should find only user's offices
  res.status(200).json({
    success: true,
    data: offices
  })
})

exports.createOffices = asyncHandler(async (req, res, next) => {
  const office = await Office.create(req.body)
  res.status(200).json({
    success: true,
    data: office
  })
})
