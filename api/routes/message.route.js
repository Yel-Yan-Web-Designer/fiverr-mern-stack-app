const express = require('express');
const getMessages = require('../controllers/message.controller.js')
const router = express.Router();

router.get("/", getMessages);

module.exports = router;