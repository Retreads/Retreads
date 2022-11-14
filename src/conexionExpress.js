const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./back/productRoutes/producto");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 9000;

//midelware
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: "true" }));
app.use("/api", userRoutes);
//rutas
app.get("/", (req, res) => {
  res.send("bienvenido a la api");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("conexion a mongo exitosa"))
  .catch((error) => console.error(error));
app.listen(port, () => console.log("escuchando por el puerto", port));
