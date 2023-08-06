const express = require('express');
const app = express();
const PORT = 8000;

//view engine
app.set('view engine', 'ejs')
app.set('views','./views')


//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//임시 데이터
const comments = [
    {
        id:1,
        userId:'helloworld',
        date:'2023-08-01',
        comment: '안녕하세요'
    },
    {
        id:2,
        userId:'helloworld2',
        date:'2023-08-02',
        comment: '반갑습니다'
    },
    {
        id:3,
        userId:'helloworld3',
        date:'2023-08-03',
        comment: '행복하세요'
    },
    {
        id:4,
        userId:'helloworld4',
        date:'2023-08-04',
        comment: '집가고싶다'
    },
];


//router
app.get('/',(req,res)=>{
    res.render('index');
});
//GET /commnets
app.get('/comments',(req,res)=>{
    res.render('comments',{commentInfos: comments});
});
//GET /comment/:id
app.get('/comment/:id', (req,res)=> {
    // console.log(req.params);
    // console.log(req.params.id);
    const commentId= req.params.id
    console.log(comments[commentId-1]);    
    res.render('comment',{commentInfo : comments[commentId-1]});
});
//* 맨 마지막 선언
app.get('*',(req,res)=> {
    res.render('404');
});


//server
app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`)
});