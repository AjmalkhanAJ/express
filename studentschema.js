const mongoose = require('mongoose');
const studentschema = new mongoose.schema({
    name:String,
    age:Number,
    mark:Number,
});

module.exports = mongoose.model('student',StudentSchema);