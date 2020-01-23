const mongoose = require('mongoose')
const {
  randomInt,
  randomName
} = require('../utils/random')


const WorkerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  officeId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Office'
  },
  workerName: {
    type: String,
    default: () => randomName()
  },
  aura: {
    type: Number,
    min: 1,
    max: 100,
    default: () => randomInt(1, 100)
  },
  experience: {
    type: Number,
    min: 1,
    max: 100,
    default: () => randomInt(1, 20)
  },
  growthRate: {
    type: Number,
    min: 100,
    max: 200,
    default: () => randomInt(100, 200),
    select: false
  },
  status: {
    type: String,
    default: 'created',
    enum: ['created', 'free', 'work']
  },
  deletedAt: {
    type: Date
  }
}, {
  timestamps: {
    select: false
  }
})

WorkerSchema.statics.recalcOfficeRate = function (worker) {
  console.log(worker)
}

// WorkerSchema.pre('save', function (next) {
//   this.constructor.recalcOfficeRate(this)
//   next()
// })

// WorkerSchema.post('save', function (next) {
//   this.constructor.recalcOfficeRate(this)
//   // next()
// })

module.exports = mongoose.model('Worker', WorkerSchema)
