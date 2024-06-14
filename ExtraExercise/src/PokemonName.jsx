import {useState, useEffect} from 'react'

function PokemonName() {

  const [pokemonArry, setPokemonArry] = useState([])

  useEffect(()=>{
    async function fetchPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000')
      const json = await response.json()
      setPokemonArry(json.results)
    } 
    fetchPokemon()
  }, [])

  return(
    <>
      <ul>
       {pokemonArry.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
      </ul>
    </>
  )

}



export default PokemonName

