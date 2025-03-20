const express = require ('express');
const  router = express.Router();
router.post('/addData',(req,res)=>{
    console.log(req.body);
    res.json({"message":"data read success"});
})

module.exports = router;