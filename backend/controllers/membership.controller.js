/*Author: Sumit Kumar B00904097*/
const Membership = require('../models/membership.model');

const createMembership = async (request, response) => {
    const { userid, type, startdate, enddate, renew, cardinfo } = request.body;

    const membership = new Membership({ userid, type, startdate, enddate, renew, cardinfo });
    try {
        await membership.save();
        response.status(201).json(membership);
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
};

const getMemberships = async (request, response) => {
    try {
        const membership = await Membership.find();
        response.json(membership);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const getMembershipById = async (request, response) => {
    const { id } = request.params;

    try {
        const membership = await Membership.findById(id);
        if (!membership) {
            return response.status(404).json({ message: 'Membership not found' });
        }
        response.json(membership);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

const deleteMembership = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedmembership = await Membership.findByIdAndDelete(id);
    if (!deletedmembership) {
      return response.status(404).json({ message: "Membership not found" });
    }
    response.json(deletedmembership);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const updateMembership = async (request, response) => {
  const { id } = request.params;
  const updates = {
    userid: request.body.userid,
    type: request.body.type,
    startdate: request.body.startdate,
    enddate: request.body.enddate,
    renew: request.body.renew,
    renew: request.body.cardinfo
  };

  try {
    const membership = await Membership.findByIdAndUpdate(id, updates, { new: true });
    if (!membership) {
      return response.status(404).json({ message: "Membership not found" });
    }
    response.json(membership);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

module.exports = {
    createMembership,
    getMemberships,
    getMembershipById,
    deleteMembership,
    updateMembership
};