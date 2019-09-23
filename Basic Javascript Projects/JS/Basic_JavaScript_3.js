function addition_function() {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = addition;
}

function subtraction_function() {
    var subtraction = 4 - 2;
    document.getElementById("math").innerHTML = subtraction;
}

function multiply_function() {
    var multiply = 4 * 3;
    document.getElementById("math").innerHTML = multiply;
}

function divi_function() {
    var divi = 6 / 3;
    document.getElementById("math").innerHTML = divi;
}

function simple_math() {
    var simple_math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("math").innerHTML = simple_math;
}

function modulus_operator() {
    var modulus_operator = 25 % 6;
    document.getElementById("math").innerHTML = modulus_operator;
}

function negation_operation() {
    var neg_op = 10;
    document.getElementById("math").innerHTML = -neg_op;
}

function incr_up() {
    var incr_up = 10;
    incr_up++;
    document.getElementById("math").innerHTML = incr_up;
}

function incr_dn() {
    var incr_dn = 10;
    incr_dn--;
    document.getElementById("math").innerHTML = incr_dn;
}

function ran_num() {
    var ran_num = (Math.random() * 100);
    window.alert(ran_num);
    document.getElementById("math").innerHTML = ran_num;
}

function math_round() {
    var math_round = (Math.round(4.4));
    document.getElementById("math").innerHTML = math_round;
}