var expr=require("express")
var app=expr()
const student=[{"name":"xyz","id":1},
    {"name":"pqr","id":2},
    {"name":"mnc","id":3}]
app.get("/student",(req,res)=>{
    res.set("content-type","text/html")
    res.write("<table border='1 px'><tr><th>Name</th><th>id</th></tr>")
    for(i of student){console.log(i)
        res.write("<tr><td>"+i.name+"</td>")
        res.write("<td>"+i.id+"</td></tr>")
    }
    res.write("</table>")
    res.send()
}).listen(3000)