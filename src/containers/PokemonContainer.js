import React, {useEffect, useState} from 'react';
import PokemonSelect from '../components/PokemonSelect';
import PokemonBuddies from '../components/PokemonBuddies';
import PokemonBud from '../components/PokemonBud';

const PokemonContainer = () => {
    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const [buddyList, setBuddyList] = useState([])

    useEffect(() => {
        getPokemon();
    }, [])

    const getPokemon = function() {
        fetch('https://api.pokemontcg.io/v2/cards')
        .then(response => response.json())
        .then(pokemon => setPokemon(pokemon.data))
    }

    const onPokemonSelected = function(pokemon){
        console.log(pokemon)
        setSelectedPokemon(pokemon)
        if (buddyList.length < 6) {
            setBuddyList([...buddyList, pokemon])
        // buddyList.push(pokemon)
        } else {
            return `You can only take 6 pokemon on your journey!`;
        }
    }

    return (
        <>
        <PokemonSelect 
        pokemon={pokemon} 
        onPokemonSelected={onPokemonSelected}/> 
        <br /><br />
        <PokemonBuddies 
        pokemon={pokemon} 
        buddyList={buddyList} 
        setBuddyList={setBuddyList}/>
        {/* <PokemonBud 
        selectedPokemon={selectedPokemon}/> */}
        </>
    )
}

export default PokemonContainer;