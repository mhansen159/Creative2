document.getElementById("pokemonSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("pokemonInput").value;
  if (value === "")
    return;
  console.log(value);


const url = "http://pokeapi.co/api/v2/pokemon/" + value;
  fetch(url, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json); 
    
      let results = "";
      results += "<div>" + json.species.name + "<br><img src=\"" + json.sprites.front_default + "\"/><img src=\"" + json.sprites.front_shiny + "\"/>";
      results += "<br>ID: " + json.id + "<br>Height: " + json.height + "<br>Weight: " + json.weight;

      results += "<br>Types: ";
      for (let i=0; i < json.types.length; i++) {
	results += json.types[i].type.name;
	if (i !== json.types.length - 1)
	  results += ", ";
      }
      results += "</div>";

      document.getElementById("pokemonResults").innerHTML = results;
    });
});
