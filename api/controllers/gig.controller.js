const Gig = require("../models/gig.model");
const {createErrors} = require("../errors/handleErrors");

const createGig = async (req, res, next) => {

    if(!req.isSeller){
        return next(createErrors(403, "Only sellers can create a gig!"))
    }
    const newGig = new Gig({
        ...req.body,
        userId : req.userId
    })
    try {
        const saveGig = await newGig.save();
        return res.status(201).json(saveGig)
    } catch (err) {
        return next(err)
    }
}
const deleteGig = async (req, res, next) => {
    try {
        // find requested gig is exist or not
        const gig = await Gig.findById(req.params.id);
        
        // check it's the owner of thier gig or not
        if(gig.userId !== req.userId){
            return next(createErrors(403 , "You can delete only your gig!"))
        }

        // if it's owner of the gig, user can delete it
        const deleteGig = await Gig.findByIdAndDelete(req.params.id)
        return res.status(200).json("Gig has been deleted!");
    } catch (err) {
        return next(err);
    }
}
const getSingleGig = async (req, res, next) => {
    try {
        // find gig is already existed or not
        const singleGig = await Gig.findById(req.params.id);
        
        // if not exist show not found gig
        if(!singleGig) return next(createErrors(404, "Gig not found!"))

        // else show the existed gig
        return res.status(200).json(singleGig);
    } catch (err) {
        next(err);
    }
}
const getGigs = (req, res) => {
    console.log(req.body.userId);
    return res.send("get gigs");
}

module.exports = {
    createGig,
    deleteGig,
    getSingleGig,
    getGigs
};   