const Review = require("../models/review.model");
const Gig = require("../models/gig.model");
const {createErrors} = require("../errors/handleErrors");

const createReviews = async (req, res, next) => {
    // check user is seller or not
    if(req.isSeller) return next(createErrors(403 , "Seller cannot review for yourself!"))

    // if not seller create review
    const newReview = new Review ({
        userId : req.userId,
        gigId : req.body.gigId,
        star : req.body.star,
        desc : req.body.desc
    })

    try {
        //check user already created review for same gig or not
       const checkReview =  await Review.findOne({
            userId : req.userId,
            gigId : req.body.gigId
        })

        // if user already reviewed show err
        if(checkReview) return next(createErrors(403 , "You already reviewed for this gig!"));

        // make a star rating system which is stored in gig db so find the gigid and update total stars & star numbers
        await Gig.findByIdAndUpdate(req.body.gigId , {
            $inc : {totalStars : req.body.star , starNumbers : 1}
        })

        //save new review to db
        const savedReview = await newReview.save();
        return res.status(201).json(savedReview);
    } catch (err) {
        next(err);
    }
}
const getReviews = async (req, res , next) => {
    try{
        const allReviews = await Review.find({
            gigId : req.params.gigId
        })

        res.status(200).json(allReviews);
    } catch (err) {
        next(err);
    }
}
const deleteReviews = (req, res) => {
    return res.send("delete reviews")
}

module.exports = {
    createReviews,
    getReviews,
    deleteReviews
};