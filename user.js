var expr=require("express")
var app=expr()
var cp=require("cookie-parser")
app.use(cp(),expr.static(__dirname,{index:"user_feedback.html"}))
app.get("/",(req,res)=>{
    res.send()
})
app.get("/submit-feedback",(req,res)=>{
    const feedback={"name":req.query.name,"email":req.query.email,"msg":req.query.Message,"rating":req.query.rating}
    res.cookie("feedback",feedback,{maxAge:36000})
    res.send("Thank you for your feedback<a href='/feedback_details'>Show feedback</a>")
})
app.get("/feedback_details",(req,res)=>{
    res.send(req.cookies)
})
.listen(3000)