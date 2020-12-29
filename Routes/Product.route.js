const { request } = require("express");

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('getting a list of all products...');
});

router.post('/', (req, res, next) => {
    res.send('product created');
});

module.exports = router;