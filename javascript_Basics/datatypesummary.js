//java script is dynamically typed language becuse becuse we don't need to declare number string or bollean while assing the number 
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100                         //datatype will be number 
const scoreValue = 100.3                    

const isLoggedIn = false                  //data type will be bollean
const outsideTemp = null                 // data type of null is always object 
let userEmail;

const id = Symbol('123')        //symbol data type is symbol 
const anotherId = Symbol('123')  // same value in 2 diffrent symbol are not equal 

console.log(id === anotherId);
console.log(id == anotherId);

 const bigNumber = 3456543576654356754n   // data type of big int 



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3