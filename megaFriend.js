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