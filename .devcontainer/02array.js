//in javascript arrays are resizeable and also we can store any type of datatype
// javascript creates shallow copies(whose properties share the same refrences)
const myArr=[0,1,2,3,4]
//const myArr=["monica","chandler","rachel"]
const myArr2=new Array(1,2,3,4)
console.log(myArr2[0]);
myArr2.push(7);
console.log(myArr2);
//by using shift we can remove 0 index element
//by using unshift we can add at 0 th index
myArr2.unshift(9)
myArr2.shift()
console.log(myArr2);
//join combine kr raha hai or string mei convert kar raha hai
//slice:- range ka last wala digit add nhi hoga 
//splice :- add hoga