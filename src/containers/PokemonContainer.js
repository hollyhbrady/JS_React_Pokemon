import React, {useState} from 'react';

const PokemonContainer = () => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = function() {
        fetch('https://api.pokemontcg.io/v2/cards')
        .then(response => response.json())
        .then(pokemon => setPokemon(pokemon))
    }


    return (
        <>
        <h3>This is the Pokemon Container</h3>
        {pokemon.name}
        </>
    )
}

export default PokemonContainer;