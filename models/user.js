const mongoose=require("mongoose");

const UserSchema= new mongoose.Schema({

    name:{
        type:String,
        require,
     },
     email:{
        type:String,
        require,
    },
    dob:{
        type:String,
        require,
     },
     phone:{
        type:String,
        require,
    }
})



module.exports=mongoose.model('User',UserSchema);