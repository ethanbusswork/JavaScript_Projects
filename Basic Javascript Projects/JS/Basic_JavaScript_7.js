function timeOfDayGreeting() {
    if (new Date().getHours() < 18) {
        document.getElementById("dateTime").innerHTML = "Lovely morning to you!";
    }    
    else if (new Date().getHours() > 18) {
        document.getElementById("dateTime").innerHTML = "Lovely evening to you!";
    }

    console.log(timeOfDayGreeting);
}

function rentingAge() {
    var Age = document.getElementById("Age").value;
    if (Age >= 25) {
        document.getElementById("ageOutput").innerHTML = "You are old enough to rent a car.";
    }
    else if (Age < 25) {
        document.getElementById("ageOutput").innerHTML = "You are not old enough to rent a car.";
    }
    console.log(rentingAge);
}

function time_function() {
    var time = new Date().getHours();
    console.log(time);
    var Reply;
    if (time < 12 == time >= 0) {
        Reply = "It is in the morning";
    }
    else if (time >= 12 == time < 18) {
        Reply = "It is in the afternoon";
    }
    else {
        Reply = "It is in the evening";
    }
    document.getElementById("time_of_day").innerHTML = Reply;
}