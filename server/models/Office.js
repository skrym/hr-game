const mongoose = require('mongoose')
const {
  randomInt
} = require('../utils/random')

const OfficeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  aura: {
    type: Number,
    min: 1,
    max: 100,
    default: () => randomInt(1, 100)
  },
  rate: {
    type: Number,
    default: 0
  },
  rent: {
    type: Number,
    default: () => randomInt(20, 50)
  },
  deletedAt: {
    type: Date
  }
}, {
  timestamps: {},
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

OfficeSchema.virtual('workers', {
  ref: 'Worker',
  localField: '_id',
  foreignField: 'officeId',
  justOne: false
})

module.exports = mongoose.model('Office', OfficeSchema)
