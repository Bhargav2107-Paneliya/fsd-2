var expr=require('express')
var app=expr()
app.get("/",(req,res)=> {
    res.set("Content type","text/html")
    res.write("<h1>Hello world</h1>")
    res.send
})
app.get("/about",(req,res)=>{
    res.set("Content-type","text/html")
    res.send("<h1>How are you</h1>")
})
app.listen(2002)
app.get("*",(req,res)=>{
    res.status(404)
    res.send("Page not found0")
})