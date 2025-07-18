const express=require('express');
const router=express.Router();
const Shorturl=require('../models/Shorturl');

router.get('/',async (req,res)=>{
    const shorturls=await shorturl.find();
    res.json(shorturls);
});

router.post('/',async(req,res)=>{
    try{
    const shorturl= new Shorturl(req.body);
    await shorturl.save();
    res.status(201).json(shorturl);
}   catch(err){
    res.errored(400).json({error:'Error',details:err.message});
}
});
module.exports=router;