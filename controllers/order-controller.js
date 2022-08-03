const Order = require("../models/order-model");


const orderController = {

    getAll : async (req, res) => {

        const orders = await Order.find()
        .populate({
            path : 'userId',
            select : { firstname : 1, lastname : 1, email : 1, adress : 1 }
        })
        .populate({
            path : 'burgers.burgerId',
            select : { burgerName : 1, price : 1 }
        });
        res.status(200).json(orders);

    },

    getByID : async (req, res) => {

        const id = req.params.id;
        const order = await Order.findById(id)
        .populate({
            path : 'userId',
            select : { firstname : 1, lastname : 1, email : 1, adress : 1 }
        })
        .populate({
            path : 'burgers.burgerId',
            select : { burgerName : 1, price : 1 }
        });
        if (!order) {
            return res.sendStatus(404);
        }
        res.status(200).json(order);

    },

    getByUser : async (req, res) => {

        const idUser = req.params.id;
        let userFilter = { userId : idUser };
        const orders = await Order.find(userFilter)
        .populate({
            path : 'userId',
            select : { firstname : 1, lastname : 1, email : 1, adress : 1 }
        })
        .populate({
            path : 'burgers.burgerId',
            select : { burgerName : 1, price : 1 }
        });
        if (!orders) {
            return res.sendStatus(404);
        };
        res.status(200).json(orders);

    },

    // getByBurger : () => {},

    create : async (req, res) => {

        const orderToAdd = Order(req.body);
        await orderToAdd.save();
        res.status(200).json(orderToAdd);

    },

    update : async (req, res) => {

        const id = req.params.id;
        const { userId, burgers, statusOrder } = req.body;
        const orderToUpdate = await Order.findByIdAndUpdate(id, {
            userId,
            burgers,
            statusOrder
        }, { returnDocument : 'after' })
        .populate({
            path : 'userId',
            select : { firstname : 1, lastname : 1, email : 1, adress : 1 }
        })
        .populate({
            path : 'burgers.burgerId',
            select : { burgerName : 1, price : 1 }
        });
        if (!orderToUpdate) {
            return res.sendStatus(404);
        }
        res.status(200).json(orderToUpdate);

    },

    delete : async (req, res) => {

        const id = req.params.id;
        const orderToDelete = await Order.findByIdAndDelete(id);
        if (!orderToDelete) {
            return res.sendStatus(404);
        }
        res.sendStatus(204);

    }
}

module.exports = orderController;
