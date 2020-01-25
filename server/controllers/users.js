const asyncHandler = require('../middleware/asyncHandler')
const errorResponse = require('../utils/errorResponse')
const User = require('../models/User')

// @router GET /api/v1/users
exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find({
    status: 'active'
  })
  res.status(200).json({
    success: true,
    data: users
  })
})

// @router GET /api/v1/users/:id
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({
    _id: req.params.id,
    status: 'active'
  }).populate({
    path: 'offices',
    select: ['aura', 'rate', 'rent'],
    populate: {
      path: 'workers',
      select: ['name', 'aura', 'experience']
    }
  })

  if (!user)
    return next(new errorResponse(`User with id ${req.params.id} not found`, 404))

  res.status(200).json({
    success: true,
    user: user
  })
})

// @router POST /api/v1/users
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body)
  res.status(201).json({
    success: true,
    data: user
  })
})

// @router PUT /api/v1/users/:id
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  if (!user)
    return next(new errorResponse(`User with id ${req.params.id} not found`, 404))

  res.status(200).json({
    success: true,
    data: user
  })
})

// @router DELETE /api/v1/users/:id
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, {
    status: 'deleted',
    deleted_at: Date.now()
  }, {
    runValidators: true
  })

  if (!user)
    return next(new errorResponse(`User with id ${req.params.id} not found`, 404))

  res.status(200).json({
    success: true,
    message: 'User have been deleted'
  })
})