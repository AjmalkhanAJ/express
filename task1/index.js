const express = require ('express');
const mongoose = require ('mongoose');

var cors = require('cors');
const app = express();

const router = require('./router');

const students = require ('./studSchema');

app.use(cors());
app.use(express.json());
app.use(router);
mongoose.connect("mongodb+srv://ajmal:ajmal%40123@ajmal.i78ik.mongodb.net/")
.then(()=>{console.log("connection done");})
.catch((err)=>{console.log(err)});

// app.listen(5000);

app.listen(5000,()=>{
    console.log("server running on:http://localhost:5000/")
    
})