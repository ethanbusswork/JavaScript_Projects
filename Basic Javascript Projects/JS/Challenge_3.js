function string_Uppercase() {
    var str = "Hello, World!";
    var res = str.toUpperCase();
    document.getElementById("uppercase").innerHTML = res;
}

function search_function() {
    var str = "Visit learncodinganywhere.com";
    var n = str.search("learncodinganywhere.com");
    document.getElementById("search").innerHTML = n;
}