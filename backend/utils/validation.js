const sanitizeHtml=require('sanitize-html');
function required(body,fields){return fields.filter(f=>body[f]===undefined||body[f]===null||String(body[f]).trim()==='')}
function cleanContent(html){return sanitizeHtml(String(html||''),{allowedTags:['p','br','strong','em','u','s','h2','h3','blockquote','ul','ol','li','a','img','pre','code'],allowedAttributes:{a:['href','target','rel'],img:['src','alt','width','height']},allowedSchemes:['http','https','mailto']})}
module.exports={required,cleanContent};
