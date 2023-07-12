
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//A constructors function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Aristotle = new Vehicle("Dodge", "Viper", 2020, "Red");
var Newton = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Einstein = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//A function to display the results of the contstructor in an HTML element
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Newton drives a " + Newton.Vehicle_Color + "-colored " + Newton.Vehicle_Model + " manufactured in " + Newton.Vehicle_Year;
}

//A nested function 
function add_Strings() {
    var start_string = "JavaScript";
    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("is a hard language to learn.");
    document.getElementById("Nested_Function").innerHTML = start_string;
}
