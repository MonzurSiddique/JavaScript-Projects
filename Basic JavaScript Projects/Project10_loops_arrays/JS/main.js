//main.js

//Function using while loop
function count_to_Five() {
    var Digit = "";
    var x = 1;
    while (x < 6) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Five").innerHTML = Digit;
}

//Function using for loop
var Instruments = [
    "Guitar",
    "Drums",
    "Piano",
    "Bass",
    "Violin",
    "Trumpet",
    "Flute",
];

var content = "";
var y;
function for_Loop() {
    for (y = 0; y < Instruments.length; y++) {
        content += Instruments[y] + "<br>"
    }
    document.getElementById("List_of_Instruments").innerHTML = content
}

//Function with an array
function color_array() {
    var Colors = [];
    Colors[1] = "Violet";
    Colors[2] = "Indigo";
    Colors[3] = "Blue";
    Colors[4] = "Green";
    Colors[5] = "Yellow";
    Colors[6] = "Orange";
    Colors[7] = "Red";
    document.getElementById("Color_Array").innerHTML = "My favourite color is " + Colors[3] + ".";
}

//Creating an object with the let keyword
function car() {
    let car = {
        Make: "Ford",
        Model: "Mustang",
        Year: "1998",
        Color: "Red",
    };
    document.getElementById("Car").innerHTML = "I have a " + car.Year + " " +car.Color + " " +"colour" + " " + car.Make + " " +car.Model + ".";
}