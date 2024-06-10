// Write a script to create login form on index.html after clicking submit button it should jump to next page and value of username should be store inside the cookie perform the task using get method,cookie will expire after 1 min.

var expr=require("express")
var app=expr()
var cp=require("cookie-parser")
var path=require("path")
app.use(cp(),expr.static(__dirname,{index:"index.html"}))
app.get("/login",(req,res,next)=>{
    res.cookie("Username",req.query.name,{expires:new Date(Date.now()+10000)})
    next()
})
app.get("/login",(req,res)=>{
  
    res.send("Cookies:= "+JSON.stringify(req.cookies))
}).listen(3000)