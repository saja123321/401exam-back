const mongoose = require('mongoose')

const drinksSchema = new mongoose.Schema({
    email: { type: String },
    title: { type: String },
    image: { type: String },
})

const drinksModel = mongoose.model('drinks', drinksSchema)
module.exports = { drinksModel }