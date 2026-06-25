const Trainer = require('../models/trainer');

const addTrainer = async (req, res) => {
    try {
        const trainer = await Trainer.create(req.body);

        res.status(201).json({
            success: true,
            data: trainer
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteTrainer = async (req, res) => {
    try {
        const trainer = await Trainer.findByIdAndDelete(req.params.id);

        if (!trainer) {
            return res.status(404).json({
                success: false,
                message: "Trainer not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Trainer deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
const getTrainer = async (req, res) => {
    try {
        const trainers = await Trainer.find();
        res.status(200).json({
            success: true,
            data: trainers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = { addTrainer, deleteTrainer, getTrainer };