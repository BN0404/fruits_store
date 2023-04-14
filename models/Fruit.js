const mongoose = require('mongoose');

// blueprint
const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    //or  type {type: Boolean}
    readyToEat: Boolean
});

//Mongoose model
const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;

