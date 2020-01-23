const asyncHandler = require('../middleware/asyncHandler')
const errorResponse = require('../utils/errorResponse')
const Worker = require('../models/Worker')


exports.getWorkers = asyncHandler(async (req, res, next) => {
  const workers = await Worker.find()
  res.status(200).json({
    success: true,
    data: workers
  })
})

exports.createWorker = asyncHandler(async (req, res, next) => {
  const workers = await Worker.create(req.body)
  res.status(200).json({
    success: true,
    data: workers
  })
})

exports.updateWorker = asyncHandler(async ({
  params,
  body
}, res, next) => {
  const worker = await Worker.findById(params.id)

  if (!worker)
    return next(new errorResponse(`Worker with id ${req.params.id} not found`, 404))

  worker.officeId = body.officeId
  worker.aura = body.aura
  await worker.save()

  res.status(200).json({
    success: true,
    data: worker
  })
})
