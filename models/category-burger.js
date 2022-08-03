const { Schema,model}=require('mongoose');

const burgerSchema= new Schema ({
    name : {
        type : String,
        require : true,
        unique:true,
        trim : true //????
    },
    ingredients : [
        { viande : String},
        { garniture : String},
        { sauce : String}
    ],
    allergie : {
        type : Boolean,
        require : true
    },
    prix : {
        type : Number,
        require : true

    },
    collection : 'burger',//nom de la base de donnée 
    timestamps : true
}) ;

const Burger = model('Burger',burgerSchema);//nom de mon modele a utiliser partout dans mon controler
module.exports = Burger;