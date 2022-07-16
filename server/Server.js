//IMPORTING EXPRESS AND CREATING APP INSTANCE
const express = require('express');
const app = express();
const cors= require('cors');

//SEPCIFYING THE PORT
const PORT = process.env.PORT||5000;

//TELLING EXPRESS TO USE BODY PARSER
app.use(express.json());
app.use(cors());


//DOTENV TO USE ENV FILES
const dotenv = require('dotenv');
dotenv.config();


//APP ROUTES
app.get('/api/healthcheck',(req,res)=>{
    res.json('Beep Beep Boop Boop Server is live');
})
//IMPORTING MONGOOSE AND CONNECTING TO THE DATABASE
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI,()=>{
    console.log('Connected to DB!');
})



app.listen(PORT,()=>{
    console.log(`Server is Listening on PORT:${PORT}`);
})


