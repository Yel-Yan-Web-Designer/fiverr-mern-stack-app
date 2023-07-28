const express = require('express');
const jwtVerify = require("../middleware/jwtVerify");
const {
    createGig,
    deleteGig,
    getSingleGig,
    getGigs
} = require('../controllers/gig.controller')
const router = express.Router();

router.post("/", jwtVerify ,createGig);
router.delete("/:id", jwtVerify , deleteGig);
router.get("/single/:id", getSingleGig);
router.get("/" , getGigs);

module.exports = router;