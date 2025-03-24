// const express = require ('express');
// const app = express();
// app.listen(5000,()=>{
//     console.log("server running on:http://localhost:5000/")
// })


const express = require ('express');
const app = express();
const cors = require('cors');
const router = require('./Routers/router');

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(5000,()=>{
    console.log("server running on:http://localhost:5000/")
    
})