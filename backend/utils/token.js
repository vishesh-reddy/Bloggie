const jwt=require('jsonwebtoken');require('dotenv').config();
module.exports=(u)=>jwt.sign({id:u.id,name:u.name,email:u.email,role:u.role},process.env.JWT_SECRET,{expiresIn:'8h'});
