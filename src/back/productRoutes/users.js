const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//crear usuario
router.post("/user", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//mostrar todos los usuario
router.get("/user", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//mostrar por el id
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//actualizar producto por id
router.put("/producto/:id", (req, res) => {
  const {id} = req.params;
  const { email, name, password, images} = req.body;
  userSchema
    .updateOne({ _id: id}, { $set: {email, name, password, images }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    console.log({id})
});

//eliminar usuario
router.delete("/user/:id", (req, res) => {
  const {id} = req.params;
  userSchema
    .remove({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* crear usuario */
/* router.post("/", (req, res) => {
  let body = req.body;
  let resultado = crearUser(body);

  resultado.then((user) => {
      res.json({
        valor: user,
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

async function crearUser(body) {
  let usuario = new Usuario({
    email: body.email,
    name: body.name,
    password: body.password,
  });
  return await usuario.save();
} */
module.exports = router;
