const express = require("express");
const productSchema = require("../models/producto");

const router = express.Router();

//crear producto
router.post("/producto", (req, res) => {
  const product = productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
