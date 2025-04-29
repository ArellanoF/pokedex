import PokedexScreenWrapper from "./pokedexScreen.style";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store"; 
import { fetchHeaviestPokemons, createNewPokemon } from "../../redux/slices/pokemonSlice";
import styled from 'styled-components';
import PokemonModal from "../../components/PokemonModal";

// Define the interface for the Pokemon type
interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  url: string;
  number: number;
  health: number;
}


const CardContainer = styled.div`
  width: calc(20% - 16px); // 5 tarjetas por fila
  margin: 8px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  /* Card con borde coloreado según tipo de Pokemon (se puede implementar después) */
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3c5aa6, #2a75bb);
  }

  @media (max-width: 1200px) {
    width: calc(25% - 16px); // 4 tarjetas por fila
  }

  @media (max-width: 900px) {
    width: calc(33.33% - 16px); // 3 tarjetas por fila
  }
  
  @media (max-width: 700px) {
    width: calc(50% - 16px); // 2 tarjetas por fila
  }

  @media (max-width: 480px) {
    width: calc(100% - 16px); // 1 tarjeta por fila
  }
`;

const PokemonImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: contain;
  background-color: #f8f8f8;
  padding: 15px 0;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 171px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  background-color: #f8f8f8;
  color: #cccccc;
`;

const PokemonInfo = styled.div`
  padding: 12px;
  text-align: center;
  background-color: white;
`;

const PokemonName = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin: 0 0 6px 0;
  font-family: 'pokemon', sans-serif;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: 100;
`;

const PokemonDetails = styled.div`
  font-size: 0.85rem;
  color: #666;
  
  p {
    margin: 4px 0;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }
  
  strong {
    color: #3c5aa6;
  }
`;

const PokedexFooter = styled.div`
    display: flex;
    color: white;
    justify-content: center;
`;

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
const PokedexScreen = () => {
  // Usamos useDispatch para enviar acciones a Redux
  const dispatch = useDispatch<AppDispatch>();
  
  // Obtenemos el estado de los Pokémon desde Redux
  const { heaviestPokemons, loading, error } = useSelector((state: RootState) => state.pokemon);

  // Cargamos los Pokémon más pesados cuando el componente se monta
  useEffect(() => {
    dispatch(fetchHeaviestPokemons());
  }, [dispatch]);

  // Estado para controlar la visualización de un modal de agregar Pokémon (opcional)
  const [showAddModal, setShowAddModal] = useState(false);

  // Manejador para abrir el modal de agregar Pokémon
  const handleAddPokemon = () => {
    setShowAddModal(true);
  };

  const [formData, setFormData] = useState({
    name: '',
    weight: 0,
    height: 0,
    url: '',
    number: 0,
    health: 0
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'name' || name === 'url' ? value : Number(value)
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createNewPokemon(formData))
        .unwrap()
        .then(() => {
            setShowAddModal(false);
            setFormData({
              name: '',
              weight: 0,
              height: 0,
              url: '',
              number: 0,
              health: 0
          });
            setTimeout(() => {
                alert('¡Pokémon creado exitosamente!');
            }, 10); 
        })
        .catch((error) => {
            setShowAddModal(false); // También podrías cerrar el modal en caso de error
            setTimeout(() => {
                alert(`Error: ${error.message || 'No se pudo crear el Pokémon'}`);
            }, 10);
        });
};



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
        {loading ? (
          <div className="loading_spinner">Cargando Pokémon...</div>
        ) : error ? (
          <div className="error_message">
            Error al cargar los Pokémon: {error}
          </div>
        ) : heaviestPokemons.length > 0 ? (
          <>
            {heaviestPokemons.map((pokemon) => {
            return (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            );
          })}
          </>
        ) : (
          <div className="empty_state">
            No hay Pokémon registrados en la base de datos.
          </div>
        )}
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