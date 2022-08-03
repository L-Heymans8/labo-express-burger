// on importe le module express
const express = require('express');
// méthode Router() 
const userRouter = express.Router();

//  importe userController et ses fonctions
const userController = require('../controllers/user-controller');

// on importe les middlewares
const idValidation = require('../middlewares/idValidation');
const bodyValidation = require('../middlewares/bodyValidation');

const userValidator = require('../validators/user-validator');

userRouter.route('/')

    .post(bodyValidation(userValidator), userController.create)     
    .get(userController.getAll);

userRouter.route('/:id')
    .get(idValidation(), userController.getById)
    .put(idValidation(), bodyValidation(userValidator), userController.update)
    .delete(idValidation(), userController.delete);


module.exports = userRouter;