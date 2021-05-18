import React from 'react';
import PokemonBud from './PokemonBud'

const PokemonBuddies = ({pokemon, onPokemonClick, buddyList, setBuddyList}) => {

    const handleClick = function(){
        // const buddyList = []
        onPokemonClick(pokemon);
        // if (buddyList < 6) {
        //     setBuddyList(...buddyList, pokemon)
        // // buddyList.push(pokemon)
        // } else {
        //     return `You can only take 6 pokemon on your journey!`;
        // }
    }

    const pokemonItem = buddyList.map (currentBuddy => {
        return <PokemonBud buddy={currentBuddy}/>
    })

    return <ul onClick={handleClick}>{pokemonItem}</ul>
    // <ul onClick={handleClick}>{pokemon.name}</ul>
    
}

export default PokemonBuddies;