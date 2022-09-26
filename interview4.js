q-1function abc(){
    console.log(a,b,c)
    const c=30;
    let b=20
    var a=10;
}

q-2 var obj={
    name:"ekta",
    display:function(){
        console.log(this.name);
    }
}
var obj1={
    name:"suraj"
}
obj.display.call(obj1)
// next in this question only what will happen if i change this expression function to arrow overall i want to know what will be this

q-3 console.log("a");
     setTimeout(() => {
        console.log("set");
     }, 0);
     Promise.resolve(()=>console.log("pro")).then((res)=>res());
     console.log("b");

    //  a
    // b
    // pro
    // set

    function abc(){
        console.log(b);
        var b=10;
    }

 q-4 const result=calc.add(10).multiply(5).subtract(30).add(10)
     console.log(result.total);   
    //  solution
    const calc={
        total:0,
        add(a){
            this.total+=a;
            return this;
        },
        multiply(a){
            this.total*=a;
            return this;
        },
        subtract(a){
        this.total-=a;
        return this;
        },
    }

   q-5 Given an array of names, return a new array with the names that start with letter ‘J’.
   const names = ['Jason', 'Jedi', 'Tommy', 'Ryan']
   
   q-6 write a function that checks if num passed to it is integer or not
   console.log(isInt(4)); // true
console.log(isInt(12.9)); // false
console.log(isInt(0.23)); // false

// solution
// function isInt(num) {
//     return num % 1 === 0;
//   }

q-7  Write a function that returns the number of vowels used in a string. Vowels are the characters ‘a’, ‘e’, ‘i’, ‘o’, and ‘u’.
// vowels(‘Hi There!’) → 3
// vowels(‘Why do you ask?’) → 4
// vowels(‘Why?’) → 0

q-8 <div id=”t1" class=”blue”>Hello world</div>
 
#t1 {
color: pink
}
.blue {
color: blue
}

div {
color: red
}
what color will appear on screenans pink more specificity?

9.what is array destructuring explain with example?

10.function Cat (name) {
    this.name = name
  }
  Cat.meow = function () {
    console.log(this.name + ' says meow')
  }
  let catty = new Cat('catty')
  catty.meow()