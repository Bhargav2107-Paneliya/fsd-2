var expr= require("express")
var app=expr()
const obj1={"name":"XYZ",
    "id":123
}
data=JSON.stringify(obj1)
app.get("/",(res,req)=>{
    req.send(data)
})
app.listen(2001)