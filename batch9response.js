Divya Sharma18:34
let fizzBuzz = function (n) { 
let output = []; 
for (let i = 1; i <= n; i++) {
 let newString = ''; 
if (i % 3 === 0) { 
newString += 'Fizz';
 } if (i % 5 === 0) { 
newString += 'Buzz'; 
} output.push(newString.length ? newString : i.toString()); 
} return output;
};
Tarun Mandani18:35
let i;
    for (i=1; i<=100; i++)
    {
 
        if (i%15 == 0)   
            document.write("FizzBuzz" + " ");

        else if ((i%3) == 0)
            document.write("Fizz" + " ");
atul kamal18:35
let i;
for(i=1;i<=100;i++){
   if(i%15==0)
   console.log("FizzBuzz"+" ");

   else if((i%3)==0)
   console.log("Fizz"+" ");

   else if((i%5)==0)
   console.log("Buzz" +'');

   else 
   console.log(i+" ");
}

// Tarun Mandani18:38
function sum(arr) {  
    let sum = 0;   

    for (let i = 0; i < arr.length; i++)  
        sum += arr[i];  

    return sum;  
}
Vishnu Nama18:39
Function sum(arr){  return reduce(current,privious)=current+previous;}

// missing value
Tarun Mandani18:45
n = array.length
function getMissingNo(array, n) {
  
    let total = Math.floor((n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++)
        total -= array[i];
    return total;
}