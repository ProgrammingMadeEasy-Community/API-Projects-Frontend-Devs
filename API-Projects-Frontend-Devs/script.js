

const quote = document.querySelector(".quote");
const btn = document.querySelector(".btn-lg");
const url = "https://api.gameofthronesquotes.xyz/v1/random/5/";

btn.addEventListener("click", getQuote);


function getQuote(){
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    quote.innerHTML = data[0].sentence;
  });
}