import mongoose from "mongoose";

const colaboradorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    departamento: {type: String, required: true},
    cargo: {type: String, required: true}
}, {versionKey: false})

const colaborador = mongoose.model("colaboradores", colaboradorSchema)

export default colaborador