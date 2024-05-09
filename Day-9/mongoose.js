const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/Books')
  .then(() => console.log('Connected!'));

const BookSchema= new mongoose.Schema({
    title:{
      type:String,
      require:true,
      validate:{
        validator:(value)=>value.length>2,
          message:"Title should be more than 2 character"
          
        ,
       
      }

    },
    author:{
      type:String,
      require:true,
      minlength: 3,

    },
    year:{
      type:String
    }
    

})

module.exports= mongoose.model("Book",BookSchema)