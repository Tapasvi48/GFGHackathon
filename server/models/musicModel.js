const mongoose=require("mongoose")

const musicSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    imgUrl:{
        type:String,
    },
    url:{
        type:String,
        required:true
    }
    ,
    category:{
        type:String,

    },
})

module.exports=mongoose.model("Music",musicSchema)