const pokemonList = [
    { name: "Bulbasaur", id: 1, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", description: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon." },
    { name: "Ivysaur", id: 2, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png", description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs." },
    { name: "Venusaur", id: 3, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png", description: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight." },
    // Continuar con los demás Pokémon
    { name: "Gyarados", id: 130, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png", description: "Once it appears, its rage never settles until it has razed the fields and mountains around it." },
    { name: "Lapras", id: 131, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png", description: "A Pokémon that has been overhunted almost to extinction. It can ferry people across the water." },
    { name: "Ditto", id: 132, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png", description: "It can transform into anything. When it sleeps, it changes into a stone to avoid being attacked." },
    // Nuevos Pokémon
    { name: "Eevee", id: 133, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png", description: "Its genetic code is irregular. It may mutate if it is exposed to radiation from element Stones." },
    { name: "Vaporeon", id: 134, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png", description: "Its cell composition is similar to water molecules. As a result, it can melt away into water." },
    { name: "Jolteon", id: 135, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png", description: "It accumulates negative ions in the atmosphere to blast out 10000-volt lightning bolts." },
    { name: "Flareon", id: 136, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png", description: "When it catches prey or finds berries, it breathes fire on them until they're well done, and then it gobbles them up." },
    { name: "Porygon", id: 137, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png", description: "A Pokémon that consists entirely of programming code. It is capable of moving freely in cyberspace." },
];

const pokemonListElement = document.getElementById("pokemon-list");
const pokemonDetailsElement = document.getElementById("pokemon-details");

function renderPokemonList() {
    pokemonList.slice(0, 30).forEach(pokemon => {
        const listItem = document.createElement("li");
        listItem.textContent = pokemon.name;
        listItem.addEventListener("click", () => showPokemonDetails(pokemon));
        pokemonListElement.appendChild(listItem);
    });
}

function showPokemonDetails(pokemon) {
    pokemonDetailsElement.innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.image}" alt="${pokemon.name}">
        <p>${pokemon.description}</p>
    `;
}

renderPokemonList();