// function sayMyName(){
//     //function scope


// }
// sayMyName->Reference
// sayMyName()->execution
//  function addTwoNumber(number1,number2){
//     console.log(number1+number2);
//  }
//  addTwoNumber(2,4)
//  addTwoNumber(2,"3")
//  addTwoNumber("3",2)
//  function addTwoNumber(number1,number2){
//     return number1+number2;
//  }
// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("sneha"))
// rest (put into in a bumdle)and spread we can use it by using three dots.

// function CalculateCartPrice(...num1){
//     return num1
// }
//  console.log(CalculateCartPrice(200,400,500))
//how we can pass the object in the fuchtion
const user={
    username:"sneha",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)
