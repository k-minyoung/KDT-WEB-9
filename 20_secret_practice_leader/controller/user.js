const { User } = require('../models');
const bcrypt = require('bcrypt')

exports.index = (req, res) => {
    res.render('index');
};
//회원가입
exports.getregister =  (req, res) => {
    res.render('register');
};
exports.register =  (req,res) =>{
     const {userid , pw , name} =req.body;
     const hashPw = bcryptPassword(pw);

     User.create({
        userid,
        name,
        pw : hashPw
     }).then((result)=>{
        console.log(result)
        res.json({result : true})
     })
}

//로그인
exports.getlogin = (req, res) => {
    res.render('login');
};
exports.login = (req,res)=>{
    const {userid,pw} =req.body;
    User.findOne({
        where : {userid},
    }).then (result => {
        console.log(result);
        const compare = comparePassword(pw,result.pw)
        res.json ({compare});
    })
}


//단방향
const bcryptPassword = (password) =>{
    return bcrypt.hashSync(password,10)
};
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword)
}