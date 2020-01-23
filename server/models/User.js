const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'Please enter your Username'],
    minlength: [2, 'Username should be at least 2 characters'],
    maxlength: [16, 'Username cannot be more than 16 characters']
  },
  account: {
    type: Number,
    default: 1000,
    min: 0
  },
  status: {
    type: String,
    default: 'active',
    enum: ['active', 'blocked', 'deleted']
  },
  lastLoggedIn: {
    type: Date
  },
  spentTime: {
    type: Number,
    default: 0
  },
  deletedAt: {
    type: Date
  }
}, {
  timestamps: {},
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

UserSchema.virtual('offices', {
  ref: 'Office',
  localField: '_id',
  foreignField: 'userId',
  justOne: false
})

module.exports = mongoose.model('User', UserSchema)
