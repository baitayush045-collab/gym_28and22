const Membership = require('../models/membership');

const addMembership = async (req, res) => {
    try {
        const membership = await Membership.create(req.body);
        res.status(201).json({
            success: true,
            data: membership
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteMembership = async (req, res) => {
    try {
        const membership = await Membership.findByIdAndDelete(req.params.id);
        if (!membership) {
            return res.status(404).json({
                success: false,
                message: "Membership not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Membership deleted successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }   
};

const getMemberships = async (req, res) => {
    try {
        const memberships = await Membership.find();
        res.status(200).json({
            success: true,
            data: memberships
        });
    }   
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { addMembership, deleteMembership, getMemberships };