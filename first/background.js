let heading=document.querySelector("h1");

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
   let random=generaterandom();
   let quote=data[random].text;
  heading.textContent=quote;
  });

  function generaterandom(){
      var random=Math.floor(Math.random()*1643);
      return random;
  }