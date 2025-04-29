import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Acción asíncrona para obtener los Pokémon más pesados del backend
export const fetchHeaviestPokemons = createAsyncThunk('pokemons/fetchHeaviestPokemons', async () => {
    const response = await fetch('http://localhost:7768/pokemons/heaviest'); 
    if (!response.ok) {
        throw new Error('Error al obtener los datos');
    }

    const json = await response.json();
    console.log(json.data);
    return json.data; // 👈 Solo retorna el array que necesitas
});

// Acción asíncrona para crear un nuevo Pokémon
export const createNewPokemon = createAsyncThunk(
    'pokemon/createNewPokemon',
    async (pokemonData: any) => {
        const response = await fetch('http://localhost:7768/pokemon/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pokemonData),
        });
        
        if (!response.ok) {
            throw new Error('Error al crear el Pokémon');
        }
        
        const data = await response.json();
        return data; 
      
    }
);
export interface Pokemon {
    id: number;
    name: string;
    height: number;
    number: number;
    health: number;
    weight: number;
    url: string;
  }

interface PokemonState {
    data: any[];
    loading: boolean;
    error: string | null;
    createdPokemon: any | null;
    heaviestPokemons: Pokemon[];
}

const initialState: PokemonState = {
    data: [],
    loading: false,
    error: null,
    createdPokemon: null,
    heaviestPokemons: [], 
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        clearCreatedPokemon: (state) => {
            state.createdPokemon = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Casos para fetchHeaviestPokemons
            .addCase(fetchHeaviestPokemons.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHeaviestPokemons.fulfilled, (state, action) => {
                state.loading = false;
                state.heaviestPokemons = action.payload; 
            })
            .addCase(fetchHeaviestPokemons.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Error al cargar los datos';
            })
            
            //Casos para createNewPokemon
            .addCase(createNewPokemon.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createNewPokemon.fulfilled, (state, action) => {
                state.loading = false;
                state.createdPokemon = action.payload.data;
                // Opcionalmente, también podemos añadir el Pokémon creado al array de datos
                if (action.payload.data) {
                    state.data = [...state.data, action.payload.data];
                }
            })
            .addCase(createNewPokemon.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Error al crear el Pokémon';
            });
    },
});

export const { clearCreatedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;