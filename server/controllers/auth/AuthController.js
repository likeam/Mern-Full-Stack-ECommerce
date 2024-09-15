const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

//register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (checkUser)
      return res.json({
        success: false,
        message: "User Already exists with the same email! Please try again",
      });

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};


    //login

    const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const checkUser = await User.findOne({  email })
        if(!checkUser) return res.json({ 
          success: false,
          message: "User not found with this email",
        })
        const isMatch = await bcrypt.compare(password, checkUser.password)
        if(!isMatch) return res.json({ 
          success: false,
          message: "Incorrect Password",
        })
        const token = jwt.sign({
          id: checkUser._id, role: checkUser.role, email: checkUser.email       }, 'CLIENT_SECRET_KEY', {expiresIn : '60m'})
          res.cookies('token', token, {httOnly: true, secure : false}).json({
            success: true,
            message: "Login Successful",
            token: token,
            user: {
              id: checkUser._id,
              userName: checkUser.userName,
              email: checkUser.email,
              role: checkUser.role
            }
          })

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

module.exports = { registerUser, loginUser };
