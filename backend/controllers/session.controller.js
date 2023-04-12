/*Author: Sumit Kumar B00904097*/
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const Verification=require('../models/otp.model')
const bcrypt = require('bcryptjs');

const login = async (request, response) => {
    const { email, password } = request.body;

    User.findOne({email}).then((user) => {
        if(!user) {
            return response.status(401).json({message: 'Invalid email or password'});
        }

        user.verifyPassword(password, (err, match) => {
            if(err || !match) {
                return response.status(401).json({message: 'Invalid email or password'});
            }
            const token = jwt.sign({ id: user._id, email: user.email }, process.env.APIKEY, { expiresIn: '30m' });
            return response.json({message: "OK", token: token, role: user.role, id: user._id});
        });
    }).catch((err) => {
        return response.status(500).json({ message: 'Internal server error ' + err });
    });
};

const logout = async (request, response) => {
    response.clearCookie('jwt');
    response.status(200).json({message: "OK"});
};

const forgotpassword=async(request,response)=>{
    const{ email,password,OTP }=request.body
    const filter = { email: request.body.email};
    const userVerification=await Verification.findOne(filter)
    if(userVerification.otp===OTP){
        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        User.updateOne(email,hashedPassword)
        await Verification.deleteOne(filter)
        return response.status(200).json({message:"OK"})
    }
    else{
        return response.status(500).json({message:"wrong OTP"})
    }
};

module.exports = {
    login,
    logout,
    forgotpassword
};