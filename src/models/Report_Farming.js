const mongoose =require('mongoose');
const {Schema} = mongoose;


const Report_Farming_Schema = new Schema({
   Departamento: {type:String, required:true},
   Producto: {type:String, required:true},
   Año: {type:Number, required:true},
   Area: {type:Number,step:'0.01', required:true},
   Produccion: {type:Number,step:'0.01', required:true},
   Rendimiento: {type:Number,step:'0.01', required:true}
})

module.exports = mongoose.model('Produccion_Agricola',Report_Farming_Schema)