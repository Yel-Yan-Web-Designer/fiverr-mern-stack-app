const mongoose = require('mongoose');
const { isEmail } = require("validator");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required: [true, 'You must provide name'],
        maxlength: [20, 'name cannot be more than 20 characters'],
        unique : true, // username must be unique else we will get duplicate key error
    },
    email : {
        type : String,
        required: [true, 'You must provide email'],
        unique : true,
        trim : true,
        lowercase : true,
        validate : [isEmail, "Please enter a valid email"],
    },
    password : {
        type : String,
        required : true,
        minlength : [6, "Minimum password length is 6 characters"],
        trim : true
    },
    img : {
        type : String,
        required : false
    },
    country : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : false
    },
    desc : {
        type : String,
        required : false
    },
    isSeller : {
        type : Boolean,
        default : false
    },
}, {timestamps : true});

// statics method to login user
UserSchema.statics.login = async function (email , password) {
    const user = await this.findOne({ email });
    if(user){
        const checkPassword = await bcrypt.compare(password , user.password);
        
        if(checkPassword){
            return user
        }
        throw new Error ("Incorrect password")
    }
    throw new Error ("Incorrect email");
}

module.exports = mongoose.model('User', UserSchema);
