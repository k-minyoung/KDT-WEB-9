const express = require('express')
const session = require('express-session')
const jwt = require('jsonwebtoken')
const app = express()
const PORT = 8000

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const userInfo = {id : 'kdt9', pw: '1234'};
const secret = 'secretKey'

app.get('/',(req,res)=>{
    const auth = req.headers.authorization
    console.log(auth)    
    if ( auth === undefined) {
        console.log('false')
        res.render('index', {isLogin : false});
    }else {
        console.log('ture')
        res.render('index')
    }
});

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',(req,res)=>{
    if(req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
        const {id,pw} = req.body
        const token = jwt.sign({id},secret)
        console.log(token)
        // res.redirect('/')
        res.render('index',{isLogin : true , localStorage : token})
    }else{
       res.send({msg : '로그인 실패'})
    }

})


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});
