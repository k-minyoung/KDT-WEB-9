const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const PORT = 8000
const SECRET = 'random'

const userInfo = {id : `kdt9`, pw :'1234', name:'홍길동'}

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/token',(req,res)=>{
    if( req.headers.authorization) {
        const token = req.headers.authorization.split(' ')
        try {
            const result = jwt.verify(token[1],SECRET)
            //검증해서 결과값이 나옴. result에 담김
            if(result.id === userInfo.id){
                res.json({result : true, name: userInfo.name})
            }

        } catch (error) {
            console.log(error)
            res.json({result : false, message : '인증된 회원이 아닙니다'});
            //인증 안됐을 때 나가는 값
        }
    }else {
        res.redirect('/login');
    }
})
app.get('/login',(req,res)=>{
    res.render('login');
})
app.post('/login',(req,res)=>{
    try {
        const {id , pw} = req.body
        const {id : userId , pw : userPw} = userInfo
        //id : userId id를 이제 userId로 쓰겠다 (변수명이 같아서 바꿔줌)
        if ( id=== userId && pw === userPw){
            const token = jwt.sign({id},SECRET)
            //토큰으로 만들어줄거는 id만
            res.json({result : true , token})
            //res.send와 동일한데 json값만 보낼 수 있음
        }else {
           res.json({result : false , message : '로그인 정보가 올바르지 않습니다'})
        }
        
    } catch (error) {
        console.log(error)
    }
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})