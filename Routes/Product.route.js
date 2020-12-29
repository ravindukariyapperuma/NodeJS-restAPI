const { request } = require("express");

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('getting a list of all products...');
});

module.exports = router;