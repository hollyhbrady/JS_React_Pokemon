import React from 'react';

const PokemonBud = ({buddy}) => {

    

    return (
        // {buddyList} // add forEach?
        buddy ? 
        <img src={buddy.images.small} alt={buddy.name} /> : 
        <p>Choose some Pokemon to join you on your journey!</p>
    )

}

export default PokemonBud;