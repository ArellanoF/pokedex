import express from "express";

import { exampleFunction } from "../controllers/exampleController";
import { getHeaviestPokemons, createPokemon } from "../controllers/pokemonController";

const exampleRoutes = express.Router();

exampleRoutes.get("/example", exampleFunction);
exampleRoutes.get("/pokemons/heaviest", getHeaviestPokemons);
exampleRoutes.post("/pokemon/create", createPokemon);

export default exampleRoutes;
