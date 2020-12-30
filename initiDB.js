const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://cluster0.3vqew.mongodb.net/', 
{
    dbName: 'RestApi_products',
    user: 'ravindu',
    pass: 'aAPm7KSY1WKGeKxD',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log('Mongodb connected....');
})
.catch(err => console.log(err.message));

mongoose.connection.on('connected', () => {
    console.log("Mongoose connected to db...");
});

mongoose.connection.on('error', (err) => {
    console.log(err.message);
});

mongoose.connection.on('disconnected', () => {
    console.log("Mongoose connection is disconnected...");
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log("Mongoose connection is disconnected due to app termination...");
        process.exit(0);
    });
});
}