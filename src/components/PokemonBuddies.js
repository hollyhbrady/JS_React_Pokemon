import React from 'react';

const PokemonBuddies = ({pokemon, onPokemonClick}) => {

    const handleClick = function(){
        onPokemonClick(pokemon);
    }

    return <ul onClick={handleClick}>{pokemon.name}</ul>
    
}

export default PokemonBuddies;