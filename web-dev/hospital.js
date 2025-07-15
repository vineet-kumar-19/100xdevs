//implementing hospital logic using express for better understanding of routes and HTTP meathods.

const express = require('express')
const app = express()
let health={first:"healthy",second:"healthy"};

app.get('/', (req, res) => {
  res.send(health);
})

app.post('/',(req,res)=> {
    health["first"]=req.query.first;
    if(req.query.second) health["second"]=req.query.second;
    res.send("New Health => "+ JSON.stringify(health));
})

app.put('/',(req,res)=>{
    health["first"]=req.query.first;
    if(req.query.second) health["second"]=req.query.second;
    res.send("Updated Health => "+ JSON.stringify(health));
})

app.delete('/',(req,res)=>{
    if(req.query.no==1){
      health.second=null;
    }
    else{
      health.first=null;
      health.second=null;
    }
    res.send("After Deletion => "+ JSON.stringify(health));

})

app.listen(3000);
