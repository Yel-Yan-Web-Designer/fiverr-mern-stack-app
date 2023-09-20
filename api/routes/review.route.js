const express = require('express');
const router = express.Router();
const {
    createReviews,
    getReviews,
    deleteReviews
} = require('../controllers/review.controller');
const jwtVerify = require("../middleware/jwtVerify");

router.post("/" , jwtVerify , createReviews);
router.get("/:gigId", getReviews);
router.delete("/:id", deleteReviews);

module.exports = router;