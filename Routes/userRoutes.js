const express=require("express")
const router=express.Router();
const {GetUsers,UserCreate}=require('../controllers/userControllers')

router.route('/users').get(GetUsers).post(UserCreate);


module.exports=router;