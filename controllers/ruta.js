import bd from "../basedatos.js";

const httpRutas = {
    getrutas:async (req, res) => {
        res.json(bd.ruta)
    },
    getRutasDestino:async (req, res) => {
        const { destino } = req.params
        const ruta1 = bd.ruta.find(ruta1 =>ruta1 == destino)
        if (existe == undefined) res.status(400).json({ error: "Ruta no existe" })
        else res.json({ ruta1 })
    },
    postRuta:async (req, res) => {
        const { origen, destino, hora_salida,valor, numero_acientos} = req.body

        const ruta1 = { origen,destino, hora_salida, valor, numero_acientos}
        bd.ruta.push(ruta1)
        res.json({ ruta1 })

    },
    putpersonas: async() => {

    }
}

export default httpRutas