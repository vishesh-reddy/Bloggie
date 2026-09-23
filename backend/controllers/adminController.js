const pool=require('../config/db');
async function stats(req,res,next){try{const [[users]] = await pool.query('SELECT COUNT(*) total FROM users');const [[posts]] = await pool.query('SELECT COUNT(*) total FROM posts');const [[published]] = await pool.query('SELECT COUNT(*) total FROM posts WHERE status="published"');const [[comments]] = await pool.query('SELECT COUNT(*) total FROM comments');res.json({users:users.total,posts:posts.total,published:published.total,comments:comments.total})}catch(e){next(e)}}
async function users(req,res,next){try{const [r]=await pool.query('SELECT id,name,email,role,created_at FROM users ORDER BY created_at DESC');res.json({users:r})}catch(e){next(e)}}
async function moderateComment(req,res,next){try{await pool.execute('UPDATE comments SET status=? WHERE id=?',[req.body.status==='rejected'?'rejected':'approved',req.params.id]);res.json({message:'Comment moderated'})}catch(e){next(e)}}
module.exports={stats,users,moderateComment};
