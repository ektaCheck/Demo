import { func } from "prop-types"

q-1 Write the program that prints number ffrom 1-100
but for multiples of 3  print "Fizz" insted of number and for multiple of 5 print "Buzz"
and multiple of both print fizzBuzz

q-2 Draw two squares of width 50px side by side
each square should have circle in the center with radius of 10px
distance between two square should be 10px

q-3 Find the greatest common  divisor  of two numbers
ex 4,6==2
ex 2,3==1

q-4 You have given an array and u need the sum of all the values in array

q-5 suppose u have one function add write it in such a way so that u can call it both ways
add(1,2),add(1)(2);
ans=> function add(num1,num2){
  if(num1 && num2){
    return num1+num2
  }else{
    return function(num3){
       return num1+num3
    }
  }
}

q-6 You have an array that have [1-100] numbers it is unsorted but one number is missing .You need to find that number
ans 
function missing(maxNum,arr){
  let total=maxNum*(maxNum+1)/2;
  let arrTotal=arr.reduce((prev,curr)=>prev+curr);
  return total-arrTotal;

}


q-7 Diffrence between declation and expression function

q-8 let str="I Love JavaScript"

// pankaj ans for q-6
Pankaj Valiya17:48
function findMissedNum(arrayOfNumbers, n = 100) {
    if(arrayOfNumbers.length === n) {
      console.log("no number is missed");
    }
    if(arrayOfNumbers.length < (n - 1) ) {
      console.log("more than one number")
    }
    let totalSum = (n * (n+1)) / 2;
    let sumOfArray = 0;

    // shivam for last question
    Shivam Upadhyay17:53
function rev(string) {
    let x = string.split("");
    let reversed = [];
    for (let i = x.length - 1; i >= 0; i--) {
        let a = x[i];
        reversed.push(a);
    }
    reversed = reversed.join("");
    return reversed;
}
console.log(rev("I Love JavaScript"));

const profile={
  name:"ekta",
  getName:()=>{
      console.log(this.name);
  }
}