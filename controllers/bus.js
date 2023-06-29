import bus2 from "../models/bus.js";


const httpBus = {
    getbus: async (req, res) => {
        try {
            const Bus= await bus2.find()
            res.json({ Bus })
           
        } catch (error) {
            res.status(400).json({error})
        }

    },
    getBusPlaca: async (req, res) => {
        const {placa}=req.params
        try {
            const bus = await bus2.find({placa:id})
            // const personas = await Persona.find({
            //     $and:[
            //         {cc:cedula},
            //         {estado:1}
            //     ]
            // })
            res.json({ bus })
           
        } catch (error) {
            res.status(400).json({error})
        }
    },

    getBusId: async(req,res)=>{
        try {
            const { id } = req.params
            //const persona= await Persona.find({_id:id})
            const bus3 = await bus2.findById(id)
            res.json({ bus3 })
        } catch (error) {
            res.status(400).json({error})
        }
       
    },

    postBuses: async (req, res) => {
        try {
            const { numero_vehiculo, placa, conductor} = req.body
            const bus3 = new bus2({numero_vehiculo, placa, conductor })
            await bus3.save()

            res.json({ bus3 })
        } catch (error) {
            res.status(400).json({ error })
        }


    },
    putBuses: async (req,res) => {
        const {id}=req.params
        const {numero_vehiculo,conductornuevo}=req.body
        const bus3=await
            bus3.findByIdAndUpdate(id,{numero_vehiculo,conductor:conductornuevo},{new:true});
    },
    deleteBuses: async()=>{
        const {placa}=req.params
        const bus3= await bus2.findOneAndDelete({placa:id})
        //const persona= await Persona.deleteMany({condiciones})
        res.json({bus3})
    },
    deleteBusById: async ()=>{
        try {
            const {id}=req.params
            const bus3=await bus2.findByIdAndDelete(id)
        } catch (error) {
           
        }
    },

    putBusInactivar: async ()=>{
        try {
            const {id}=req.params
            const bus3=await bus2.findByIdAndUpdate(id,{estado:0},{new:true})
            res.json({bus3})
        } catch (error) {
           
        }
    },
    putBusActivar: async ()=>{
        try {
            const {id}=req.params
            const bus3=await bus2.findByIdAndUpdate(id,{estado:1})
        } catch (error) {
           
        }
    }

}

export default httpBus