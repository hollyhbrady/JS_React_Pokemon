import React from 'react';

const PokemonBud = ({selectedPokemon}) => {

    return (
        selectedPokemon ? 
        <img src={selectedPokemon.images.small} alt={selectedPokemon.name} /> : 
        <p>Choose some Pokemon to join you on your journey</p>
    )

}

export default PokemonBud;