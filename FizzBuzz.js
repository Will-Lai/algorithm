/*
As a user to enter a number
loop from 1 to the input number
    if the current is divisible by 3, print Fizz
    if the current is divisible by 5, print Buzz
    if the current is divisible by 3 and 5, print FizzBuzz
    else, print the current number
 */

var input = prompt("Enter a number: ");
for (var i = 1; i <= input; i++){
    if (input % 3 == 0){
        console.log("Fizz");
    }
    else if(input % 5 == 0){
        console.log("Buzz");
    }
    else if(input % 3 == 0 && input % 5 == 0 ){
        console.log("FizzBuzz");
    }
    else{
        console.log(i);
    }
}