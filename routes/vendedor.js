import { Router } from "express"
import httpBus from "../controllers/bus.js"

const router=new Router()

router.get('/hola', [
    check("numero_vehiculo","El numero es obligatorio").not().isEmpty(),
    check("numero_vehiculo","Maximo 4 caracteres").isLength({max:4}),
    check("placa","placaduplicada"),
    check("placa","La placa es obligatoria").not().isEmpty(),
    check("conductor","El nombre del conductor").not().isEmpty(),
    check("conductor","Minimo").isLength({min:8}),

], httpBus.getbus  )

router.get('/:placa', httpBus.getBusPlaca)

router.post('/', httpBus.postBuses )

router.delete('/:placa',(req,res)=>{
  const {placa}=req.params

  const index=bd.bus.findIndex( bus1=> bus1.placa==placa   )
  const bus1= bd.bus.splice(index,1)

  if( index==-1 ) res.status(400).json({error:"Bus no existe"})
  else res.json({bus1})
})

export default router