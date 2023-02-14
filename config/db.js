const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config({path:'./config/config.env'});
const conn=mongoose.connect(process.env.DBURL).then((e)=>{
    console.log("database connected !")
}).catch((e)=>console.log(e,"srevr"));



module.exports=conn;