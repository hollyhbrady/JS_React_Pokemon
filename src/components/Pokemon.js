import React from 'react';

const PokemonBud = ({selectedPokemon}) => {

    return (
        <>
        selectedPokemon ? {selectedPokemon.images.small} : <p>Choose some Pokemon to join you on your journey</p>
        <p>PokemonBud</p>
        </>
    )

}

export default Pokemonbud;