const { Schema, model, Types } = require('mongoose');

// on importe les models auquels ont fait référence
const User = require('./user-model');
const Burger = require('./burger-model');

const orderSchema = new Schema({
    userId : {
        type : Types.ObjectId,
        ref : User,
        require : true
    },
    burgers : [{
        burgerId:{
        type : Types.ObjectId,
        ref : Burger,
        require : true
    }}],
    statusOrder : {
        type : String,
        enum : ['Create', 'Pending', 'Done'],
        default : 'Create',
        require : true
    }
}, {
    collection : 'commande',//nom de la base de donnée
    timestamps : true
});


const Order = model('Order', orderSchema);//nom de mon modele a utiliser partout dans mon controler
module.exports = Order;