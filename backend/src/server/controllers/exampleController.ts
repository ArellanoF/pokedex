import { Response, Request } from "express";
import Pokemon from "../database/models/pokemon";

const exampleFunction = async (req: Request, res: Response) => {

  try {
    const pokemonAuxArray = [];
    for (let i = 1; i <= 151; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      const pokemon = await Pokemon.create({
        name: data.name,
        url: data.sprites.other["official-artwork"].front_default,
        weight: data.weight,
        height: data.height,
        number: data.order,
        health: 100
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { exampleFunction };
