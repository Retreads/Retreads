const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();


router.post("/user", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
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
