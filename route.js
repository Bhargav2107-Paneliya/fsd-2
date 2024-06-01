var express=require("express")
var app=express()
app.get("/:id",(req,res)=>{
    res.send("The id you specified is"+req.params.id)
})
app.get("/thing/:name/:id",(req,res)=>{
    console.log(req.params)
    res.send(`id=${req.params.id}and name=${req.params.name}`)
})
app.listen(2001)