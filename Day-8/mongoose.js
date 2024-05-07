const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/Country')
  .then(() => console.log('Connected!'));

const CountrySchema= new mongoose.Schema({
    country:String,
    

})

module.exports= mongoose.model("Country",CountrySchema)