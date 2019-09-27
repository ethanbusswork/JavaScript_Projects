function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27, 33);
    document.getElementById("slice").innerHTML = section;
}

function number_string_method() {
    var x = 12345;
    document.getElementById("numbers_to_string").innerHTML = x.toString();
}

function precision_method() {
    var y = 12345.6789123456789;
    document.getElementById("precision").innerHTML = y.toPrecision(10);
}