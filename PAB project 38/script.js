const pokeContainer = document.querySelector('.poke-container');
const pokeCount = 9; // Number of Pokémon to display
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};

// Function to fetch Pokémon data
const fetchPokemon = async () => {
    for (let i = 1; i <= pokeCount; i++) {
        await getPokemon(i);
    }
};

// Function to get a single Pokémon
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);
};

// Function to create a Pokémon card
const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name;
    const id = pokemon.id.toString().padStart(3, '0');
    const pokeTypes = pokemon.types.map(type => type.type.name);
    const type = pokeTypes[0];
    const color = colors[type] || '#DEFDE0';

    pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

    pokemonEl.innerHTML = pokemonInnerHTML;
    pokeContainer.appendChild(pokemonEl);
};

// Fetch and display Pokémon
fetchPokemon();
