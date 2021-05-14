import React from 'react';

const PokemonSelect = ({pokemon, onPokemonSelected}) => {

    const handleChange = function(event) {
        const chosenPokemon = pokemon[event.target.value];
        onPokemonSelected(chosenPokemon)
    }

    const pokemonOptions = pokemon.map((pokemon, index) => {
        return <option key={index}>{pokemon.name}</option>
    });

    return (
        <select defaultValue="" >
            <option value="" selected>Choose a Pokemon</option>
            {pokemonOptions}
        </select>
    )
};

export default PokemonSelect;