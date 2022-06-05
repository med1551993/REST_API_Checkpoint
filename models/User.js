const mongoose = require('mongoose')
const schema = mongoose.Schema;

const userSchema = new schema({
   name:  {type: String, required:true},
   email: {type: String, required:true, unique:true},
   phone: {type: Number, required:true, unique:true},
  });

const User = mongoose.model('User', userSchema);

module.exports = User;