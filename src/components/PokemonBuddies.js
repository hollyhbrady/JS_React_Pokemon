import React from 'react';

const PokemonBuddies = ({pokemon, onPokemonClick, buddyList, setBuddyList}) => {

    const handleClick = function(){
        // const buddyList = []
        onPokemonClick(pokemon);
        if (buddyList < 6) {
            setBuddyList(...buddyList, pokemon)
        // buddyList.push(pokemon)
        } else {
            return `You can only take 6 pokemon on your journey!`;
        }
    }

    return <ul onClick={handleClick}>{buddyList}</ul>
    // <ul onClick={handleClick}>{pokemon.name}</ul>
    
}

export default PokemonBuddies;