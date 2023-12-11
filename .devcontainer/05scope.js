// let a =10
// const b =20
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);

// if(true){
//     let a= 10
//     const b=20
//     var c=30
// }
// { iska matalab yeh sirf idhar hi acces kr skte hai iske available nhi hoga}
// -------------------nested scope and closer------------
// function addone(num){
//     return num+1
// }
// addone(5)
//it will not show error
//2 way of  syntax declaring function
// const addTwo = function(num){
//     return num+2
// }
// console.log(addTwo(5));
//-----------------arrow function----------------
// this=> current context (jo scope hai useme variable declare krne ke liye)
//  const user ={
//     username :"sneha",
//     price:999,
//     welcomeMessage: function(){
//         console.log(`${this.username},welcome to website`);
    
//     }
//  }
// //  user.welcomeMessage()
// //  // there we are able to change the context
// //  user.username="gupta"
// //  user.welcomeMessage()
// //  //browser ke andar jo engine run krta hai bo window hai
// console.log(this);//{}
// function code() {
//     console.log(this);
    
// }
// code()
// // we didnot use this in fucntion(it will show error (undefined))we can use it in obejct 
// // arrow function
//  const code=()=>{
//     let username="sneha"
//     console.log(this);
//  }
//  ---basic arrow fucntion---
// const addTwo=(num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4))
//---- implicit return  arrow function-------
// 
// const addTwo=(num1,num2)=>num1 +num2
// console.log(addTwo(3,4))
// when  we use curly braces we have to take return and if we can also use like that
//  const addTwo=(num1,num2)=>(num1+num2)
//  console.log(addTwo(3,4))
//  // when we are taking object we used curly braces
//  const addTwo=(num1,num2)=>({username:"sneha"})
//  console.log(addTwo(3,4))
//-------------IIFE(Immediately Invoked Function Expressions-----------------
//global scope ke jo pollution se bhi problem hoti hai
(function code(){
    console.log("DB CONNECTED");
})();
// if we have to use two iife to end this we use semicolon
(()=>{
    console.log("DB CONNECTED TWO");
})()



