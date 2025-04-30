export interface Pokemon {
    id?: number;
    name: string;
    height: number;
    number: number;
    health: number;
    weight: number;
    url: string;
}

export interface PokemonState {
    data: Pokemon[];
    loading: boolean;
    error: string | null;
    createdPokemon: Pokemon | null;
    heaviestPokemons: Pokemon[];
}

export interface PokemonFormData {
    name: string;
    weight: number;
    height: number;
    url: string;
    number: number;
    health: number;
}

export interface PokemonModalProps {
    showAddModal: boolean;
    setShowAddModal: (show: boolean) => void;
    formData: PokemonFormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface PokemonListProps {
    pokemons: Pokemon[];
    loading: boolean;
    error: string | null;
  }
