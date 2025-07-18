const mongoose=require('mongoose');

const ShorturlSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Shorturl',ShorturlSchema);