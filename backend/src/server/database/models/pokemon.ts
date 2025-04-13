import { DataTypes } from "sequelize";
import { db } from "../../config/db";
const Pokemon = db.define(
  "pokemon",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    height: { type: DataTypes.FLOAT, allowNull: false },
    number: { type: DataTypes.INTEGER, allowNull: false },
    health: { type: DataTypes.INTEGER, allowNull: false },
    weight: { type: DataTypes.FLOAT, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false },
  },
  { hooks: {} }
);
export default Pokemon;
