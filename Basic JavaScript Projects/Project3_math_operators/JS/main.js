//Addition Function

function addition_Function() {
    var addition = 2 + 2; 
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}


//Substraction Function

function substraction_Function() {
    var Substraction = 10 - 3; 
    document.getElementById("Math").innerHTML = "10 - 3 = " + Substraction;
}

//Multiplication Function

function multiplication_Function() {
    var Multiplication = 10 * 3; 
    document.getElementById("Math").innerHTML = "10 x 3 = " + Multiplication;
}

//Division Function

function division_Function() {
    var Division = 21 / 3; 
    document.getElementById("Math").innerHTML = "21 / 3 = " + Division;
}

//Modulus Operator

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

//Multiple Operators

function complex_Function() {
    var complex_Math = (1+2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then substracted by 5 equals " + complex_Math;
}


//Unary Operator

function negation_Operator()  {
    var y = 27;
    document.getElementById("Math").innerHTML = -y;
}

//Increment Operators

function increment_Operator() {
var X = 12;
X++;
document.getElementById("Math").innerHTML = X++;
}

//Decrement Operators

function decrement_Operator() {
    var Y = 5.20;
    Y--;
    document.getElementById("Math").innerHTML = Y--;
    }

//Random Function
window.alert(Math.random() * 1000);




