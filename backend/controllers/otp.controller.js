/*Author: Sumit Kumar B00904097*/
const Verification = require('../models/otp.model');
const Utility = require('../utils/utility');
const Notification = require('../utils/EmailHelper');
const User = require('../models/user.model');

const createVerification = async (request, response) => {
    const { email } = request.body;
    try {
        User.findOne({ email }).then(user => {
            if (!user) {
                return response.status(404).send({message: 'User not found'});
            }
            const now = new Date();
            const expiry = new Date(now.getTime() + 60 * 60 * 1000);
            const otp = Utility.generateOTP();

            const verification = new Verification({ userid: user._id, email: email, otp: otp, expdate: expiry});
            verification.save().then(data => {
                Notification.sendEmailNotification(email, "Password Change Request", "otp", {otp: otp, name: user.firstname + ' ' + user.lastname})
                response.status(201).json({message: "OTP Mailed Successfully"});
            }).catch(err => {
                response.status(500).send({message: "Server error : " + err});
            });
        }).catch(err => {
            console.log(err);
            response.status(500).send({message: "Server error : " + err});
        });
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
};

const getVerifications = async (request, response) => {
    try {
        const verifications = await Verification.find();
        response.json(verifications);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const getVerificationById = async (request, response) => {
    const { id } = request.params;

    try {
        const verification = await Verification.findById(id);
        if (!verification) {
            return response.status(404).json({ message: 'Verification not found' });
        }
        response.json(verification);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const deleteVerification = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedVerification = await Verification.findByIdAndDelete(id);
    if (!deletedVerification) {
      return response.status(404).json({ message: "Verification not found" });
    }
    response.json(deletedVerification);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const updateVerification = async (request, response) => {
  const { id } = request.params;
  const updates = {
    userid: request.body.userid,
    email: request.body.email, 
    otp: request.body.otp, 
    expdate: request.body.expdate
  };

  try {
    const verification = await Verification.findByIdAndUpdate(id, updates, { new: true });
    if (!verification) {
      return response.status(404).json({ message: "Verification not found" });
    }
    response.json(verification);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

module.exports = {
    createVerification,
    getVerifications,
    getVerificationById,
    deleteVerification,
    updateVerification
};