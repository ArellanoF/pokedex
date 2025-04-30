import PokedexScreenWrapper from "../../styles/pokedexScreen.style";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store"; 
import { fetchHeaviestPokemons } from "../../redux/slices/pokemonSlice";
import PokemonModal from "../../components/PokemonModal";
import { Pokemon, PokemonListProps } from "../../interfaces/pokemonInterface";
import { CardContainer,
  PokemonImage,
  ImagePlaceholder,
  PokemonInfo,
  PokemonName,
  PokemonDetails,
  PokedexFooter } from "../../styles/pokedexCardScreen.style";
import { usePokemonForm } from "../../hooks/usePokemonForm";

// Componente de la tarjeta de Pokémon
const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <CardContainer>
      {pokemon.url ? (
        <PokemonImage src={pokemon.url} alt={pokemon.name} />
      ) : (
        <ImagePlaceholder>?</ImagePlaceholder>
      )}
      <PokemonInfo>
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonDetails>
          <p><strong>Peso:</strong> {pokemon.weight} kg</p>
          <p><strong>Altura:</strong> {pokemon.height} m</p>
          <p><strong>Número:</strong> {pokemon.number}</p>
          <p><strong>Salud:</strong> {pokemon.health}</p>
        </PokemonDetails>
      </PokemonInfo>
    </CardContainer>
  );
};

const PokemonList = ({ pokemons }: PokemonListProps) => {
  if (pokemons.length === 0) return <div className="empty_state">No hay Pokémon registrados.</div>;

  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  );
};

const PokedexScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [showAddModal, setShowAddModal] = useState(false);
  const { heaviestPokemons, loading, error } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    dispatch(fetchHeaviestPokemons());
  }, [dispatch]);

  const handleAddPokemon = () => setShowAddModal(true);

  const handleSuccess = () => {
    setShowAddModal(false);
    setTimeout(() => alert('¡Pokémon creado exitosamente!'), 10);
  };

  const { formData, handleInputChange, handleSubmit } = usePokemonForm(handleSuccess);

  return (
    <PokedexScreenWrapper>
      <div className="actions_container">
        <img
          src="/assets/images/add_btn.png"
          className="action_img"
          onClick={handleAddPokemon}
          alt="Agregar Pokémon"
        />
      </div>

      <div className="title_section">
        <h2>Pokédex de Impackta</h2>
        <p>Los 25 Pokémon más pesados</p>
      </div>

      <div className="pokedex_container">
        <PokemonList pokemons={heaviestPokemons} loading={loading} error={error} />
      </div>

      <PokedexFooter>
        <p>Francesc Arellano Cachopo 2025</p>
      </PokedexFooter>

      {showAddModal && (
        <PokemonModal
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}
    </PokedexScreenWrapper>
  );
};

export default PokedexScreen;