q-1.Difference between var let and const with respect to hoisting
q-2. obj1={a:10}
const obj2=obj1;
obj2.a=20;
console.log(obj1)
console.log(obj2);
let obj1
//question if i am putting obj 1 at the end is it ok or what happen
// If u need different refernce what change u can do in above code so that one will not affect other
let obj3={a:10}
const obj4={...obj3}
obj4.a=20;
obj3.a=10
console.log(obj4);
console.log(obj3);

q-3 "12"==12 what is expected output
q-4 null==undefined it is showing true why how both of then are equal
q-5 write function which will invoke this syntax console.log(mul(2)(3)(4))//gives output 24

function mul(a){
    return function second(b){
        return function third(c){
            return a*b*c;
        }   
    }

}

// second part of this question convert it in a arrow function
q-6 what is a filter method is it a loop 
//ans is no it is not a loop just a method applies in array
q-7 let arr=[1,0,0,1,1,1,0,0]
// write a filter method that will give only values of 1
// solution
arr.filter((val)=>val===1)

q-8-what is context API
q-9 Can you tell me about react hooks
q-10 what are components in react
q-11 what are react fragements
// interviewer ask pure components have to teach them