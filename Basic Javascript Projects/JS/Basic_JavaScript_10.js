function count_to_twenty() {
    var digit = "";
    var x = 1;
    while (x < 21) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("count_20").innerHTML = digit;
}


var instruments = ["Guitar", "Drums", "Piano", "Violin", "Trumpet", "Flute"];
var content = "";
var y;
function for_loop() {
    for (y = 0; y < instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("instruments").innerHTML = content;
}

function games_pics() {
    var game_pic = [];
    game_pic[0] = "XCOM2";
    game_pic[1] = "Stellaris";
    game_pic[2] = "Hearts of Iron IV";
    game_pic[3] = "GTA V";
    document.getElementById("games").innerHTML = game_pic[1];
}

function constant_function() {
    const snacks = {type:"candy", brand:"Skittles", color:"assorted"};
    snacks.brand = "Warheads";
    snacks.taste = "sour";
    document.getElementById("constant").innerHTML = "The brand of snack is " + snacks.brand + " with a " + snacks.taste + " taste.";
}

function let_func() {
    var x = 10;
    document.write(x)
    {
        let x = 20;
        document.write("<br>" + x)
    }
    document.write("<br>" + x)
}