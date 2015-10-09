var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var calculatorSchema = new Schema({
    answer: Number
});


var Calculator = mongoose.model('Calculator', calculatorSchema);

module.exports = Calculator;