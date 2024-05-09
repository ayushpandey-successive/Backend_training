const express= require("express")

const app=express();
const Book=require("./mongoose")
app.use(express.json());

app.get("/",async(req,res)=>{
    countries= await Book.find()
    res.send(countries)
})
app.get('/:id',async(req,res)=>{
    bookinfo=await Book.findById({_id:req.params.id})
    res.send(bookinfo);
})
app.post("/add",async(req,res)=>{
   try{
    const data= await Book.create(req.body);
    res.send(data);
   }
   catch(err){
    res.status(400).send(err)
   }
})



app.listen(4000,()=>{
    console.log("listening to port 4000")
})