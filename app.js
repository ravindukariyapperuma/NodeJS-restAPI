const express = require('express');

const createError = require('http-errors');

const app = express();

//Initialize DB
require('./initiDB')();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// mongodb+srv://ravindu:<password>@cluster0.3vqew.mongodb.net/<dbname>?retryWrites=true&w=majority
// ravindu
// aAPm7KSY1WKGeKxD

app.all('/test', (req, res) => {
    // console.log(req.query);
    // console.log(req.query.name);
    // res.send(req.query);
    // console.log(req.params);
    // res.send(req.params);
    console.log(req.body);
    res.send(req.body);
});

const ProductRoute = require('./Routes/Product.route');
app.use('/products', ProductRoute);

app.use((req, res, next) => {
    // const err = new Error("Not found");
    // err.status = 404;
    // next(err);
    next(createError(404, "Not found"));
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