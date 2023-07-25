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
        // find user's requested gig is exist or not
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
const getGigs = async (req, res, next) => {
    const query = req.query;
    const filters = {
        ...(query.category && {
            category : {$regex : query.category, $options : "i"}
        }),
        ...(query.search && {
            title : {$regex : query.search , $options : "i"}
        })
    }   
    try {
        // find all existed gigs
        const gigs = await Gig.find(filters);
        return res.status(200).json(gigs);
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createGig,
    deleteGig,
    getSingleGig,
    getGigs
};   