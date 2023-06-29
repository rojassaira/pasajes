import bd from "../basedatos.js";

const httpClientes = {
    getclientes:async (req, res) => {
        res.json(bd.cliente)
    },
    getClienteCedula:async (req, res) => {
        const { cedula } = req.params
        const cliente1 = bd.cliente.find(cliente1 => cliente1.cc == cedula)
        if (existe == undefined) res.status(400).json({ error: "Persona no existe" })
        else res.json({ cliente1 })
    },
    postClientes:async (req, res) => {
        const { nombre, cedula, edad, telefono } = req.body

        const cliente1 = { nombre, cedula, edad, telefono }
        bd.cliente.push(cliente1)
        res.json({ cliente1})

    },
    putclientes: async() => {

    }
}

export default httpClientes