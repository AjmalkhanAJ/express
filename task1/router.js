 const express = require ('express');
 const router = express.Router();
 const studentsmodel = require ('./studSchema');

 router.post("/addstud",async(req,res)=>{
    console.log(req.body);
    const{name,address,subject,mobile}=req.body;

    if(!name || !address || !subject || !mobile)
        {
            res.status(404).json("please fill the Data");
        }
        try{
            const prestud = await studentsmodel.findOne({mobile:mobile});
        
            if(prestud){
                res.status(404).json("this students already presented");
            }
            else{
                const addstudent = new studentsmodel({name,address,subject,mobile});
                await addstudent.save();
                res.status(201).json(addstudent);
            }
        }catch(err){
            res.status(404).json(err);
        }

 });

// get method 
 router.get("/studs",async(req,res)=>{
    try{
        const student = await studentsmodel.find();
        res.send(student);
    }
    catch(err){
        res.status(404).json(err);
    }
 });

// update method 
router.put('/updatestud/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const body = req.body;
        const updatestudents = await studentsmodel.findByIdAndUpdate(_id,body,{new:true});

        if(!updatestudents){
            res.status(201).send({
                "status":true,
                "message":"student as updated ... !!!"
            });
        }
        return res.status(200).send(updatestudents);
    }
    catch(error){
        res.status(400).send(error);
    }
});

// delete method 
router.delete("/deletestud/:id",async(req,res)=>{
    const_id = req.params.id;

    try{
        const deletestudents = await studentsmodel.findByIdAndDelete(_id);

        if(!deletestudents){
            res.status(201).send({
                "status":true,
                "message":"student as deleted ... !!!"
            });
        }
        return res.status(200).send(deletestudents);
    }
    catch(error){
        res.status(400).send(error);
    }
})

 module.exports = router;