const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String },
    property: { type: Array }
})

module.exports = model('Cars', schema)