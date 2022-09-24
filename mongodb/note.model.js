const mongoose = require(`mongoose`);

noteSchema = mongoose.Schema({
  title: String,
  desc: String,
  userId: mongoose.Schema.Types.ObjectId    
});

  

module.exports = mongoose.model(`note`,noteSchema)