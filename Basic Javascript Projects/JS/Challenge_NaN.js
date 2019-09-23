function func1() {
    document.getElementById("test1").innerHTML = 0/0;
}

function func2() {
    document.getElementById("test2").innerHTML = isNaN("Hello");
}

function func3() {
    document.getElementById("test3").innerHTML = isNaN("007");
}