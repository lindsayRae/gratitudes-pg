const express = require('express');

const router = express.Router();
const gratitudes = require('./gratitudes');
const auth = require('./auth');

module.exports = router;

router.use('/gratitudes', gratitudes);
router.use('/auth', auth);
