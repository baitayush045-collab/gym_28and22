const express = require('express');
const router = express.Router();

const {addMembership} = require('../controller/membershipController')
const{deleteMembership} = require('../controller/membershipController')
const{getMemberships} = require('../controller/membershipController');

router.post('/', addMembership);
router.delete('/:id', deleteMembership);
router.get('/', getMemberships);


module.exports = router;