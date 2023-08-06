const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views' , './views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//임시 데이터
const commentData = [
    {
        id : 1,
        userid : 'Alpha',
        date : '2023-08-01',
        comment : '하이'

    },
    {
        id : 2,
        userid : 'Brovo',
        date : '2023-08-02',
        comment : '반가워요'

    },
    {
        id : 3,
        userid : 'Charli',
        date : '2023-08-03',
        comment : '이 댓글은 영국으로부터'

    },
    {
        id : 4,
        userid : 'Delta',
        date : '2023-08-04',
        comment : '시작되어 행운의 편지라고'

    }
];

app.get('/',(req,res)=> {
    res.render('index')
});
app.get('/comment',(req,res)=>{
    res.render('commentlist', {commentlist : commentData});
});

app.get('/comment/:id', (req,res)=>{
    console.log(req.params)
    const commentId = req.params.id
    console.log(commentData)
    res.render('commentDetail', {commentInfos : commentData[commentId] });
    
})


app.get('*',(req,res)=> {
    res.render('404')
});
app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`)
});