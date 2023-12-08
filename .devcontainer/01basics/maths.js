/*const score =400
console.log(score);
const balance =new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2)); 
//-------------------maths--------------------------
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.random());
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)*/
//----------------------date------------
let myCreatedDate =new Date("01-14-2023")
let myDate = new Date()
console.log(myDate);

// let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());//miliseconds 
  
let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday:"long",
})