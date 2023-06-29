import bd from "../basedatos.js";

const httpVendedores = {
    getvendedor:async (req, res) => {
        res.json(bd.vendedor)
    },
    getVendedorNombre:async (req, res) => {
        const { cedula } = req.params
        const persona = bd.personas.find(persona => persona.cc == cedula)
        if (existe == undefined) res.status(400).json({ error: "Vendedor no existe" })
        else res.json({ persona })
    },
    postPersonas:async (req, res) => {
        const { nombre, cedula, edad, telefono } = req.body

        const persona = { nombre, cedula, edad, telefono }
        bd.personas.push(persona)
        res.json({ persona })

    },
    putpersonas: async() => {

    }
}

export default httpPersonas