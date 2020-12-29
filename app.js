const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/Products', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(() => {
    console.log('Mongodb connected....');
});

app.all('/test/:id/:name', (req, res) => {
    // console.log(req.query);
    // console.log(req.query.name);
    // res.send(req.query);
    console.log(req.params);
    res.send(req.params);
});

const ProductRoute = require('./Routes/Product.route');
app.use('/products', ProductRoute);

app.use((req, res, next) => {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

//Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000...');
});