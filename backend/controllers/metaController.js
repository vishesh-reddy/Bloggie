const pool=require('../config/db');
async function categories(req,res,next){try{const [r]=await pool.execute('SELECT id,name,slug FROM categories ORDER BY name');res.json({categories:r})}catch(e){next(e)}}
async function tags(req,res,next){try{const [r]=await pool.execute('SELECT id,name,slug FROM tags ORDER BY name');res.json({tags:r})}catch(e){next(e)}}
async function like(req,res,next){try{await pool.execute('INSERT IGNORE INTO likes(post_id,user_id) VALUES(?,?)',[req.params.id,req.user.id]);res.json({liked:true})}catch(e){next(e)}}
async function unlike(req,res,next){try{await pool.execute('DELETE FROM likes WHERE post_id=? AND user_id=?',[req.params.id,req.user.id]);res.json({liked:false})}catch(e){next(e)}}
module.exports={categories,tags,like,unlike};
