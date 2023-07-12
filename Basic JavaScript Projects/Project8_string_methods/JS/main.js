//main.js

//using concat method
function full_sentence() {
    var part_1 = "I am ";
    var part_2 = "persuing ";
    var part_3 = "Software and Web Developer Certificate ";
    var part_4 = "Course at AOLCC.";
    var full_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("StringMethod").innerHTML = full_sentence;
}

//using slice method
function slice_Method() {
    var sentence = "Slash the price";
    var section = sentence.slice(10,16);
    document.getElementById("Slice").innerHTML = section;
}

//using toString method
function string_Method() {
    var myNumber = 111;
    document.getElementById("ToString").innerHTML = myNumber.toString();    
}

//using toPrecision method
function precision_method() {
    var myNumber = 123.45678901112
    document.getElementById("SpecificLength").innerHTML = myNumber.toPrecision(6);
}

