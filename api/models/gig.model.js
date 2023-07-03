const mongoose = require('mongoose');

const GigSchema = new mongoose.Schema({
    userId : {
        type : String,
        requried : true
    },
    title : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        default : 0
    },
    cover : {
        type : String,
        required : true
    },
    images : {
        type : [String],
        required : false
    },
    totalStars : {
        type : Number,
        default : 0,
    },
    starNumbers : {
        type : Number,
        default : 0
    },
    shortTitle : {
        type : String,
        required : true
    },
    shortDesc : {
        type : String,
        requried : true
    }, 
    deliveryTime : {
        type : Number,
        default : 0
    },
    revisionTime : {
        type : Number,
        default : 0
    },
    features : {
        type : [String],
        required : false
    },
    sales : {
        type : Number,
        default : 0
    }
}, {timestamps : true});

module.exports = mongoose.model('Gig', GigSchema);
