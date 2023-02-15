const express=require("express");
const app=express();
const conn=require("./config/db");
const Users=require('./models/user');
const dotenv=require("dotenv");
const cors=require("cors")
const UserRoutes=require('./Routes/userRoutes')


dotenv.config({path:'./config/config.env'});


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


//app.use('/api',UserRoutes);

app.get('/users',async(req,res)=>{
   
    try{

       const users=await Users.find({});
       console.log(users)
       return res.status(200).json({
           message:"success",
           data:users
       })

    }catch(e)
    {
       return res.status(200).json({
           message:"fail",
           data:e.message
       })
    }
})


app.post('/users',async(req,res)=>{
   
    try{

       const users=await Users.create(req.body);
       return res.status(200).json({
           message:"success",
           data:users
       })

    }catch(e)
    {
       return res.status(200).json({
           message:"fail",
           data:e.message
       })
    }
})


app.get('/',(req,res)=>{
    return res.send("working")
})



app.listen(process.env.PORT,(e)=>{
    console.log("Server runing !!")
})


