const mongoose = require('../connection');
var Schema = mongoose.Schema;

//geolocation schema
var geoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number], //this signifies that there is gonna be array of numbers
        index: "2dsphere"
    }
});

//Create user schema and model
var userSchema = new Schema({
    name: {
        type: String,
        required: [
            true,
            "name field is required"
        ],
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    //Add in geolocation
    geometry: geoSchema //instead of nesting we made seperate schema for clean code.
});

var ninjaCollection = mongoose.model('ninjas', userSchema);
//it will create a collection called ninjas and object in ninjas should be according to userSchema.
module.exports = ninjaCollection;