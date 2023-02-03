let url = "https://catfact.ninja/fact"
let response = fetch(url)

response.then((v) => {
  return v.json()   // the api content represented as v will come in the form of javascript object!
}).then((facts) => {
  console.log(facts)
  iHtml = " "
  for (item in facts) {
    console.log(facts[item])
    iHtml += `
    <div class="card">
     <div class="card-body">
 

      <h3 class="card-title">${facts[item].fact}</h3> <!--- fact is being rendered as undefined because the json object has not been converted into string.--->
      <h3 class="card-title">${facts[item].length}</h3>
 <a href="#" class="btn btn-primary">Go somewhere</a> 
    </div>
  </div>
        `
  }
  
  cardcontainer.innerHTML = iHtml
})
// let cardcontainer = document.getElementById("cardcontainer")

