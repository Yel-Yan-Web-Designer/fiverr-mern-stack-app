const express = require('express');
const getGigs = require('../controllers/gig.controller')
const router = express.Router();

router.get("/", getGigs)

module.exports = router;