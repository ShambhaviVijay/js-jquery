// let arr = [1, 2, 3, 4];
// console.log("value at index 2 is " + arr[2]);
// console.log("array is " + arr);
// console.log(typeof (arr));

// let candi = ["trisha ", 19, "BCA"];
// candi[0] = "prachi"
// console.log("the name of the candidate is " + candi[0] + " she is " + candi[1] + " years old and is from " + candi[2] + " background")
// console.log("candidate details");

// for (i in candi) {
//     console.log(candi[i]);
// }

// array methods ! -----------------------------


// console.log(candi.toString());

// let c = arr.join("-");   //joins array using an operator
// console.log(c);

// arr.pop()// removes the last element from arrya
// console.log(arr);

// let ele = arr.pop(); //returns the popped element
// console.log(ele);

// arr.push(100); // adds value!
// console.log(arr);

// arr.shift()  // removes ele from array starting
// console.log(arr);

// arr.unshift(90)  // adds ele to array starting
// console.log(arr);

// const arr2 = ["trisha", "prachi", "aryan"];
// const arr3 = [19, 21, 17];
// let combo = arr2.concat(arr3);
// for (i in arr2) {
//     console.log("Age of " + arr2 + " is " + arr3 + " respectively.")
// }
// we can concat more than one array!

//  let arr4=[1,2,3,4,5,6,7]
// let ap=arr4.splice(2,3,111,222,333)
// console.log(arr4);  // modifies the given arrray
// console.log(ap);  // returns the deleted element

// let arr5=[3,4,5,6,7,8,0];
// let newarr5= arr5.slice(3);
// console.log(newarr5)  // a new array is created
// console.log(arr5)  //original array stays intact

// for(let i=0;i<arr3.length;i++){
//     console.log(arr3[i])
// }
// arr3.forEach((e)=>{ 
//     console.log("using for each loop "+ e)
// })
// arr3.forEach((e)=>{ 
//     console.log("square is "+ e*e) //to print square of array elements
// })


//--------------------------------------------------------



// console.time("forloop")
// let name101 = "trisha"
// let arr = Array.from(name101)  // to convert array from random objects
// console.log(arr);
// console.timeEnd("forloop")
// // for loops in arrays
// console.time("for in loop")
// let num = [1, 2, 3, 4, 5];
// for (i in num)
//     console.log("using for in " + i)
// console.timeEnd("for in loop")
// for (let i of num) {
//     console.log("using for.. of " + i)
// }


//--------------------------------------------------------------
// map filter and reduce [they do not change the existing arrays]

// map- create a new array from existing array by performing certain operations on them

let arr7=[1,24,67,3]
var a= arr7.map(()=>{
    for (let i in arr7)
    document.write(' ' + arr7[i]*arr7[i])
    return a;
})

// filter : used o filter ele from array
let arr5=[1,2,4,7,34,4,4,2,3,23,5,5];
let a2= arr5.filter((a)=>{
    return a>10;
})
console.log(a2);
console.log(a2, arr5);

// reduce
let arr3=[78,89,56,78]

let red_func=((h1,h2)=>{  //func defination
    return h1+h2;
})
let newarr3=arr3.reduce(red_func)  // func calling
console.log(newarr3)
// reduce returns a single value from array by pperforming the specified function

//---------------------------------------------------
console.clear()

// let age=prompt("enter your age: ");
// if(age<0){
//     console.error("age cannot be negative")
// }

// else
// {let ans=age>18?"can drive":"cannot drive";
// confirm("do you want to enter your age again?")
// console.log(ans)}

//--------------------------------------------------
/*let n=prompt("enter a number")
if(n>=4){
    location.href="https://www.google.com"
}*/


// let color=prompt("enter bg color")
// let fontcolor=prompt("enter font color")
// document.body.style.background=color;
// document.body.style.color=fontcolor;

console

