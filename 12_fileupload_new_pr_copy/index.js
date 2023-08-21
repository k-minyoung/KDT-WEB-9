const express = require('express');
const multer = require('multer')
const path = require('path')
const app = express();
const PORT = 8000;

//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//정적파일
app.use('/uploads',express.static(__dirname + '/uploads'))

const storage = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null, 'uploads/')
    },
    filename : (req,file,cb) => {
        const ext = path.extname(file.originalname)
        const newName = path.basename(file.originalname) + Date.now() + ext;
        cb(null, newName)
    }
})

const upload = multer({storage})

//router
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/upload',upload.array('files'),(req,res)=>{
    console.log(req.files)
    res.send(req.files)
})

app.use('*',(req,res)=>{
    res.render('404')
})
//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
