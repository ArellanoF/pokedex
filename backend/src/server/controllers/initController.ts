import Pokemon from "../database/models/pokemon";
const init =  async () => {
  try {
    const pokemonAuxArray = [];
    for (let i = 1; i <= 152; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      const pokemon = await Pokemon.create({
        nombre: data.name,
        url: data.sprites.other["official-artwork"].front_default,
        weight: data.weight,
        height: data.height,
        number: data.order,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export default init;