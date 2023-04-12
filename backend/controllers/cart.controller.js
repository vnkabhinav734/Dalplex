const Cart = require('../models/cart.model');
const User = require('../models/user.model');
require("dotenv").config();

const getCart = async (request,response)=>{
    const email = request.user.email;
    try{
        const user = await User.findOne({email: email});  
        let cart = await Cart.findOne({ userid: user._id});
        let reservedItems =[];
        cart.items.forEach((item)=>{
            if(item.bookingstatus!="confirmed"){
                reservedItems.push(item);
            }
        });
        cart.items=reservedItems;
        response.status(201).json(cart)
    } catch (err) {
        response.status(400).json({ message: err.message });
}
}


const getItemsCount = async (request,response)=>{
    const email = request.user.email;
    try{
        const user = await User.findOne({email: email});   
        let cart = await Cart.findOne({ userid: user._id});
        if(!cart){
            response.status(201).json(0)
        }else{
            let reservedItems =[];
            cart.items.forEach((item)=>{
                if(item.bookingstatus!="confirmed"){
                    reservedItems.push(item);
                }
            });
            response.status(201).json(reservedItems.length)
        }
    } catch (err) {
        response.status(400).json({ message: err.message });
}
}


const addToCart = async (request, response) => {
    const { userid, program, court_id, court_img, categoryid, price, interval, status, bookingdate } = request.body;
    const currentDate = new Date().toISOString()
    const bookingstatus = status;
    try {
        let user = await User.findOne({_id: userid})
        let cart = await Cart.findOne({ userid: userid});
        if (!cart) {
            cart = new Cart({
                userid: userid,
                username:user.firstname + user.lastname,
                items:[],
                status: 'pending',
                price:price,
                updatedat:currentDate ,
                createdat:currentDate,
                subTotal:0,
                tax:0,
                discount:0,
                total:0,
            });
        }
        const item = {
            court_id: court_id,
            court_img: court_img,
            categoryid: categoryid,
            program:program,
            interval:interval,
            price:price,
            bookingstatus:bookingstatus,
            bookingdate:bookingdate
        }
        cart.tax=item.price*0.15;
        cart.total=cart.tax+item.price;
        cart.subTotal=item.price;
        await cart.items.push(item);   
        await cart.save();
        let reservedItems =[];
        cart.items.forEach((item)=>{
            if(item.bookingstatus!="confirmed"){
                reservedItems.push(item);
            }
        });
        response.status(201).json(reservedItems.length)
        } catch (err) {
            console.log(err.message)
        response.status(400).json({ message: err.message });
    }
};

const deleteCart = async (request,response)=>{
    const {id} =request.params;
    try{
        const user = await User.findOne({email: request.user.email});   
        let cart = await Cart.findOne({ userid: user._id});
        await cart.items.pull(id);
        await cart.save();
        response.status(201).json(cart);
    } catch (err) {
        response.status(400).json({ message: err.message });
}
}

module.exports={addToCart,getItemsCount,getCart,deleteCart}