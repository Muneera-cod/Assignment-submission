let leapyear=2020
if((leapyear%4==0 && leapyear%100!=0) || leapyear%400==0){
    console.log("Leap year")
}
else{
    console.log("Not a Leap year")
}