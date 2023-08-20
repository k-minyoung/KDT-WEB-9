const { User } = require('../models');
const bcrypt = require('bcrypt')

exports.index = (req, res) => {
    res.render('index');
};

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