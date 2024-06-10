
var expr=require("express")
var app=expr()
var path=require("path")
app.use(expr.static(__dirname,{index:"home.html"}))
app.get("/login",(req,res,next)=>{
    console.log("hello")
    res.set("content-type","text/html")
    res.write("<h1>Welcome "+req.query.name+"</h1>")
    res.write("Your email is"+req.query.email)
    next()
})
app.get("/login",(req,res)=>{
    if(req.query.newsletter=="on"){
        res.write("Thank you for your subscription <a href='/'>logout</a>")
        res.send()
    }
    else{
        res.write("<h3>You can subscribe to get daily updates</h3><a href='/subscribe'>subcribe</a>")
        res.send()
    }
})
app.get("/subscribe",(req,res)=>{
    res.send("Thank you for your subscription<a href='/'>Logout</a>")
})
app.listen(3000)