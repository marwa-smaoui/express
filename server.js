const express = require('express');
const app = express();



const middelware =(req,res,next)=>{
const date=new Date();
const d= date.getDay();
const h = date.getHours();
if(d>=1 && d<=5 && h>=9&& h<=17){
    next()   

}
else (res.send(' <h1 style=color:red>closed </h1>'))
}
app.use(middelware)
app.use(express.static("Public"))



const port = 5000;
app.listen(port,(err)=>{
  err?  console.error(err)
  : console.log(`the server is runnig in port ${port}`)
}
)
