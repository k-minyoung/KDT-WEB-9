const express = require('express')
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json());
//view engine
app.set('view engine', 'ejs')
app.set('views','./views')

//router
app.get('/',(req,res) => {
    res.render('login');
});

//axios
app.get('/axios',(req,res)=>{
    console.log('back', req.query)
    res.send(req.query)
});

app.post('/axios',(req,res)=> {
    const id = 'minyoung';
    const pw = '1234';
    if (id === req.body.id && pw === req.body.pw) {
        res.send({result: true , userInfo: req.body});
    }else {
        res.send({result : false , userInfo : null});
    };
});


//리더님코드
// app.post('/resultPost', (req, res) => {
//     const id = 'kdt9';
//     const pw = '1234';
//     if (id === req.body.username && pw === req.body.password) {
//         res.send({ result: true, userInfo: req.body });
//     } else {
//         res.send({ result: false, userInfo: null });
//     }
// });

//server start
app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
});