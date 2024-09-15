const express = require("express");
const { registerUser, loginUser } = require("../../controllers/auth/AuthController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);



// Importing controllers


module.exports = router;