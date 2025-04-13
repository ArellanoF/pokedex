import express from "express";

import { exampleFunction } from "../controllers/exampleController";

const exampleRoutes = express.Router();

exampleRoutes.get("/example", exampleFunction);

export default exampleRoutes;
