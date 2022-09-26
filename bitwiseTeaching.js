// 8 bits make one byte

// binary which computer understand
// writing in 8 bits
// 1=>00000001 
// 2=>00000010
//    00000011 add both give me three through OR 
//    00000000  bithwise AND between 1 and 2 give me 0


// First is bitwise OR which denotes by single pipe sign or ye dono binary values ko add krta he matlab logic jha 1 he udhar i ayyega
// console.log(1|2);
// *********************************************************************

// second is bitwise AND aur isme agar dono 1 he toh hee 1 ayega warna nhe ayega

// OR
// 0|1=>1
// 1|0=>1
// 0|0=>0


// And
// 0&1=>0
// 1&0=>0
// 1&1=>1

// XOR(when you have two different operators then only you will have 1)
// 0^0=>0
// 1^1=>1
// 0^1=>1
// 1^0=>0

// Method to convert into different systems
// console.log((1).toString())//it will just provide 1 in string form but if we provide base then situation will be different

// console.log((2).toString(2));//this will convert to binary
console.log((252525).toString(2))

// Binary to decimal
// console.log(parseInt("111101101001101101"),2);
// console.log((0b111101101001101101).toString(10)) //putting 0b at front tell it is a binary

// Practice & | ^ with 1 and 3
// 001
// 011
// 001=>1=>&
// 011=>3=>|
// 010=>2=>^|

// Shift OPerator
//shift left(<<)
console.log(9<<2); //here first operand is value and second is position
// for this we need to convert 9 to binary which will be 1001 than u have to add 2 0 at the end.Jitne position shift karne he utne position add kro
// console.log((9).toString(2));
// "100100"
// console.log((0b100100).toString(10));

// shift right
// console.log(9>>2); //here first operand is value and second is position
// "1001" is 9 show shift right me 2 position hta dene he string ke end se,htane ke baad hume milega "10" which is 2 

// 8421
// 0001
// 0010
// 0011
// 0100
// 0101
// 0110
// 0111
// 1000
// a A
// A-65
// B-66
// "bitwise Or"
// "Bitwise And"
// "bitwise XOR"
// 001
// 010
// 011=>3(Or)
// 000->0(And)
// 011=>3
