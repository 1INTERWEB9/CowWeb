const router =require('express').Router();
const Report_Farming = require('../models/Report_Farming');
const Report_Livestock = require('../models/Report_Livestock');
const {isAuthenticated} = require('../helpers/auth');

/////////////////////////////////////////////////////////////////////////FARMING

router.get('/report/farming/add',isAuthenticated,(req,res) =>{
    res.render('report/create_farming');
});

router.post('/report/farming/new-report',isAuthenticated,async(req,res) =>{
    const {Departamento,Producto,Año,Area,Produccion} = req.body;
    const Rendimiento = Produccion/Area;
    const errors =[];
    if(!Departamento)
    {
        errors.push({text:'Escribe un departamento'});
    }
    if(!Producto)
    {
        errors.push({text:'Escribe un producto'});
    }
    if(!Año)
    {
        errors.push({text:'Escribe un año'});
    }
    if(!Area)
    {
        errors.push({text:'Escribe las hectareas de area de cultivo'});
    }
    if(!Produccion)
    {
        errors.push({text:'Escribe las toneladas de produccion'});
    }
    if(!Rendimiento)
    {
        errors.push({text:'Escribe el rendimiento del cultivo'});
    }
    if(errors.length>0)
    {
        res.render('report/create_farming',{
            errors,
            Departamento,
            Producto,
            Año,
            Area,
            Produccion,
            Rendimiento
        })
    }
    else
    {
        const New_Report_Farming= new Report_Farming({Departamento,Producto,Año,Area,Produccion,Rendimiento});
        await New_Report_Farming.save();
        req.flash('success_msg','Registro guardado satisfactoriamente');
        res.redirect('/report/farming');
    }  
});

router.get('/report/farming',isAuthenticated,async (req,res) =>{
    const reports_farming = await Report_Farming.find().lean().sort({'Año':'desc'});
    res.render('report/view_farming',{reports_farming});
});

router.get('/report/farming/edit/:id',isAuthenticated, async (req,res) =>{
    const report = await Report_Farming.findById(req.params.id).lean();
    res.render('report/edit_farming',{report});
});

router.put('/report/farming/edit-report/:id',isAuthenticated, async (req,res) =>{
    const {Departamento,Producto,Año,Area,Produccion} = req.body;
    const Rendimiento = Produccion/Area;
    await Report_Farming.findByIdAndUpdate(req.params.id,{Departamento,Producto,Año,Area,Produccion,Rendimiento}).lean()
    req.flash('success_msg','Registro actualizado satisfactoriamente');
    res.redirect('/report/farming');
});

router.delete('/report/farming/delete/:id',isAuthenticated, async(req,res) =>{
    await Report_Farming.findByIdAndDelete(req.params.id).lean();
    req.flash('success_msg','Registro eliminado satisfactoriamente');
    res.redirect('/report/farming');
});



/////////////////////////////////////////////////////////////////////////LIVESTOCK

router.get('/report/livestock/add',isAuthenticated,(req,res) =>{
    res.render('report/create_livestock');
});

router.post('/report/livestock/new-report',isAuthenticated,async(req,res) =>{
    const {Departamento,Producto,Fecha,Precio,Volumen,Unidad_Volumen,Variacion_Precio,Variacion_Volumen} = req.body;
    const errors =[];
    if(!Departamento)
    {
        errors.push({text:'Escribe un departamento'});
    }
    if(!Producto)
    {
        errors.push({text:'Escribe un producto'});
    }
    if(!Fecha)
    {
        errors.push({text:'Escribe una fecha de producción'});
    }
    if(!Precio)
    {
        errors.push({text:'Escribe el precio del producto'});
    }
    if(!Volumen)
    {
        errors.push({text:'Escribe el volumen del producto'});
    }
    if(!Unidad_Volumen)
    {
        errors.push({text:'Escribe la unidad de volúmen'});
    }
    if(!Variacion_Precio)
    {
        errors.push({text:'Escribe la variación de precio'});
    }
    if(!Variacion_Volumen)
    {
        errors.push({text:'Escribe la variación de volúmen'});
    }
    if(errors.length>0)
    {
        res.render('report/create_livestock',{
            errors,
            Departamento,
            Producto,
            Fecha,
            Precio,
            Volumen,
            Unidad_Volumen,
            Variacion_Precio,
            Variacion_Volumen
        })
    }
    else
    {
        const New_Report_Livestock= new Report_Livestock({Departamento,Producto,Fecha,Precio,Volumen,Unidad_Volumen,Variacion_Precio,Variacion_Volumen});
        await New_Report_Livestock.save();
        req.flash('success_msg','Registro guardado satisfactoriamente');
        res.redirect('/report/livestock');
    }  
});

router.get('/report/livestock',isAuthenticated,async (req,res) =>{
    const report_livestock = await Report_Livestock.find().lean().sort({'Año':'desc'});
    res.render('report/view_livestock',{report_livestock});
});

router.get('/report/livestock/edit/:id',isAuthenticated, async (req,res) =>{
    const report = await Report_Livestock.findById(req.params.id).lean();
    res.render('report/edit_livestock',{report});
});

router.put('/report/livestock/edit-report/:id',isAuthenticated, async (req,res) =>{
    const {Departamento,Producto,Fecha,Precio,Volumen,Unidad_Volumen,Variacion_Precio,Variacion_Volumen} = req.body;
    await Report_Livestock.findByIdAndUpdate(req.params.id,{Departamento,Producto,Fecha,Precio,Volumen,Unidad_Volumen,Variacion_Precio,Variacion_Volumen}).lean()
    req.flash('success_msg','Registro actualizado satisfactoriamente');
    res.redirect('/report/livestock');
});

router.delete('/report/livestock/delete/:id',isAuthenticated, async(req,res) =>{
    await Report_Livestock.findByIdAndDelete(req.params.id).lean();
    req.flash('success_msg','Registro eliminado satisfactoriamente');
    res.redirect('/report/livestock');
});



module.exports = router;