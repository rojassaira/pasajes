import { Router } from "express"
import httpClientes from "../controllers/clientes.js"
import { check } from "express-validator"

const router=new Router()

router.get('/hola', [
    check("nombre","El nombre es obligatorio").not().isEmpty(),
    check("nombre","Minimo 8 caracteres").isLength({min:8}),
    check("nombre","nombrecampo").isMongoId(),
    check("cedula","ceduladuplicada"),
    check("cedula","La cedula es obligatoria").not().isEmpty(),
    check("cedula","cantidad numerica").isNumeric(),
    check("telefono","cantidad numerica").isLength({max:15}),
] , httpClientes.getclientes )

router.get('/:cedula', httpClientes.getClienteCedula)

router.post('/', httpClientes.postClientes  )

router.delete('/:cedula',(req,res)=>{
  const {cedula}=req.params

  const index=bd.cliente.findIndex( cliente1=> cliente1.cedula==cedula   )
  const cliente1= bd.cliente.splice(index,1)

  if( index==-1 ) res.status(400).json({error:"Persona no existe"})
  else res.json({cliente1})
})

export default router