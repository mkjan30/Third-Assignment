//(Hotel Bill).....

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

