// Iteration #1
const {model, Schema} = require("mongoose")
// the two vars are available from mongoose
const droneSchema = new Schema({
    name: {type: String, required: true},
    propellers: {type: Number, required: true},
    maxSpeed: {type: Number, required: true},
})

const droneModel = model('drone', droneSchema)
module.exports = droneModel;