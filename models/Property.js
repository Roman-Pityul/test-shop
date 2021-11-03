const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true, unique: true},
    value: {type: String, required: true}
})

module.exports = model('Property', schema)