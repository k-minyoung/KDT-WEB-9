//const model = require('../model/Model');
//models/index에서 index는 생략
const {User} = require('../models'); 
const bcrypt = require('bcrypt')


////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    res.render('index');
};
//회원가입페이지
const signup = (req, res) => {
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    res.render('signin');
};
//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
    // console.log(req.query);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });

    //findOne은 데이터베이스에서 하나의 정보를 찾을때 사용, 객체 반환
    //where : 는 객체형태로 찾을 정보를 입력
    User.findOne({
        where: {id: req.params.number},
    }).then((result) => {
        res.render('profile', {data : result}) //위에 result => 문이랑 똑같음,
        // 다만 배열이 아니라 객체로 반환하기 때문에 result [0]이 아님
    })
};
const buy = (req, res) => {};

///////////////////////////////
//POST
//회원가입
const post_signup =  async (req, res) => {
    // model.db_signup(req.body, () => {
    //     res.json({ result: true });
    // });
    
    const {userid, name, pw} =req.body
    //create 데이터 생성
    //실습과제 - 비밀번호 암호화하여 저장
    const secretPw = await bcryptPassword(pw)
    User.create({
        userid,
        name,
        pw : secretPw
        }).then(()=> {
        res.json({result : true})
    })
};
//로그인
const post_signin =  async (req, res) => {
    // model.db_signin(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.json({ result: true, data: result[0] });
    //     } else {
    //         res.json({ result: false });
    //     }
    // });


    //실습과제 -로그인
   
    //step1 아이디를 찾아서 사용자 존재 유무 체크
   
    const {userid, pw} = req.body
    const result = await User.findOne({
        where : {userid}
    })
    
        console.log('res',result)
        if(!result) {
            res.send({result : false, message : '사용자가 존재하지 않음'})
        }
     //step2 입력된 비밀번호 암호화하여 기존 데이터와 비교
        const compare = await comparePassword(pw, result.pw)
        if (compare) { 
            res.send({result : true, message : '로그인 성공', data : result})
        }else {
            res.send({result : false, message : '비밀번호 틀림'})
        }
    
};
/////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });

    //update ( 수정될 정보를 객체형태로 입력, 수정될 곳 객체로 입력)
    const {name, pw, id} =req.body
    User.update({name:name, pw:pw}, {where: {id:id}}).then( ()=> {
        res.json({result: true});
    })
};

////////////////////////////////////
//DELETE
//회원탈퇴 destory()
const destroy = (req,res)=> {
    const {id} = req.body
    User.destroy({
        where : {id}
    }).then(()=> {
        res.send({result : true})
    })
}


module.exports = {
    main,
    signup,
    signin,
    profile,
    buy,
    post_signup,
    post_signin,
    edit_profile,
    destroy
};
///function bcrypt
//암호화
const bcryptPassword = (password) => {
    return bcrypt.hash(password,10)
}
//비교
const comparePassword = (password, dbPassword) => {
    return bcrypt.compare(password,dbPassword)
}


