fetchData();

async function fetchData() {

    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        console.log(fetchData);

        if (!response.ok){

        throw new Error("Pokedex bateu mal");
    }

const data = await response.json();
const pokemonSprite = data.sprites.front_default;
const imgElement = document.getElementById("pokemonSprite");

imgElement.src = pokemonSprite;
imgElement.style.display = "block" ; 
imgElement.style.width = "width:800px";

    }
catch(error){

    console.error ();
}

}