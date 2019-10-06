function validateform() {
    var [x, y, z, w] = document.forms["myForm"];
    if (x.value == "" || y.value == "" || z.value == "") {
        alert("Field must be filled out");
        return false;
    }
}