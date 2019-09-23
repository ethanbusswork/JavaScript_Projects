function myDictionary() {
    var Animal = {
        Species:"Dog",
        Color:"White with Orange Patches",
        Breed:"Pitbull",
        Sound:"Woof"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}