function toFixed_method() {
    var num = 5.6789123456789;
    var n = num.toFixed(3);
    document.getElementById("fixed").innerHTML = n;
}

function valueOf_method() {
    var str = "Hello, World!";
    var res = str.valueOf();
    document.getElementById("fixed").innerHTML = res;
}