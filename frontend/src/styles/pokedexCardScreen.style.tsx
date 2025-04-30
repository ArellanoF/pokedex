import styled from 'styled-components';

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

export {
    CardContainer,
    PokemonImage,
    ImagePlaceholder,
    PokemonInfo,
    PokemonName,
    PokemonDetails,
    PokedexFooter,
  };