const jwt=require('jsonwebtoken');
require('dotenv').config();
function auth(req,res,next){const h=req.headers.authorization||'';if(!h.startsWith('Bearer '))return res.status(401).json({message:'Authentication required'});try{req.user=jwt.verify(h.slice(7),process.env.JWT_SECRET);next()}catch(e){return res.status(401).json({message:'Invalid or expired token'})}}
function optionalAuth(req,res,next){const h=req.headers.authorization||'';if(h.startsWith('Bearer ')){try{req.user=jwt.verify(h.slice(7),process.env.JWT_SECRET)}catch(e){}}next()}
function admin(req,res,next){if(req.user?.role!=='admin')return res.status(403).json({message:'Admin access required'});next()}
module.exports={auth,optionalAuth,admin};
