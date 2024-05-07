const express= require("express")

const app=express();
const Country=require("./mongoose")
app.use(express.json());

app.get("/",async(req,res)=>{
    countries= await Country.find()
    res.send(countries)
})
app.post("/add",async(req,res)=>{
   
    const data= await Country.create(req.body);
    res.send(data);
})



app.listen(4000,()=>{
    console.log("listening to port 4000")
})