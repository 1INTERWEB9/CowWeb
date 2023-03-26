const mongoose =require('mongoose');

mongoose.connect('mongodb://root:3x%4047c2ldv%5BKRx9b@Monguito:27017/SI_Agro?authSource=admin')
.then(db => console.log('Db esta conectada'))
.catch(err=>console.log('Err'));