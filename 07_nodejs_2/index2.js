
const express = require('express')
//import express from 'express'
const app = express()
const PORT = 8888;

//정적인 파일 불러오기
app.use('/public' , express.static('./public'))

//set = 서버의 속성 지정, view engine이란 속성을 ejs로 지정하겠다는 뜼
app.set("view engine", "ejs");
app.set("views" , "./views");

app.get('/test2', (req,res) => {
    res.render('test2',  number = [1,2,3,4,5,6,7,8,9]);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});