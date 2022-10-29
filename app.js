const express=require("express");
const app=express();

app.use(express.json());

//Importar rutas
const menu=require("./routes/menu")

app.use('/api',menu)

module.exports=app
