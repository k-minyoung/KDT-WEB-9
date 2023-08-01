const express = require('express')
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//view engine
app.set("view engine", 'ejs');
app.set('views','./views');

//router
app.get('/',(req,res) =>{
    res.render('index실습1', {title: '실습1' })
});
app.get('/getForm',(req,res)=> {
    console.log(req.query)
    res.render('result실습',{
        title : '회원가입 완료',
        userInfo: req.query
    });
});

app.post('/postForm',(req,res) => {
    console.log(req.body);
    res.render('result실습2',{
        title : '회원가입 완료 POST',
        userInfo: req.body
    });
})
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
