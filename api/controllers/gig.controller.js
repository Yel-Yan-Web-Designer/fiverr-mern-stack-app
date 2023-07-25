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
        const gig = await Gig.findById(req.params.id);
        
        // check it's the owner of thier gig or not
        if(gig.userId !== req.userId){
            return next(createErrors(403 , "You can delete only your gig!"))
        }

        const deleteGig = await Gig.findByIdAndDelete(req.params.id)
        return res.json(deleteGig);
    } catch (err) {
        return next(err);
    }
}
const getSingleGig = (req, res) => {
    return res.send("get single gig");
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