const User = require("../models/user.model");
const { createErrors } = require("../errors/handleErrors");

const deleteUser = async (req, res, next) => {
   const user = await User.findById(req.params.id);
   
   if(req.userId !== user._id.toString()){
      return next(createErrors(403 , "You can only delete your account!"))
   }  
   await User.findOneAndDelete(req.params.id);
   return res.status(200).send("Deleted!")
}

const getUser = async (req, res) => {
   const user = await User.findById(req.params.id);
   return res.status(200).json(user);
}

const getAllUsers = async (req, res) => {
   const users = await User.find({});
   return res.status(200).json({ users })
}

module.exports ={deleteUser , getUser, getAllUsers};

