const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    gigId : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }, 
    title : {
        type : String,
        required : true
    }, 
    price : {
        type : Number,
        default : 0
    }, 
    sellerId : {
        type : String,
        required : true
    },
    buyerId : {
        type : String,
        required : true
    },
    isCompleted : {
        type : Boolean,
        default : false
    },
    payment_intent : {
        type : string,
        required : true
    }
}, {timestamps : true});

module.exports = mongoose.model('Order', OrderSchema);

/*
- isCompleted is for when a user hit continue button, we will create order but 
it's not going to be completed.
- After a proper payment,After the correct card information credit card information
isCompleted will true
- I will use stripe for that
*/
