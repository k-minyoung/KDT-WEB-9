const express = require('express')
//import express from 'express'
const app = express()
const PORT = 8000;

//set = 서버의 속성 지정, view engine이란 속성을 ejs로 지정하겠다는 뜼
app.set("view engine", "ejs");
app.set("views" , "./views");


//정적인 파일 불러오기
app.use('/public' , express.static('./public'))



app.get('/', (req, res) =>{
    // send() 클라이언트에 응답 데이터를 보낼 때
    // res.send("Hello Express");
    res.send({result : true , code : 1000, message:"회원가입 성공" ,data:{name:'민영'}});
});

//render() 뷰 엔진 렌더링
app.get('/kdt9', (req, res) =>{
    res.render('test', { name : 'minyoung'});
});

app.get('/test2', (req,res) => {
    res.render('test2')
})



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});