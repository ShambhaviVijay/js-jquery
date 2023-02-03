//promise
 function newpromise() {
     return new Promise(function (resolve, reject) {
         setTimeout(function () {
             const error = false; // if true error will occur
             if (!error) {
                 console.log('promise resolved')
                 resolve()
             }
             else {
                 console.log('error!')
                 reject("can't resolve your query!")
             }
         }, 00);
     });
 }

newpromise().then(function () {
    console.log("thanking you to resolve query!");
}).catch(function () {
    console.log("working  on it..!");
});

// // -------------------------

 let mybtn = document.getElementById("btn0");
 let content = document.getElementById("content")
 function getdata() {      
         console.log("fetching...");
         url = "task.txt";
         fetch(url).then((response) => {
             console.log("inside first then...");
             return response.text();
         }).then((data) => {
             console.log("inside second then...");
             console.log(data);     
     })
 }
 getdata();
 console.log("done..")


 //---------------------
 // using fetch api to bring data from a dummy api
 function bringdata(){
     url="https://api.github.com/users";
     fetch(url).then((response)=>{
         console.log("inside fetch...");
         return response.json();
     }).then((data)=>{
         console.log(data);
     })
 }
 bringdata();
 console.log("data is here");

//------------------------
// using fetch to post data on using dummy api
function postdata(){
url="http://dummy.restapiexample.com/api/v1/create";
data='{"name":"trisha01","salary":"120000","age":"19"}'
params={
    method:'post',
    headers:{
        'content-Type':'application/json'
    },
    body:data
}
console.log("KIM NAM JOOOOOON!")
fetch(url,params).then(response=>response.json())
.then(data=>console.log(data)
)
console.log("done!")
}
postdata();

//_______
// assync await
async function asyncdemo(){
    console.log("inside function...");
    const response=await fetch('https://api.github.com/users');
    console.log("before response..");
    const user=await response.json();
    console.log(" resolved..");
    return user;

}
let a= asyncdemo();
console.log(a);
a.then(data=>console.log(data))
console.log("end of file..")