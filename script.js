const searchInput = document.getElementById("search-input");
const form = document.getElementById("form");
const pokemonName = document.getElementById("pokemon-name");
const pokemonID = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const imageContainer = document.getElementById("image");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const pokemonSearch = async () => {
  try {
    const nameOrId = searchInput.value.toLowerCase()
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`);
    const data = await res.json()

    pokemonName.textContent = `${data.name.toUpperCase()}`;
    pokemonID.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    
    imageContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="image of ${data.name}">`;
    types.innerHTML = "";
    types.innerHTML = data.types.map((el) => 
      `<span class="type ${el.type.name}">${el.type.name.toUpperCase()}</span>`
    ).join("");

    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    searchInput.value = "";
  } catch (err) {
    alert("Pokémon not found");
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  pokemonSearch();
});