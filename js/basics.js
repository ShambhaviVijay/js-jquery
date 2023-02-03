/*var a,b,c;
a=34
b=0
c=a/b; // expression i.e, combination of words , operators ,values and varables.
document.write(c);*/


/*function average() {
    console.log("button clicked");
    var n = 90;
    var p = 21;
    var b = 90;
    var avg = (n + p + b) / 3;
    // document.write(avg)
    document.getElementById("div").innerHTML = avg;
    // console.log(' ' +avg)

}
average();

function domm() {
    console.log("entered dom function..");
    let person = [
        { firstname: "john", secondname: "mayer", address: "california" },
        { firstname: "susan", secondname: "mathew", address: "london" },
        { firstname: "samantha", secondname: "williams", address: "huston" },
    ]
    JSON.stringify(person);
    console.table(person);
    document.getElementById("details").innerHTML = JSON.stringify(person);
}
domm();

let a = "trisha";
let num = 45;
let c = a + num;
document.write(c);
document.write(' ' + typeof (c));

const ab = "apple";   // const variables cant have diff variables.
// const ab= 45;
// console.log(ab);
let k = ab + num;
document.write(' ' + k);


const dict =
{
    pink: "a color",
    laptop: "a device",
    bts: "biggest boy band",
    cake: "a type of dessert",
    food: "smt we eat"
}

console.log(dict.pink)
document.write(' ' + dict.pink);

dict["happiness"] = "an expression of joy "; // adding elements into object !
document.write(' ' + dict.happiness);
console.log(dict.happiness)

*/
// let age = prompt("what is your age")  //to take input from user
// if (age > 10 && age <20) {
//     document.write("barrier crossed!")
//     document.write("your age lies between 10 and 20...")
// }

// let coc = prompt("choose a number ");
// coc=Number.parseInt(coc); // to convert coc form string into int 
// switch (coc) {
//     case 1:
//         document.write('    ' + "one");
//         break;
//     case 2:
//         document.write('    ' + "two..");
//         break;
//     case 3:
//         document.write('    ' + "three");
//         break;
//     default:
//         document.write('    ' + "default");
//         break;




//}
// let num1= prompt("enter a number to check divisibility by 6!")
// if(num1%2==0 && num1%3 ==0){
//     document.write(' '+"..It is a multiple of 6!")
// }
// else{
//     document.write(' '+"..It is not a multiple of 6!")

// }



// let num2= prompt("enter a number to check divisibility by 2 or 3!")
// if(num2%2==0 || num2%3 ==0){
//     document.write(' '+"..It is divisible!")
// }
// else{
//     document.write(' '+"..It is not a divisible!")

// }




// let age= prompt("your age?" );
// let permission=  age>18?"can drive":"cannot drive..";
// document.write(permission);

const student = {
    trisha: 99,
    pachi: 88,
    aryan: 89
}
// 

// using for in loop
for (let key in student) {
    document.write(" the marks of " + key + " are " + student[key])
}


// guessing game

/*let answer=1
answer=Number.parseInt(answer);
let i
while(i!=answer){
   i= prompt("enter your choice!");
    
}
document.write(' ' + "correct..");*/
// const mean =(a,b,c,d)=>{
//     return (a+b+c+d)/4;


// }
// document.write('  ' + "...the mean is " + mean(2,3,4,5));

// console.log("trisha\"".length) // this will print the length of the string 
// let name1="trisha";
// console.log(name1.includes("t"));  // true: since trisha contains "t"
//  let name2="harrish"
//  console.log(name2.startsWith("par"));
//  console.log(name2.endsWith("ish"));
//  console.log(name2.toUpperCase());

//  //----------imp------------------- slice()------------

//  let str="please give rs 1000"
//  //let amt= Number.parseInt(str.slice("please give rs ".length))
//  let amt= Number.parseInt(str.slice(15))

//  console.log(amt);
//  console.log(typeof(amt));

//--------------------------------------------------------

console.log(console)

console.assert(290 > 34)
console.clear()





