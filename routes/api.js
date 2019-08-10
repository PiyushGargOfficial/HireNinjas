const routes = require('express').Router();
const Ninja = require('../db/models/user');

//get a list of users from database
routes.get('/ninjas', (req, res, next) => {
    //get all ninjas:
    // Ninja.find({}).then(function(ninjas){
    //     res.send(ninjas);
    // });

    //geoNear : predefined fn for finding out users in a particular reg of lat and long

    //geonear is outdated
    // Ninja.geoNear({
    //     type: "Point", //as mentioned in schema
    //     coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)] // from url we are getting a string
    // }, {
    //     maxDistance: 100000, //in metres
    //     spherical: true
    // }).then(function (ninjas) {
    //     res.send(ninjas);
    // });

    Ninja.aggregate().near({
        near: {
            'type': 'Point',
            'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        maxDistance: 100000, //100km : max ninja distance 
        spherical: true,
        distanceField: "dis"
    }).then(function (ninjas) {
        res.send(ninjas);
    }).catch(next);
});

//add an user to database
routes.post('/ninjas', (req, res, next) => {

    Ninja.create(req.body).then(function (ninja) {
        res.send(ninja);
    }).catch(next);
});

//update an user in database
routes.put('/ninjas/:id', (req, res, next) => { //:id is type of a variable that we get on the req or url as well by which we mean to search.
    Ninja.findByIdAndUpdate({
        _id: req.params.id
    }, req.body).then(function () { //if we pass the ninja parameter here its gonna give us outdated ninja.
        Ninja.findOne({
            _id: req.params.id
        }).then(function (ninja) {
            res.send(ninja);
        });

    }).catch(next);
});

//delete an user in database
routes.delete('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndRemove({
        _id: req.params.id
    }).then(function (ninja) {
        res.send(ninja);
    }).catch(next);
});

module.exports = routes;