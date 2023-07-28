const express = require('express')
const app = express()
const PORT = 8889; 
app.set("view engine", "ejs");
app.set("views" , "./views");

app.use('/public' , express.static('./public'))

app.get('/1',(req,res) => {
    res.render('4-1')
});
app.get('/2',(req,res) => {
    res.render('4-2')
});
app.get('/3',(req,res) => {
    res.render('4-3')
});


app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`)
   
})