var express = require('express');
var router = express.Router();
var Calculator = require("../models/calculatorModel");

router.get('/:firstNumber/:secondNumber/:operator', function(req, res, next){
    var firstNumber = parseInt(req.params.firstNumber);
    var secondNumber = parseInt(req.params.secondNumber);
    var operator = req.params.operator;
    var Answer;
    if(operator == "add"){
        Answer = firstNumber + secondNumber;
    }
    if(operator == "subtract"){
        Answer = firstNumber - secondNumber;
    }
    if(operator == "multiply"){
        Answer = firstNumber * secondNumber;
    }
    if(operator == "divide"){
        Answer = firstNumber / secondNumber;
    }
    console.log(Date() + " [GET REQUEST] " + Answer);
    var jsonAnswer = { "answer" : Answer };
    var databaseAnswer = new Calculator(jsonAnswer);
    databaseAnswer.save(function(err) {
        if (err) {
            console.log("Post", err);
            res.send("Cannot post data");
        }
        console.log(Date() + " [DATA SAVED]", databaseAnswer);
    });

    res.json(Answer);
});

//router.post('/postAnswer', function (req, res, next) {
//    var answer = new Calculator(req.body);
//    console.log("answer = ", req.body);
//    answer.save(function(err) {
//        if (err) {
//            console.log("Post", err);
//            res.send("Cannot post data");
//        }
//        console.log(Date() + " [DATA SAVED]", answer);
//        res.send(200);
//    });
//});

module.exports = router;