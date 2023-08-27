const mongoose = require('mongoose');
require('dotenv').config()
 
const Uri = process.env.URI_mongoDB
mongoose.connect(Uri) 
.then(()=>{
    console.log(`data base is now connected`)
}).catch((error)=>{
console.log(`data base connecting error`)
});
module.exports= mongoose;