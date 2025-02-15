const express=require("express")
const app=require("./app")
const mongoose=require("mongoose")
var cors=require('cors');
const dotenv=require("dotenv")
const cloudinary=require("cloudinary")

dotenv.config()

app.use(cors());

app.use(express.json())

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
  api_key:  process.env.API_KEY,
  api_secret:   process.env.API_SECRET,
})

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/mera",{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error: ", err.message);
});


app.listen(4000,()=>{
    console.log(`Server started at port }`)
})