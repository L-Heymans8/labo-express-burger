
const userRouter = require('./user-router');
const burgerRouter = require('./burger-router');
const orderRouter = require('./order-router');
const authRouter = require('./auth-router');


const router = require('express').Router();



router.use('/user', userRouter);
router.use('/burger', burgerRouter);
router.use('/order', orderRouter);
router.use('/auth', authRouter);


module.exports = router;
