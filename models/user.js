const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    firstname : {
        type : String,
        require : true,
        trim : true
    },
    lastname : {
        type : String,
        require : true,
        trim : true
    },
    email : {
        type : String,
        unique : true,
        require : true,
        trim : true
    },
    // password : {
    //     type : String,
    //     require : true
    // },
    adresse : {
        type : String
    }
}, {
    collection : 'user',//nom de la base de donnée
    timestamps : true
});


const User = model('User', userSchema); //nom de mon modele a utiliser partout dans mon controler
module.exports = User;