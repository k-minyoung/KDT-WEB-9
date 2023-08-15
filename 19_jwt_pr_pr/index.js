const express = require('express')
const jwt = require('jsonwebtoken')
const app = express();
const PORT = 8000
const SECRET = 'mySecretKey'

const user = {userId : '123' ,userPw : '123',userName : '김민영'}

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/token',(req,res)=>{
    if(req.headers.authorization) {
        const token = req.headers.authorization.split(' ')
        try {
            const result = jwt.verify(token[1],SECRET)
            if ( result.id === user.userId) {
                res.json({result : true, name : user.userName})
            }
        } catch (error) {
            console.log(error)
        }
        
    }
})
app.post('/login',(req,res)=>{
    try {
        console.log('1',req.body)
        const {id,pw} = req.body
        
        if(user.userId === id && user.userPw === pw){
            const token = jwt.sign(id,SECRET)
            res.send({result : true, token})
        }else{
            res.send({result : false , message : '로그인 다시해 새꺄'})
        }
        
        
    } catch (error) {
        console.log(error)
    }
    
})
app.get('/login',(req,res)=>{
    res.render('login')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})