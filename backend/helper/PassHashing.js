const bcrypt = require('bcrypt');


 exports.hashpassword = async (password)=>{
    try {
        const saltround = 10;
        const hashedpassword=  await bcrypt.hash(password,saltround);
        return hashedpassword;
    } catch (error) {
        console.log(error)
    }
};

 exports.comparepassword = async (password,hashedpassword)=>{
 console.log(password,hashedpassword,'hashed');
 console.log(await bcrypt.compare(password,hashedpassword))
    return await bcrypt.compare(password,hashedpassword) 

}

// module.exports =hashpassword , comparepassword
// module.exports.comparepassword