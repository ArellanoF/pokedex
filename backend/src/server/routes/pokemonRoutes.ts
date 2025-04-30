import express from "express";

import { getHeaviestPokemons, createPokemon } from "../controllers/pokemonController";

const pokemonRoutes = express.Router();

pokemonRoutes.get("/pokemons/heaviest", getHeaviestPokemons);
pokemonRoutes.post("/pokemon/create", createPokemon);

export default pokemonRoutes;
