import express from "express";
import animalController from "../controllers/animal-controller.js";

const animalRoute = express.Router()

animalRoute.post("/", animalController.cadastrarAnimal) 
animalRoute.post("/:id", animalController.atualizarAnimal)
animalRoute.get("/", animalController.buscarAnimais )
animalRoute.get("/:id", animalController.buscarAnimalPorId)

export  {animalRoute}