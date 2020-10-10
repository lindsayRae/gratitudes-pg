const express = require('express');

const router = express.Router();
const gratitudes = require('./gratitudes');

module.exports = router;

router.use('/gratitudes', gratitudes);
