const express = require('express');
const app = express();
const PORT = 8000;

//view engine
app.set('view engine', 'ejs')
app.set('views','./views')


//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//index 생략 가능. /routes라고 쓰면 디폴트가 index이기 때문
const router = require('./routes/index');
app.use('/',router);

//ex
//const userRouter = require('./routes/user');
//app.use('/user',userRouter)




//* 맨 마지막 선언
//app.use 써도 작동함. 그러나 도메인 당 use 한개밖에 못써서 안쓰고, 404에만 씀
app.use('*',(req,res)=> {
    res.render('404');
});


//server
app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`)
});
