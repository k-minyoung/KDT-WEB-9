const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json());
//정적파일 불러오기
app.use('/uploads', express.static(__dirname + '/uploads'));
//multer
const upload = multer({
    //dest : 업로드한 파일을 저장할 경로 지정
    dest: 'uploads/'
});
const uploadDetail = multer({
    //storage: 저장할 공간에 대한 정보
    //diskStorage : 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
    storage: multer.diskStorage({
        //done 은 이름 마음대로(콜백함수)
        destination(req,file, done) {
            //첫번쨰는 에러처리(null, 두번째는 경로)
            done(null,'uploads/')
        },
        filename(req, file, done){
            //위의 done이랑은 각각 다른 애
            const ext = path.extname(file.originalname);
            console.log('ext',ext);

            done(null,path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: {filesize : 5 * 1024 * 1024}, 
})

//view engine
app.set('view engine', 'ejs')
app.set('views','./views')

//router
app.get('/',(req,res) => {
    res.render('index');
});
//싱글
app.post('/upload',uploadDetail.single('userfile'),(req,res)=>{
    console.log(req.file);
    console.log(req.body);
});
//멀티 ver1
app.post('/upload/array' , uploadDetail.array('userfiles'), (req,res)=>{
    console.log(req.files);
    console.log(req.body);
});
//멀티 ver2
//두개를 만들어줬기 때문에 객체배열{} 두개
app.post('/upload/fields', uploadDetail.fields([{name:'userfile1'},{name:'userfile2'}]),(req,res)=>{
    console.log(req.files);
    console.log(req.body);
});
//동적
app.post('/dynamicFile',uploadDetail.single('dynamic-file'),(req,res)=> {
    console.log(req.file);
    res.send(req.file);
});


//server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});