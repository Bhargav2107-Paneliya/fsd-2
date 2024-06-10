const cp=require("cookie-parser")
var expr=require("express")
var app=expr()
app.use(cp())
app.get("/",(req,res,next)=>{
    res.cookie("fname","xyz")
    res.cookie("lname","pqr")
    next()
})
app.get("/",(req,res)=>{
    res.send("cookies= "+JSON.stringify(req.cookies))
}).listen(3000)