const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');
const postModel = require('../models/postModel')

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
     cb(null,file.fieldname + '-'+ Date.now()+ path.extname(file.originalname))
    }
})
 
const upload = multer({ 
    storage:storage 
})

router.post('/createpost',upload.single('image'),(req,res)=>{
    // console.log(req.body)
 
const {description,address,rent,name,email,profession,avaliblity,number} = req.body;
   postModel.create({description:description,rent:rent,address:address,number:number,name:name,email:email,profession:profession,avaliblity:avaliblity,image:req.file.filename})
   .then((result)=>res.json(result))
   .catch((err)=>console.log(err))  
}) 

 
router.get('/getpost',async (req,res)=>{

try {
    const data = await postModel.find()
    res.status(200).send(data)
    console.log(data)
} catch (error) {
    res.status(400).send({
        message:'error finding post',
        error
    })
}
})

     


module.exports = router   