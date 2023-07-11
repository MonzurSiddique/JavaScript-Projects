//typeof assignment
document.write(typeof "assignment");
document.write("<br>");
document.write(typeof 5);
document.write("<br>");

//an expression combining string and number
document.write(99 + "23");
document.write("<br>");

//negative infinity assignment
document.write(-2E311);
document.write("<br>");

//Infinity assignment
document.write(2E310);
document.write("<br>");

//Boolean Logic assignment
document.write(10>2);
document.write("<br>");

//console log assignment
console.log(100-2);
document.write("<br>");
console.log(8<2);
document.write("<br>");

//double equal sign assignment
document.write(100+5==104);
document.write("<br>");

//triple equal sign assignment
A = "Monzur";
X = "Monzur";
document.write(A===X);
document.write("<br>");

//the greater > and && operators
document.write(100 > 99 && 50 > 49);
document.write("<br>");

//the smaller < and || operators
document.write(100 < 99 || 50 < 49);
document.write("<br>");

//the not ! operator
function not_function() {
    document.getElementById("Not").innerHTML = !(20 > 212);
}