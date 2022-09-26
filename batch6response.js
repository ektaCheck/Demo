shivam(vowel question)
const names = ['Jason', 'Jedi', 'Tommy', 'Ryan'];
for (let name of names) {
    if (name[0] === "J") {
         console.log(name);
     }
 }
 Khushboo Kumawat17:35
function jNames(arr) {
  return arr.filter(name =>  name.split('')[0] === "J" ) 
 }