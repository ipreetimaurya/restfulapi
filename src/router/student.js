const express = require('express');
const Student = require('../models/student');
const router = new express.Router();

//create data

router.post('/student',(req,res)=>{
    const user= new Student({
        name:req.body.name,
        email:req.body.email,
 number:req.body.number,
 message:req.body.message
    })
 user.save().then(()=>{
 res.status(201).send(user)
 }).catch((e)=>{
 res.status(400).send(e)
 })
 
 //    user.save().then(function(student){
 //         res.send(student);
 //     }).catch(next);
 })
 
 
 //get all data
 
 router.get("/student", async (req,res)=>{
    try{
  
    const studentsdata = await Student.find();
    res.status(201).send(studentsdata);
    }
    catch(e){
       res.status(404).send(e);
    }
 })
 
 //get individual data
 
 router.get('/student/:id',async(req,res)=>{
 
 const _id = req.params.id;
 // console.log(req.params);
 // res.send(req.params) 
 try{
 const studentData = await Student.findById({_id});
 res.status(201).send(studentData);
 }
 catch(e){
    res.status(404).send(e);
 }
 })
 
 
 //update student
 
 
 
 router.patch('/student/:id',async(req,res)=>{
 
    const _id = req.params.id;
    // console.log(req.params);
    // res.send(req.params) 
    try{
    const updateData = await Student.findByIdAndUpdate(_id, req.body,{
       new:true
    });
    res.status(201).send(updateData);
    }
    catch(e){
       res.status(404).send(e);
    }
    })
 
 
   //delete single record of data
   
   router.delete('/student/:id',async(req,res)=>{
 
    const _id = req.params.id;
    // console.log(req.params);
    // res.send(req.params) 
    try{
    const deleteData = await Student.findByIdAndDelete(_id);
    res.status(201).send(deleteData);
    }
    catch(e){
       res.status(404).send(e);
    }
    })
 
 module.exports= router;