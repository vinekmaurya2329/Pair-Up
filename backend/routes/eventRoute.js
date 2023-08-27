const express  = require('express');
 const router = express.Router();
 const eventModel = require('../models/eventModel')
const multer  = require('multer');
const path = require('path');
const requireSignIn = require('../middleware/requireSignin')


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
  cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + '-'+ Date.now() + path.extname(file.originalname))
    }
})
const upload  = multer({
    storage:storage 
})



 router.post('/createvent',requireSignIn,upload.single('image'),async(req,res)=>{  
  const {description,address,tag} = req.body;
  eventModel.create({description:description,address:address,tag:tag,image:req.file.filename})
  .then((result)=>res.json(result))
  .catch((err)=>console.log(err))
 }); 


 router.get('/getevent',async (req,res)=>{
    const data = await eventModel.find({})
    .then((result)=>res.json(result))
    .catch((err)=>console.log(err))
 })
 module.exports = router; 