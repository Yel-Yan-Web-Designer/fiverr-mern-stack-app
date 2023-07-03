const express = require('express');
const getConversation = require('../controllers/conversation.controller')
const router = express.Router();

router.get("/", getConversation)

module.exports = router;