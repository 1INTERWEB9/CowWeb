const mongoose =require('mongoose');
const {Schema} = mongoose;


const Produccion_Pecuario_Schema = new Schema({
   Departamento: {type:String, required:true},
   Producto: {type:String, required:true},
   Fecha: {type:Date, required:true},
   Precio: {type:Number,step:'0.01', required:true},
   Volumen: {type:Number,step:'0.01', required:true},
   Unidad_Volumen: {type:String, required:true},
   Variacion_Precio: {type:Number,step:'0.01', required:true},
   Variacion_Volumen: {type:Number,step:'0.01', required:true}
})

module.exports = mongoose.model('Produccion_Pecuario',Produccion_Pecuario_Schema)