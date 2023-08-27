const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const multer = require('multer');
const path = require('path');
const JWT  = require('jsonwebtoken')
// const hashpassword = require('../helper/PassHashing');
// const comparepassword = require('../helper/PassHashing');

const {hashpassword, comparepassword} =  require('../helper/PassHashing');
// const userdata = JSON.parse(localStorage.getItem('currentUser'));


//  ---  multer 
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







router.post('/register', async (req,res)=>{ 
  
    const {name,email,number,password,bio} =  req.body 
    // console.log(newUser) 
    const hashedpassword = await hashpassword(password)     
    const checkuser = await User.findOne({email})
try {   
  
if(checkuser){
   return res.status(200).send({ 
    message:'User is already Registered - Please Login' 
   })
    
}else{
    const user = await new User({name,email,number,password:hashedpassword,bio:bio}).save()
    res.send({
        user,
        message:'Register Successfully'}) 
}

    
} catch (error) {
    res.status(400).send({
        message:'error! while Registeration',
        error
    })
}
})

//  Login router ----------/

router.post('/login',async (req,res)=>{
    
const {email,password}= req.body;

// validation 
if(!email || !password){
    return res.status(404).send({
        success:false,
        message:'Invalid email or Password',
    })}
     const user = await User.findOne({email:email}) 
    //  console.log(user , 'user')
     if(!user){
        return res.status(404).send({
            message:'Email is not register',
            success:false
        }) 
     }
    
     let match =await comparepassword(password,user.password); 
    
     try {
        if(!match){  
            return res.status(200).send({
                message:'Invalid Password',
                firstArg:'opps',
                lstArg:'error',
                success:false
            }) 
         }else{
            // res.status(200).send({
            //     user,
            //     message:'Login SuccessFully',
            //     firstArg:'congrats',
            //     lstArg:'success'  ,
            //     success:true
            // })

        //   token base 
        const token  = await JWT.sign({_id:user._id},`${process.env.JWT_SECRET_KEY}`,{ expiresIn:'7d'});
res.status(200).send({
    success:true,
    message:' login Successfully',
    firstArg:'congrats',
    lstArg:'success',
    user:{
        _id:user._id,
        name:user.name,
        email:user.email,
        number:user.number,
        address:user.address,
        bio:user.bio
       
    },
    token, 
})

         }
     } catch (error) {
        return res.status(400).send({
            message:'Error in Login'
        })
     }
});


router.put('/updateprofile',async (req,res)=>{
    const {name,email,number,user,bio} = req.body;
    // console.log(req.user)
    const exist = await User.findById(user._id);  
 
    if(exist){
        const updatedUser= await User.findByIdAndUpdate(user._id,{name:name,email:email,number:number,bio:bio},{new:true})
        res.status(200).send({
            message:'Profile Updated successfully',
            updatedUser,
           
        }) 
    }else{
        res.send({
            message:'error while updating profile'
        })
    }
});

router.get('/getuser/:id', async (req,res)=>{
    const {id} = req.params
    // console.log(id)
    // console.log(req.params,'req.params')
    // console.log(req.body,'req.body')
    
      const result =  await User.findById(id);
      if(result){
        res.send({
            message:'finding user successfully',
            result
        })
      }else{
        res.send({ 
            message:'user does not exist' 
        })
      }
})

module.exports = router;