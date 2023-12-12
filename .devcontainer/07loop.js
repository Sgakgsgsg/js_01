// For of loop ('jab ek array mei bahut srae object ho)
//["","",""]
//[{},{},{}]
// const greetings="hello world!"
// for(const greet of greetings){
//     console.log(`Each chair is ${greet}`)
// }
//-------------maps--------
// unique values and there is some order we follow
// const map= new Map()
// map.set('IN',"india")

// map.set('Fr',"france")
// console.log(map);
//----------- for in------(use for object)
// it will print all the keys
// const programming=["js","rb","py","java","cpp"]
// for (const key in programming){
//     console.log(key);
// }
//------for each loop---
// const coding=["c++","python","java","js"]
// coding.forEach ((item)=>{
//     console.log(item);
// })
// //-----filter------------
// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num)=>num>4)
// console.log(newNums);
//------------reduce---------
const myNums=[1,2,3]
const myTotal =myNums.reduce(function(acc,currval){
    return acc+currval
},0)
console.log(myTotal);


