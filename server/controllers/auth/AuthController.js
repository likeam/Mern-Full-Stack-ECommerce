const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User.js');

//register

const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        const hashPassword = await bcrypt.hash(password, 12);
        const newUSer = new User({ userName, email, password: hashPassword });
        await newUSer.save();
        res.status(200).json({
        sucess: true,
        message: "Registered successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
        sucess: false,
        message: "Some Error occured",
        });
    }
    };

    //login

    const login = async (req, res) => {
    const { email, password } = req.body;

    try {
    } catch (error) {
        console.log(error);
        res.status(500).json({
        sucess: false,
        message: "Some Error occured",
        });
    }
};

//logout

//auth middlawarer

module.exports = { registerUser };
