const plato=require("../models/platos")
const Fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));

//Ver la lista de platos del menu
exports.getMenu=async (req,res,next) =>{
    const platos=await plato.find();    
    res.status(200).json({
        success:true,
        cantidad: platos.length,
        platos     
    })
}

//Ver un producto por ID
exports.getPlatterById= async (req,res,next)=>{
    const platter= await plato.findById(req.params.id)

    if(!platter){
            return res.status(404).json({
            success:false,
            message: "No encontramos su plato"
        })
    }
    res.status(200).json({
        success:true,
        message: "Aquí debajo encuentras información sobre tu producto: ",
        platter 
    }) 
}

//Update un plato
exports.updatePlatter= async(req,res,next) =>{
    let platter= await plato.findById(req.params.id) //Variable de tipo modificable

    if(!platter){ //Verifico que el objeto no exite para finalizar el proceso
            return res.status(404).json({
            success:false,
            message: "No encontramos su plato"
        })
    }
    //Si el objeto si existia, entonces si ejecuto la actualización
    platter= await plato.findByIdAndUpdate(req.params.id, req.body, {
        new:true, // Valida solo los atributos nuevos o actualizados
        runValidators:true
    });
    // REsponde OK si el producto si se actualizó
    res.status(200).json({
        success:true,
        message: "Plato actualizado correctamente",
        platter
    })
    
}

//Eliminar un producto
exports.deletePlatter= async(req, res, next) =>{
    const platter= await plato.findById (req.params.id) //Variable de tipo modificable
    if (!platter){ //Verifico que el objeto no exite para finalizar el proceso
        return res.status(404).json({
            success:false,
            message: "No encontramos su plato"
        })    
        
    } 
   await platter.remove(); //Eliminamos el proceso
   res.status(200).json({
    success:true,
    message:"Producto eliminado correctamente"
   })

}    

//Crear nuevo plato /api/menu
exports.newPlatter=async(req,res,next) =>{
    const platter= await plato.create(req.body);
    res.status(201).json({
        success:true,
        platter
    }) 
}

//hablemos de Fetch
//Ver todos los productos
function verMenu(){
    fetch('http://localhost:4000/api/menu')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verMenu(); Llamamos al metodo creado para probar la consulta, me salió crashed


//Ver por id
function verMenuPorID(id){
    fetch('http://localhost:4000/api/platter/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//verMenuPorID('634e024f799d716883b3d65f'); me salió crashed
