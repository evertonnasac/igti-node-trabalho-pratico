import express from "express"
import donoController from "../controllers/dono-controller.js"

const donoRoute = express.Router()

donoRoute.post("/", donoController.cadastrarDono )
donoRoute.get("/", donoController.buscarDonos)
donoRoute.post("/:id", donoController.atualizarDono)
donoRoute.get("/buscar/:id", donoController.buscarDonoPorId)
donoRoute.get("/cadastrar", donoController.donoForm)

export {donoRoute}