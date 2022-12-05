const express = require("express");
const productSchema = require("../models/Producto");
const jwt = require('jsonwebtoken');

const router = express.Router();

//crear producto
router.post("/producto", (req, res) => {

  

  const product = productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener todos los producto
router.get("/producto", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener un producto por id
router.get("/producto/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//actualizar producto por id
router.put("/producto/:id", (req, res) => {
  const {id} = req.params;
  const { title, price, description, images} = req.body;
  productSchema
    .updateOne({ _id: id}, { $set: {title, price, description , images }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    console.log({id})
});

//elimina producto
router.delete("/producto/:id", (req, res) => {
  const {id} = req.params;
  productSchema
    .remove({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports = router;
