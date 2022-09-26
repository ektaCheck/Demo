q-5
Sneha Singhal16:35
const names = ['Jason', 'Jedi', 'Tommy', 'Ryan']
function nameJ (names) {
    let arr = []
names.forEach((name) => {
    if(name[0] === 'J') {
        arr.push(name)
    }
})
return arr
}

console.log(nameJ(names))
haseeb
const names = ['Jason', 'Jedi', 'Tommy', 'Ryan']

const newArr=names.filter(ele=>ele.charAt(0)=="J")

AYUSH Soni16:36
function newArray(arr) {
    let ar = [];
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        if(val[0] == 'J') {ar.push(arr[i])}
    }
    return ar;
}
q-6

Sneha Singhal16:38
function check(num) {
    if(typeof(num) === 'Number') {
        return true
    }else{
        return false
    }
}
Haseeb Ahmad16:39
function integer(num){
if(parseInt(num)===Number)
return true
else
return false
}
console.log(integer(12.3))