const JWT = require('jsonwebtoken')


 const requireSignIn = async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['authorization'];
    if(!token){
        res.status(200).send({success:false, message:'a token is required for authorization'})
    }
    try { 
        const decode = JWT.verify(token,process.env.JWT_SECRET_KEY);
       req.user =decode;
        // next();
    } catch (error) {
        console.log(error);
        

    }; return next()
}
module.exports = requireSignIn;
