const Gig = require("../models/gig.model");
const {createErrors} = require("../errors/handleErrors");

const createGig = async (req, res, next) => {
    try {
        // check user is seller or not
        if(!req.isSeller) return next(createErrors(403 , "Only sellers can create gigs!"));


        // if user is seller create new gig
        const newGig = await Gig.create({
            ...req.body,
            // this req.userId comes from cookies while user login
            userId : req.userId 
        });
        return res.status(201).json(newGig);
    } catch (err) {
        return next(err);
    }
}
const deleteGig = async (req, res, next) => {
   try {
    // check it is owner of the gig or not
    // if not owner show err
    if(req.params.id !== req.userId) return next(createErrors(403, "You can delete only you gig!"));


    //if it's owner can delete it
    await Gig.findByIdAndDelete(req.params.id);
    return res.status(200).send("Gig has been deleted!");
   } catch (err) {
    next(err);
   }
}
const getSingleGig = async (req, res, next) => {
    try {
        // get single gig by gig'id which is stored in db
        const gig = await Gig.findById(req.params.id);

        // if gig is not exised show error
        if(!gig) return next(createErrors(403, "Gig not found!"));
        return res.status(200).json(gig);
    } catch (err) {
        next(err);
    }
}
const getGigs = async (req, res, next) => {
    const q = req.query; // destructure query

//create filers object to store condition based on query parameter
    const filters = {
        // if userId exists in query, spread operator will add userId as filters object key and q.userId as value
        ...(q.userId && {userId : q.userId}),

        // if category exists in query, spread operator will add category as filters object key and q.category as value
        ...(q.category && {category : {
            $regex : q.category,
            $options : "i"
        }}),

        // if either min or max exists in query, spread operator will add price as filters object key
        ...((q.min || q.max) && {
            price : {
                //if both min or max exist, sperad operator will  $gt or $lt as key and q.min or q.max as value
                ...(q.min && {$gt : q.min}),
                ...(q.max && {$lt : q.max})
            }
        }),

        /* if search exist in query, spread operator will add title as filters key and to perform 
            a case-insensitive regular expression search on the 'title' field */
        ...(q.search && {title : {
            $regex : q.search,
            $options : "i"
        }})
    }
    try {
        // after finding matching gigs using filters, sort method is chained to query how resulted should be sorted
        const gigs = await Gig.find(filters).sort({[q.sort] : 1});
        return res.status(200).json(gigs)
    } catch (err) {
        next(err);
    }
}
module.exports = {
    createGig,
    deleteGig,
    getSingleGig,
    getGigs
};   