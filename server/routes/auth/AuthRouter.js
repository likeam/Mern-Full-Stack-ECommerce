const express = require("express");
const {registerUser} = require('../../controllers/auth/AuthController');
    

const router = express.Router();


router.post('/register', registerUser);



// Importing controllers


module.exports = router;