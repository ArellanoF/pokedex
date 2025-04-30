// hooks/usePokemonForm.ts
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewPokemon } from '../redux/slices/pokemonSlice';
import type { AppDispatch } from '../redux/store'
import { PokemonFormData } from '../interfaces/pokemonInterface';

export const usePokemonForm = (onSuccess: () => void) => {
    const dispatch = useDispatch<AppDispatch>(); 
    const [formData, setFormData] = useState<PokemonFormData>({
        name: '',
        weight: 0,
        height: 0,
        url: '',
        number: 0,
        health: 0,
      });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'name' || name === 'url' ? value : Number(value),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createNewPokemon(formData))
      .unwrap()
      .then(() => {
        setFormData({ name: '', weight: 0, height: 0, url: '', number: 0, health: 0 });
        onSuccess();
      })
      .catch((error) => {
        const errorMessage = error.message ? error.message : 'No se pudo crear el Pokémon';
        alert(errorMessage);
      });
  };

  return { formData, handleInputChange, handleSubmit };
};