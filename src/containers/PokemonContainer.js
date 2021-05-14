import React, {useEffect, useState} from 'react';
import PokemonSelect from '../components/PokemonSelect';

const PokemonContainer = () => {
    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null)

    useEffect(() => {
        getPokemon();
    }, [])

    const getPokemon = function() {
        fetch('https://api.pokemontcg.io/v2/cards')
        .then(response => response.json())
        .then(pokemon => setPokemon([pokemon]))
    }

    const onPokemonSelected = function(pokemon){
        setSelectedPokemon(pokemon);
    }

    return (
        <>
        <h3>This is the Pokemon Container</h3>
        <PokemonSelect pokemon={pokemon} onPokemonSelected={onPokemonSelected}/>
        </>
    )
}

export default PokemonContainer;