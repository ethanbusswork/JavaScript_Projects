function validateForm() {
    var x = document.forms["form"]["email"].value;
    if (x == "") {
        alert("Email is required.");
        return false;
    }
}