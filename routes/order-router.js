const orderController = require('../controllers/order-controller');

const idValidation = require('../middlewares/idValidation');
const bodyValidation = require('../middlewares/bodyValidation');
const { createOrderValidator, updateOrderValidator } = require('../validators/order-validator');

const orderRouter = require('express').Router();

orderRouter.route('/')
    .get(orderController.getAll)
    .post(bodyValidation(createOrderValidator) , orderController.create);

orderRouter.route('/:id')
    .get(idValidation(), orderController.getByID)
    .put(idValidation(), bodyValidation(updateOrderValidator) , orderController.update)
    .delete(idValidation(), orderController.delete);

orderRouter.route('/user/:id')
    .get(idValidation(), orderController.getByUser);


module.exports = orderRouter;