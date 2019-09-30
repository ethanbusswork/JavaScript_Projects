function break_func() {
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("break_statement").innerHTML = text;
}

function continue_func() {
    var text1 = "";
    var i2;
    for (i2 = 0; i2 < 10; i2++) {
        if (i2 === 3) { continue; }
        text1 += "The number is " + i2 + "<br>";
    }
    document.getElementById("continue_statement").innerHTML = text1;
}
