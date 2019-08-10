const express = require('express');
const app = express();
const chalk = require('chalk');
const path = require('path');
const bodyParser = require('body-parser');
// const routes = require('./routes/api');

const PORT = process.env.PORT || 1234;

// app.get("/", (req, res) => {
//     console.log("GET Req");
//     res.send({
//         msg: "hello"
//     });
// })

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json()); //bodyParser can through diff types of data we want it for json.

app.use(express.static('public'));

//Initialize Routes 
app.use('/api', require('./routes/api'));

//Middleware for error handling
app.use((err, req, res, next) => {
    res.status(422).send({ //404:no resource found , 422:unprocessable data
        error: err.message
    });
});

const server = app.listen(PORT, () => {
    console.log(chalk.red("Server Started..."));
})