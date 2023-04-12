/*Author: Sumit Kumar B00904097*/
const PaymentMethods = require('../models/paymentmethods.model');

const createPaymentMethods = async (request, response) => {
    const { userid, name, cardnumber, expirydate, cvv, postalcode } = request.body;

    const paymentMethods = new PaymentMethods({ userid, name, cardnumber, expirydate, cvv, postalcode });
    try {
        await paymentMethods.save();
        response.status(201).json(paymentMethods);
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
};

const getPaymentMethodss = async (request, response) => {
    try {
        const paymentMethods = await PaymentMethods.find();
        response.json(paymentMethods);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const getPaymentMethodsById = async (request, response) => {
    const { id } = request.params;

    try {
        const paymentMethods = await PaymentMethods.findById(id);
        if (!paymentMethods) {
            return response.status(404).json({ message: 'PaymentMethods not found' });
        }
        response.json(paymentMethods);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const deletePaymentMethods = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedpaymentMethods = await PaymentMethods.findByIdAndDelete(id);
    if (!deletedpaymentMethods) {
      return response.status(404).json({ message: "PaymentMethods not found" });
    }
    response.json(deletedpaymentMethods);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const updatePaymentMethods = async (request, response) => {
  const { id } = request.params;
  const updates = {
    userid: request.body.userid,
    name: request.body.name,
    cardnumber: request.body.cardnumber,
    expirydate: request.body.expirydate,
    cvv: request.body.cvv,
    postalcode: request.body.postalcode
  };

  try {
    const paymentMethods = await PaymentMethods.findByIdAndUpdate(id, updates, { new: true });
    if (!paymentMethods) {
      return response.status(404).json({ message: "PaymentMethods not found" });
    }
    response.json(paymentMethods);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

module.exports = {
    createPaymentMethods,
    getPaymentMethodss,
    getPaymentMethodsById,
    deletePaymentMethods,
    updatePaymentMethods
};