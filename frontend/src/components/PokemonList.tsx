import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon } from '../redux/slices/pokemonSlice';
import { RootState, AppDispatch } from '../redux/store';

const PokemonList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {data.map((pokemon) => (
                <li key={pokemon.id}>{pokemon.name}</li>
            ))}
        </ul>
    );
};

export default PokemonList;