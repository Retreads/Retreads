const express=require("express");
const { get } = require("mongoose");
const router=express.Router();

const {getMenu, newPlatter, getPlatterById, updatePlatter, deletePlatter, } = require("../Controller/menuController") //Traemos la respuesta json desde el controlador

router.route('/menu').get(getMenu) //Establecemos desde que ruta queremos ver el getMenu
router.route('/plato/nuevo').post(newPlatter); //Establecemos la ruta
router.route('/platter/:id').get(getPlatterById);//Ruta para consultar por id
router.route('/platter/:id').put(updatePlatter); //Creación de la ruta de actualización
router.route('/platter/:id').delete(deletePlatter); //Creaciòn de la ruta por id




module.exports=router;
