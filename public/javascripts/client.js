$(function() {

    var operator;

    $(".buttons").on("click", "button", function() {
        operator = $(this).attr("class");
        $(".operator").text(operator);
    });

    $(".equalsButton").on("click", function() {


        $.ajax({

            type: "GET",
            url: "/calculate/" + $(".firstNum").val() + "/" + $(".secondNum").val() + "/" + operator,
            success: function (response) {

                console.log(response);
                var $answer = $("<h1>The Answer is: " + response + "</h1>");
                $(".toAppend").html($answer);

                var returnedAnswer = response;
                console.log("returnedAnswer = ", returnedAnswer);
                $.ajax({
                    // post response to database
                    type: "POST",
                    url: "/calculate/postAnswer",
                    dataType: "text",
                    data: returnedAnswer
                }).done(function(response){
                   console.log("We got a response: ", response);
                });

            }
        });



    })


});