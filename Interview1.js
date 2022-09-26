console.log("check");
// Q-1=>write a function where object is passed as an arguement and will return an array where array will contain only values of object
// ans-1
// function objectValues(object){
//     return Object.values(object)
// }
// function objectValueThroughArray(obj){
//     let arr=[];
//   for(let key in obj){
//      arr.push(obj[key])
//   }
//   return arr
// }
// let x={
//     a:1,
//     b:2,
// }
// let xcopy={...x};
// xcopy.b=4
// console.log(x);
// console.log(xcopy);


// q2=>suppose you have a string and you want reverse a string how u will do it.
// ans-2
// function reverseStr(str){
//     return str.split("").reverse().join("")
// }

// q-3 suppose I have an object what changes should i make in object so that obj.getA().getB() runs and gives me 1,2
const obj={
    a:1,
    b:2,
    getA(){
        console.log(this.a);
    }
    getB(){
        console.log(this.b);
    }
}
obj.getA().getB();
// ans=>just return this in getA method

// q-4 lets assume I have an array [1,2].print()=>1,2 what can i do so that it works

// ans-4 Array.prototype.print=function(){
//    this.join(",")
// }

// q-5 What is prototype inheritance

// q-6  
// const obj={
//     a:{
//         b:{
//             c:1
//         }
//     }
// }
// copy the obj so that any change in copy will not affext the obj
// objCopy
// ans =6
// let objCopy=JSON.parse(JSON.stringify(obj))

// q-7
// const a=[1,2,5,7,9];
// const b=[2,5,7,12,13];
// write a function to merge the 2 arrays and sort them
// ans
// function merge(arr1,arr2){
//     return arr1.concat(arr2).sort((a,b)=>a-b);
// }

// q-8
const obj={
    x:1,
    getx(){
        const inner=function(){
            console.log(this.x);
        }
        inner();
    }
}
// what will be the output for obj.getx();
// ans=>It will be undefined and if you want 1 what changes will u do so one we can change inner to arrow function or we can create a variable that inside getX assign it to this and console that.x

// q-9=>difference between let and var
// q-10=>console.log(x) than use varx=10 what will be x and console.log(y) than use let y=23 what will be y;
// q-11=>difference between == & ===
// q-12=>difference between null and undefined

// function arrayOfValuesFromObj(obj) {
//     console.log(Object.values(obj));
//   };
//   console.log(arrayOfValuesFromObj(obj));

console.log("1");
console.log("2");
"bring me the movies that contain bat"
"batman","tik tok"
console.log("3");
console.log("4");
console.log("5");
console.log("6");