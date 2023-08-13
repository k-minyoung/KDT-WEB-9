const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const PORT = 8000;

app.set('view engine', 'ejs');
//cookie parser
app.use(cookieParser())

app.get('/',(req,res)=>{
  
   res.render('index')
})

app.get("/cookie", (req,res)=> {
    res.render("cookie");
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})