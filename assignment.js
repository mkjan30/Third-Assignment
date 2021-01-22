
//(Convert km to m).......
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
    var UttoraToMirpur = kilometerToMeter(0.500);
    //return kilometerToMeter;
    console.log(UttoraToMirpur);
    var GazipurToDhanmondi = kilometerToMeter(1.2543);
    //return kilometerToMete;
    console.log(GazipurToDhanmondi);

//(I want to brought a Laptop).....
var watch = 50;
var phone = 100;
var laptop = 500;
if (watch > phone){
    if (phone>laptop){
        console.log("phone")
        //return phone;
    }
    else {
        console.log("laptop")
        //return laptop;
    }
    
}
else{
    if(watch>laptop){
        consosle.log("watch")
        //return Watch

    }
    else{
        console.log("laptop")
        //return Laptop
    }
}

//(You stay here seven days. Pay for seven Day's).....
function hotelCost(daySpend) {
    var price = 0;

    if (daySpend <= 10) {
        price = daySpend * 100;
    }

    else if (daySpend <= 20) {
        var firstTenDays = 10 * 100;
        var discount = daySpend - 20;
        var secondTwentyDays = discount * 80;
        price = firstTenDays + secondTwentyDays;
    }

    else {
        var firstTenDays = 10 * 100;
        var secondTwentyDays = 10 * 80;
        var discount = daySpend - 50;
        var nextTenDays = discount * 50;
        price = firstTenDays + secondTwentyDays + nextTenDays;

       
    }
    return price;
    //console.log(price);
}
var amount = hotelCost(7);
console.log(amount);

//(Largest Name)....
var megaFriend = "Al-amin, Suvo, Sibu, Safi, Rafin";
var max = megaFriend[0];

for(var i = 0; i<megaFriend.length; i++){
    var element = megaFriend[i];
    if(element>max){
        max = element;
    }
    
}
console.log("The Large name is: ", max);

//(temperature).........
function celsiusToFahrenheit(n){
    return n * 2.80 + 32
}

var f = celsiusToFahrenheit(20);
console.log(f);

