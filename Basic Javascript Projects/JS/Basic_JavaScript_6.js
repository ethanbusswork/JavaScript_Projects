function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function voting_age() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough" : "You are old enough";
    document.getElementById("vote").innerHTML = Can_vote + " to vote in the US.";
}

function Birthday(Year, Month, Day) {
    this.Birthday_Year = Year;
    this.Birthday_Month = Month;
    this.Birthday_Day = Day;
}

var Ethan = new Birthday(2001, "February", "tenth");

function func1() {
    document.getElementById("New_and_This").innerHTML = 
    "Ethan was born in " + Ethan.Birthday_Year + 
    " in the month of " + Ethan.Birthday_Month + 
    " on the " + Ethan.Birthday_Day + " day!";
}

function count_func() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1;}
        plus_one();
        return starting_point;
    }
}