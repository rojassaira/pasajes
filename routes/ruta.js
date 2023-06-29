import { Router } from "express"
import httpRutas from "../controllers/ruta.js"

const router=new Router()

router.get('/hola', [
    check("origen","Desde donde desplaza").not().isEmpty(),
    check("destino","A donde se desplaza").not().isEmpty(),
    check("hora de salida","tarde o mañlana").not().isEmpty(),
    check("valor","valor del pasaje").isNumeric({min:5}),
    check("numero_acientos","numero de acientos disponibles").isNumeric(),

], httpRutas.getrutas )

router.get('/:destino', httpRutas.getRutasDestino)

router.post('/', httpRutas.postRuta )

router.delete('/:destino',(req,res)=>{
  const {placa}=req.params

  const index=bd.ruta.findIndex( ruta1=> ruta1==destino  )
  const ruta1= bd.ruta.splice(index,1)

  if( index==-1 ) res.status(400).json({error:"Ruta no existe"})
  else res.json({bus1})
})

export default router