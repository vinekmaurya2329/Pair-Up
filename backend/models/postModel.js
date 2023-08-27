const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    rent:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    number:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    avaliblity:{
        type:String,
        require:true
    },
    profession:{
        type:String,
        require:true
    }
},{timestamps:true})
const postModel= mongoose.model('post',postSchema)
module.exports = postModel