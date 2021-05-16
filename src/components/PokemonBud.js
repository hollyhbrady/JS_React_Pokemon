import React from 'react';

const PokemonBud = ({buddyList}) => {

    

    return (
        // {buddyList} // add forEach?
        buddyList ? 
        <img src={buddyList.pokemon.images.small} alt={buddyList.pokemon.name} /> : 
        <p>Choose some Pokemon to join you on your journey!</p>
    )

}

export default PokemonBud;