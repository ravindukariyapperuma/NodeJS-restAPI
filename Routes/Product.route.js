const { request } = require("express");

const express = require('express');
const router = express.Router();

const Product = require('../Models/Product.model');

router.get('/', async (req, res, next) => {
    try {
        // const results = await Product.find({}, {__v: 0});
        // const results = await Product.find({}, { name: 1, price: 1, _id: 0});
        const results = await Product.find({ price: 699 }, {});
        res.send(results);
    } catch (error) {
        console.log(error.message);
    }
});

router.post('/', async (req, res, next) => {
    
    try {
        const product = new Product(req.body);
        const result = await product.save();
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }

    // const product = new Product({
    //     name: req.body.name,
    //     price: req.body.price
    // });
    // product.save()
    // .then(result => {
    //     console.log(result);
    //     res.send(result);
    // })
    // .catch(err => {
    //     console.log(err.message);
    // });

});

router.get('/:id', (req, res, next) => {
    res.send('getting a single product');
});

router.patch('/:id', (req, res, next) => {
    res.send('updating a single product');
});

router.delete('/:id', (req, res, next) => {
    res.send('deleting a single product');
});

module.exports = router;