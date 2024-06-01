var expr=require("express")
var app=expr()
app.get('/',(req,res)=>
{
    res.write("Hello world")
    res.send()
})
app.listen(3001,()=>{console.log("server start")})