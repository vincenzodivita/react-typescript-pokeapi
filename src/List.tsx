import React, { useState, useEffect } from 'react';

interface Pokemon {
  name: string;
  url: string;
  id: string;
}

const List: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  pokemonList.map((pokemon) => {pokemon.id = pokemon.url.slice(34,-1); pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)});

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151');
        if (!response.ok) {
          throw new Error('Errore nella richiesta');
        }

        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
      }
    };

    fetchPokemon();
    
  }, []); 

  return (
    <div>
      <h1>Lista Pokémon di Kanto</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>#{pokemon.id} {pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List