const mongoose = require('mongoose');
//SE INSTALO EL MONGOOSE-TYPE-EMAIL
require('mongoose-type-email');
const { Schema } = mongoose;

//SCHEMA OF THE USER COLLECTION
const userSchema = new Schema({
    name: String,
    mail: mongoose.SchemaTypes.Email,
    password: String,
    profilePicture: Number
});

module.exports = mongoose.model('users',userSchema);