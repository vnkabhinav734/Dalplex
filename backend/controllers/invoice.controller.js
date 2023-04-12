/*Author: Sumit Kumar B00904097*/
const Invoice = require('../models/invoice.model');

const generateUniqueNumber = () => {
    const timestamp = Date.now().toString();
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;
    const uniqueNumber = timestamp.substr(timestamp.length - 5) + randomNumber.toString();
    return uniqueNumber;
}

const createInvoice = async (request, response) => {
    const { userid, date, total, paid, owing } = request.body;
    
    const invoiceNo = generateUniqueNumber();

    const invoice = new Invoice({ userid, date, invoiceno: invoiceNo, total, paid, owing });
    try {
        await invoice.save();
        response.status(201).json(invoice);
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
};

const getInvoices = async (request, response) => {
    try {
        const invoice = await Invoice.find();
        response.json(invoice);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const getInvoiceById = async (request, response) => {
    const { id } = request.params;

    try {
        const invoice = await Invoice.findById(id);
        if (!invoice) {
            return response.status(404).json({ message: 'Invoice not found' });
        }
        response.json(invoice);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const deleteInvoice = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedinvoice = await Invoice.findByIdAndDelete(id);
    if (!deletedinvoice) {
      return response.status(404).json({ message: "Invoice not found" });
    }
    response.json(deletedinvoice);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const updateInvoice = async (request, response) => {
  const { id } = request.params;
  const updates = {
    userid: request.body.userid,
    date: request.body.date,
    invoiceno: request.body.invoiceno,
    total: request.body.total,
    paid: request.body.paid,
    owing: request.body.owing
  };

  try {
    const invoice = await Invoice.findByIdAndUpdate(id, updates, { new: true });
    if (!invoice) {
      return response.status(404).json({ message: "Invoice not found" });
    }
    response.json(invoice);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

module.exports = {
    createInvoice,
    getInvoices,
    getInvoiceById,
    deleteInvoice,
    updateInvoice
};