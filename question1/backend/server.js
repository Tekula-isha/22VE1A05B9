const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
require('dotenv').config();
const cors=require('cors');
const app=express();
const shortnerUrlRouter=require('./routes/shorturls');
app.use(cors());
app.use(express.json());
app.use('/api/shortner',shortnerUrlRouter);
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('Connected to the database mongoDB'))
.catch(err=>console.error('not connected to mongoDB',err));
app.listen(3000,()=>console.log("server running"));


