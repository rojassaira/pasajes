import express from "express";
import 'dotenv/config';
import bus from "./routes/bus.js";

/*import articulos from "./routes/articulos.js";
import carritoRouter from "./carritoRouter";*/

const app = express();

app.use(express.json());

// Rutas para persona y articulos
app.use("/api/bus", bus);
//app.use("/api/articulos", articulos);


//app.use("/api/carrito", carritoRouter);

app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});
