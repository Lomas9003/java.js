// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
//console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);   // we try don't to use these type of comparision 
console.log(null == 0);  // in js equality == operator consider null as null i:e it gives false output
console.log(null >= 0); // in js comaprison operator ><>= consider null as 0  

console.log(undefined == 0);
console.log(undefined > 0);   //undefined always gives the false value 
console.log(undefined >= 0);

// === 

console.log("2" === 2); // in this type conversion not done it check the data type first 
console.log("2"==2);  // in this type conversion automatically done 