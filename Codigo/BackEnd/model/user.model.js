const mongoose = require('mongoose');
const {ObjectId} = require('mongoose');
//SE INSTALO EL MONGOOSE-TYPE-EMAIL
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;
const Task = require('./task.model');

//SCHEMA OF THE USER COLLECTION
const userSchema = new Schema({
    name: String,
    mail: String,
    password: String,
    profilePicture: Number,
    tasks: [{type: ObjectId, ref:Task }]
});

userSchema.methods.encryptPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users',userSchema);
