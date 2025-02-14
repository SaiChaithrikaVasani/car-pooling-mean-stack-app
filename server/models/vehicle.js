var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VehicleSchema = new Schema({
    type: {type: String, required: true, index: {unique: true}},
    png: {type: String, required: true},
    created_at: {type: Date, default: Date.now()}
});


module.exports = mongoose.model('Vehicle', VehicleSchema);
