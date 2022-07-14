const { Schema, model } = require('mongoose');
const dateFormat = require ('../utils/dateFormat');

const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal)
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thoughts'
    }
  ],
  friends: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
  ]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

UserSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.reduce((total, comment) => total + thoughts.thoughts.length + 1, 0);
});

const User = model('User', UserSchema);

module.exports = User;
