const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ninjas');
module.exports = mongoose;