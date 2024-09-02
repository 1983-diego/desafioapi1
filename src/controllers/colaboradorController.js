import colaborador from "../models/colaborador.js";

class ColaboradorController {

    static async listarColaboradores (req, res) {
        try {
            const listaColaboradores = await colaborador.find({})
            return res.status(200).json(listaColaboradores)
        }
         catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - erro na requisição` });
        }
    }
    
    static async listarColaboradorPorID (req, res) {
        try {
            const colaboradorPorID = await colaborador.findById(req.params.id)
            return res.status(200).json(colaboradorPorID)
        }
         catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - erro na requisição` });
        }
    }

    static async cadastrarColaborador (req, res) {
        try {
            const novoColaborador = await colaborador.create(req.body)
            res.status(201).json({message: "Criado com sucesso", novoColaborador})
        } catch (error) {
            res.status(500)
                .json({ message: `${error.message} - erro na requisição` });
        }
    }

    static async atualizarColaboradorPorID (req, res) {
        try {
            const id = req.params.id
            const colaboradorAtualizado = await colaborador.findByIdAndUpdate(id, req.body)
            return res.status(200).json({message: "Criado com sucesso", colaboradorAtualizado})
        }
         catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - erro na requisição` });
        }
    }

    static async excluirColaboradorPorID (req, res) {
        try {
            const id = req.params.id
            await colaborador.findByIdAndDelete(id)
            return res.status(203).json({message: "Colaborador excluído"})
        }
         catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - erro na requisição` });
        }
    }
}

export default ColaboradorController