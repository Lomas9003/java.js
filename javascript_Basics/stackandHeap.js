// all primitive data type goes to {STACK}
//all non primitive data goes to heap 

//Stack example - in stack we use the copy value we are not able to change the orignal refrence value 
let MyName = "Ishan" 

let MynewName = MyName
MynewName = "Lomas"
console.log(MyName);
console.log(MynewName);

//***************************Heap Example***************************// 
//In heap if we change any value them the orignal value in the refrence is also changed 

let useone = {
    email: "xyz@gmail.com",
    upi: "abc@ybl"
}

let usetwo = useone

usetwo.email = "qwer@gmail.com" 

console.log(usetwo.email);     //as we can see that both the email id is changed in the heap refrence 
console.log(useone.email);