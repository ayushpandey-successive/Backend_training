const errorhandler=(err,req,res,next)=>{
    if(err){
        res.send('I am handling error')
    }
    next();
}
module.exports=errorhandler;