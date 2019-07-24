const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  description: { type: String, unique: true },
  dueDate: { type: String, unique: true },
});

userSchema.plugin(uniqueValidator);

userSchema.method({});

userSchema.static({});

module.exports = mongoose.model('User', userSchema);
