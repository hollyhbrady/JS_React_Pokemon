import React from 'react';

const PokemonBuddies = ({pokemon}) => {

    const handleClick = function(){
        onPokemonClick(pokemon);
    }

    return (
        <ul>Pokemon buddies</ul>
    )
}

export default PokemonBuddies;