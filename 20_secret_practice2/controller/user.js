const { User } = require('../models');
const bcrypt = require('bcrypt')

exports.index = (req, res) => {
    res.render('index');
};

//로그인
exports.login = (req,res) =>{
    res.render('login')
}
exports.post_login = (req,res) =>{
    const {userid,pw} = req.body
    User.findOne({
        where :{userid}
    }).then((result)=>{
        console.log('res', result)
        if(!result) {
            res.send({result: false, message : '사용자 없음'})            
        }
        const compare = comparePassword(pw, result.pw)
        if (compare) {
            res.send({result:true})
        }else{
            res.send({result : false, message : '비번틀림'})
        }
    })
}



//회원가입
exports.register = (req,res) =>{
    res.render('register')
}

exports.post_register = (req,res) =>{
    const {userid,pw,name} = req.body
    const secretPw = bcryptPassword(pw)
    User.create({
        userid,
        pw : secretPw,
        name,
    }).then((result)=>{
        console.log('result',result)
        res.send({result : true})
    })
}

const bcryptPassword = (password) =>{
    return bcrypt.hashSync(password,10)
}
const comparePassword = (password,dbPassword) =>{
    return bcrypt.compareSync(password,dbPassword)
}