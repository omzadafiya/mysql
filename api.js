const express = require('express');
const con = require("./config");
const app = express();


app.use(express.json())
app.get("/", (req, resp) => {
    con.query("select * from user", (err, result) => {
        if (err) {
            resp.send("error")
        }
        else {
            resp.send(result);
        }
    })
});

app.post("/", (req, resp) => {
    const data = req.body;
    con.query('INsert INTO user SET ?', data, (error, result, fields) => {
        if (error) resp.send(error);
        resp.send(result)
    })
});

app.put("/:password",(req,resp)=>{
    const data =[req.body.name,req.body.email,req.body.username,req.body.password,req.params.password];
    con.query("UPDATE user SET name=?,email =?,username =?,password =? where password =?",data,(error,result,fields)=>{
        if (error) resp.send(error);
        resp.send(result)
        
    });
    
});

app.delete("/:password",(req,resp)=>{
    resp.send(req.params.password)
})

app.listen(5000);