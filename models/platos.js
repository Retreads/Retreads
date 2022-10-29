const mongoose=require("mongoose")

const platosSchema=mongoose.Schema({
    nombre:{ 
        type:String,
        required:[true,"Por favor registrar el nombre del plato."],
        trim:true,
        maxLength:[150,"El nombre del producto no debe exceder los 150 caracteres."]
    },
    precio:{
        type: Number,
        required:[true,"Por favor registre el precio del plato."],
        maxLength:[8, "El precio del producto no puede estar por encima de 99'999.999"],
        default:0.0
    },
    descripcion:{
        type: String,
        required:[true, "Por favor registre una descripcion para el plato."]
    },
    calificacion:{
        type: Number,
        default:0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true, "Por favor seleccione la categoria del producto."],
        enum:{
            values:[
                "Arroces Mixtos",
                "Hamburguesas",
                "Burritos",
                "Arepas",
                "Salchipapas",
                "Patacones",
                "Menu infantil",
                "Combos",
                "Bebidas",
                "Adicionales"                
            ]
        }
    },
    vendedor:{
        type:String,
        required:[true, "Por favor registre el vendedor del plato"]
    },
    inventario:{
        type: Number,
        required:[true, "Por favor registre el stock de platos"],
        maxLength:[5, "Cantidad maxima de paltos no puede sobrepasar 99999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type: String,
                required:true 
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("platos",platosSchema)

