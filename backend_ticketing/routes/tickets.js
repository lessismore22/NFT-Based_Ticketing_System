const express = require('express');
const router = express.Router();
const { getTicket, mintTicket } = require('../controllers/ticketsController');

router.get('/:tokenId', getTicket);
router.post('/mint', mintTicket);

module.exports = router;
