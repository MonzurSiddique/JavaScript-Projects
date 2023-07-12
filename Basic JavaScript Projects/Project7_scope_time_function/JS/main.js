var X = 100; //Global Variable
function Add_numbers_1() {
    var X = 200 //Local Variable
    document.write(2000 + X + "<br>");//using global variable
}
function Add_numbers_2() {
    document.write(X + 99);// using global variable
    console.log(X);//using console
}

Add_numbers_1();
Add_numbers_2();

//function using if statement

function get_Date(){
    if (new Date().getHours() < 18){
        document.getElementById("Welcome").innerHTML = "It is currently before 6 pm.";
    }
}

// a function with if and else statement
function get_Reply(){
    var user_input = document.getElementById("userInput").value;
    if (user_input % 2 === 0) {
        reply = "You entered an even number.";
        document.getElementById("feedback").innerHTML = reply;
    }
    else {
        reply = "You entered an odd number."
        document.getElementById("feedback").innerHTML = reply;
    }
}

//using time function ()
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    } else if (Time >= 12 == Time < 18){
        Reply = "It is afternoon.";
    } else { 
        Reply = "It is evenine time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}