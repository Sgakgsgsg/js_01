// singleton(constructor se banega to )
//literal se nhi banega [Object.create]
//object literals
// .
// console.log(JsUser.email)
// console.log(JsUser["email"])

// //when we use freeze it will not propogate its value and also not to show any error
// Object.freeze(JsUser)
// JsUser.greeting = function(){
//     console.log("Hello js user");
// }
// console.log(JsUser.greeting);
//if we use JsUser.greeting->it will not execute only refrence()or we use JsUser.greeting()
//const tinderUser=new Object(),singleton
// const tinderUser={}
// //it will show same output as previous one->{},non singleton 

// console.log(tinderUser);
// we can use nested object
// const regularUser={
//     fullname :{
//         userfullname:{
//             firstname:"sneha",
//             lastname:"gupta"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname);
//merging of object
// const obj1={ 1:"a",2:"b"}
// const obj2={3:"a",4:"b"}

// // //object.assign({},obj1,obj2)
// // const obj3=Object.assign({},obj1,obj2)
// // console.log(obj3);
// //spreading 
// const obj3={...obj1,...obj2}
// console.log(obj3);
// array mei bahut sare objetc hai

// const users=[
//     {
//         id:1,
//         email:"sneha@gmail.com"
//     },
//     {
//         id:2,
//         email:"gupta@gmail.com"
//     },
// ]
// console.log(users[1].email)
// console.log(Object.keys(tinderUser));[all keys in array]
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));[key,value]
//--------object destructure------------
// const course={
//     coursename:"js",
//     price:"999",
//     cousreInstructor:"h"
// }
// //course.courseInstructor
// //->another syntax
// const {price:apnehisabsenaam}=course;
// console.log(apnehisabsenaam);
// //console.log(apnehisabsenaam);
// // we do in react destructure
// const navbar=({company})=>{

// }

// navbar(company="login")
// array method , object method
