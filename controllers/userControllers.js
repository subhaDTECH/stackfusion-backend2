const Users=require("../models/user")


//get allusers
exports.GetUsers=async(req,res)=>{
   
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
}


//create user

exports.UserCreate=async(req,res)=>{
   
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
}