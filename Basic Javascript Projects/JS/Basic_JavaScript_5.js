function type_of() {
    document.write(typeof 3);
}

function inf_pos() {
    document.write(3E310);
}

function inf_neg() {
    document.write(-3E310);
}

function boolean1() {
    document.write(10 > 4);
}

function coercion() {
    document.write("10" + 5);
}

function triple1() {
    document.write(10 === 10);
    document.write("5" === 10);
    document.write("10" === 10);
    document.write(5 === 10);
}

function boolean_ops() {
    document.write(3 > 1 && 15 > 14);
    document.write(0 > 1 && 15 > 14);
    document.write(5 > 15 || 10 > 6);
    document.write(10 > 15 || 4 > 6);
}

function not_func1() {
    document.getElementById("Not1").innerHTML = !(5 > 10);
}

function not_func2() {
    document.getElementById("Not2").innerHTML = !(20 > 10);
}