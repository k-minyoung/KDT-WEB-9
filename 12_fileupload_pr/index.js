const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//정적파일 불러오기
app.use('/uploads', express.static(__dirname + '/uploads'));

//multer 세팅
const uploadDetail = multer({
    storage : multer.diskStorage({
        destination(req,file,done) {
            done(null,'uploads/')
        },
        filename(req,file,done) {
            console.log('filename: ', req.body)
            const ext = path.extname(file.originalname);
            console.log('ext',ext);
            done(null,req.body.userid + Date.now()+ ext);
        },
    }),
    limits : {filesize : 5 * 1024 * 1024},
});

//view engine
app.set('view engine', 'ejs')
app.set('views','./views')

//router
app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/result', uploadDetail.single('profile'),(req,res)=> {
    res.render('result',{
        userInfo : req.body,
        profile: req.file.path,
    });
})
// //싱글


// app.post('/uploads',uploadDetail.single('userfile'),(req,res)=>{
//     console.log(req.file);
//     console.log(req.body);
//     res.render('index2')
    
    
    
// });


//server
app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`)
});