const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {handleErrors} = require("../errors/handleErrors");

const register = async (req, res) => {
    try {
        const saltRounds = await bcrypt.genSalt();
        const hash = await bcrypt.hash(req.body.password, saltRounds);
        const newUser = await User.create({
            ...req.body,
            password : hash.toString()
        });
        const token = jwt.sign(
            {id : newUser._id , isSeller : newUser.isSeller},
            process.env.JWT_KEY
        )
        const {password , ...newUserInfo} = newUser._doc;
        res.cookie("accessToken", token , {httpOnly : true});
        return res.status(201).json({newUserInfo});
    } catch (error) {
        const errors = handleErrors(error);
        return res.status(400).json({ errors });
    }

}
const login = async (req, res) => {
    try {
        const user = await User.login(req.body.email, req.body.password);
        const token = jwt.sign(
            { id : user._id, isSeller : user.isSeller},
            process.env.JWT_KEY
        )
        const {password , ...userInfo} = user._doc;
        res.cookie("accessToken", token , {httpOnly : true});
        return res.status(200).json({ userInfo });
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }
}
const logout = (req, res) => {
   return res.clearCookie("accessToken", {
        sameSite : "none",
        secure : true
   }).status(200)
   .send("User has been logged out!");
}

module.exports = { register, login, logout };

/*
What is _doc in mongoose?
- _doc is private property avaiable on Schemas, Documents, & Models.

Why do we need _doc in mongoose?
- It is used to store actual data of the model, either the raw JSON from schema, or a compiled version of schema for Models

What is the purpose of _doc?
- The primary purpose of _doc is to provide a way to serialize & deserialize mongoose documents, although it may be useful in other situations as well.

- Mongoose returns data inside _doc object.
- Mongoose will return all the data into doc property and this doc property contains all the fileds of a schema.
- To access data from the doc simply call _doc.filename
*/