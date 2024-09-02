import express from "express"
import ColaboradorController from "../controllers/colaboradorController.js"

const routes = express.Router()

routes.get("/colaboradores", ColaboradorController.listarColaboradores)
routes.get("/colaboradores/:id", ColaboradorController.listarColaboradorPorID)
routes.post("/colaboradores", ColaboradorController.cadastrarColaborador)
routes.put("/colaboradores/:id", ColaboradorController.atualizarColaboradorPorID)
routes.delete("/colaboradores/:id", ColaboradorController.excluirColaboradorPorID)

export default routes