import express, { application } from 'express';
import userController from '../controllers/UserController.js'
import User from '../models/UserModel.js';
const userRoutes = express.Router();
const validateCreate = require('../validartors/users')

userRoutes.post('/login', validateCreate, async (req,res) =>{
    console.log(req.body)
    let data = await userController.login(req.body);
    res.json(data);
})

userRoutes.post('/register', validateCreate, async (req,res) =>{
    const{email, password, role, shop} = req.body;
    const user = new User({
        email: email, 
        password: password,
        role: role, 
        shop: shop
    });
    await user.save();
    res.json("Registrado con exito");
});




userRoutes.get('/filter', (req,res) =>{
    res.json({status: "filter"})
})

export default userRoutes;
