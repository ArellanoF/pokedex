import { Response, Request } from "express";
import Pokemon from "../database/models/pokemon";

/**
 * Obtiene los 25 Pokémon más pesados de la base de datos
 * @param {Request} req - Objeto de solicitud Express
 * @param {Response} res - Objeto de respuesta Express
 */
const getHeaviestPokemons = async (req: Request, res: Response) => {
  try {
    // Buscamos los 25 Pokémon más pesados
    const heaviestPokemons = await Pokemon.findAll({
      order: [['weight', 'DESC']],
      limit: 25,
    });
    console.log(heaviestPokemons)
    // Si no hay Pokémon registrados, devolvemos un mensaje
    if (heaviestPokemons.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'No hay Pokémon registrados en la base de datos' 
      });
    }
    // Devolvemos los Pokémon
    return res.status(200).json({ 
      success: true, 
      data: heaviestPokemons,
      count: heaviestPokemons.length 
    });
  } catch (error) {
    console.error('Error al obtener los Pokémon más pesados:', error);
  }
};

/**
 * Inserta un nuevo Pokémon en la base de datos
 * @param {Request} req - Objeto de solicitud Express
 * @param {Response} res - Objeto de respuesta Express
 */
const createPokemon = async (req: Request, res: Response) => {
  try {
    const { name, url, weight, height, number, health } = req.body;
    // Validamos que se proporcionen los campos requeridos
    if (!name || !weight || !height) {
      return res.status(400).json({ 
        success: false, 
        message: 'Se requieren los campos: name, weight y height' 
      });
    }
    
    // Creamos el nuevo Pokémon
    const newPokemon = await Pokemon.create({
      name,
      url,
      weight,
      height,
      number,
      health: health || 100
    });
    
    return res.status(201).json({ 
      success: true, 
      data: newPokemon,
      message: 'Pokémon creado exitosamente',
    });
    
  } catch (error) {
    console.error('Error al crear Pokémon:', error);
  }
};


export { getHeaviestPokemons, createPokemon};