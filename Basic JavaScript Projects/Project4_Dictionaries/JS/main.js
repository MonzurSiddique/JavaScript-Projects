//main.js

function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Color;//this removes Color from dictionary KVP 
    document.getElementById("Dictionary").innerHTML = Animal.Color;
}