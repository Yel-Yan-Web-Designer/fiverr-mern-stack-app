const express = require('express');
const {deleteUser , getUser, getAllUsers } = require("../controllers/user.controller");
const router = express.Router();

// For authentication
const jwtVerify = require("../middleware/jwtVerify");

router.delete("/:id", jwtVerify, deleteUser);
router.get("/:id", getUser);
router.get("/", getAllUsers);

module.exports = router;
