const express = require('express');
const router = express.Router();

const { addTrainer } = require('../controller/trainerController');
const { deleteTrainer } = require('../controller/trainerController');
const { getTrainer } = require('../controller/trainerController');

router.delete('/:id', deleteTrainer);
router.post('/', addTrainer);
router.get('/',getTrainer);

module.exports = router;