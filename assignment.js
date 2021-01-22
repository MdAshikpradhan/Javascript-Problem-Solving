// Github Code link: 

// Problem Solving Number 1 Kilometer To Meter Convert
function kilometerToMeter(kilometer){
    meter = kilometer * 1000;
    return meter;
}

var mirpurToChandpur = kilometerToMeter(128);
var dhakaToSylhet = kilometerToMeter(278);
// console.log(dhakaToSylhet);
// console.log(mirpurToChandpur);




//Problem Solving Number-2 budgetCalculator

function budgetCalculator(watch, mobile, laptop){
    var totalShopping = watch + mobile + laptop;
    return totalShopping;
}
var totalBudget = budgetCalculator((2 * 50), (5 * 100), (3 * 500));
// console.log(totalBudget);





// Problem Solving Number-3 hotelCost

function hotelCost(day){
    var bill = 0;
    if(day <= 10){
        bill = day * 100;
    }else if(day <=20){
        var firstTenDays = 10 * 100;
        var remaing = day - 10;
        var afterTenDays = remaing * 80;
        bill = firstTenDays + afterTenDays;
    } else {
         var firstTenDays = 10 * 100;
         var afterTenDays = 10 * 80;
         var remaing = day - 20;
         var afterTwentyDays = remaing * 50;
         bill = firstTenDays + afterTenDays + afterTwentyDays;
    }
    return bill;
}
var totalBill = hotelCost(22);
// console.log(totalBill);



// Problem Soliveing Number-4 megaFriend

var ArrayMax = ["Sumaiya", "Emon", "Alif", "Mahim", "Alif", "Faria", "Shamim", "Rakib", "Shohana"];
var max = [];

function megaFriend(arr) {
    var tlength = [];
    for(var i =0; i < ArrayMax.length; i++){
      if(tlength < ArrayMax[i].length){
        tlength = ArrayMax[i].length;
      }
    }
    for(var j =0; j < ArrayMax.length; j++){
      if(ArrayMax[j].length == tlength){
         max.push(ArrayMax[j]);
      }
    }
   if(max.length == 1){
     return max[0];
   }else{
      return max;
  }
}


// console.log(megaFriend(ArrayMax));
