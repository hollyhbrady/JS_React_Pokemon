import React, {useEffect, useState} from 'react';
import PokemonSelect from '../components/PokemonSelect';
import PokemonBuddies from '../components/PokemonBuddies';
import PokemonBud from '../components/PokemonBud';

const PokemonContainer = () => {
    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const [buddyList, setBuddyList] = useState(null)

    useEffect(() => {
        getPokemon();
    }, [])

    const getPokemon = function() {
        fetch('https://api.pokemontcg.io/v2/cards')
        .then(response => response.json())
        .then(pokemon => setPokemon(pokemon.data))
    }

    const onPokemonSelected = function(pokemon){
        setSelectedPokemon(pokemon)
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
        <PokemonBud 
        selectedPokemon={selectedPokemon}/>
        </>
    )
}

export default PokemonContainer;