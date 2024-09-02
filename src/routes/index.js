import express from "express"
import colaboradores from "./colaboradoresRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("API sistema de colaboradores")
    })
    app.use(express.json(), colaboradores)
}

export default routes