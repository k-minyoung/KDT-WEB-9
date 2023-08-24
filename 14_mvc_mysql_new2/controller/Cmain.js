const model = require('../model/Model');

////////////////////////////////////////
//GET

const main = (req, res) => { //메인페이지
    res.render('index');
};
const signup = (req,res) => { //회원가입
    res.render('signup')
};
const signin = (req,res) => { //로그인
    res.render('signin')
};
//회원정보조회
const profile = (req,res) => {
    console.log(req.params);
    // console.log(req.query)
    model.db_profile(req.params, (result)=> {
        res.render('profile',{data : result[0]})
    })
}

//////////////////////////////////////
//POST

const post_signup = (req, res) => { //회원가입
    model.db_signup(req.body, () => {
        res.json({result : true})
    });
};
const post_signin = (req, res) => { //로그인
    model.db_signin(req.body, (result)=> {
        if(result.length > 0) {
            res.json({result : true, data: result[0]})
        } else {
            res.josn({ result : false})
        }
    })
};


//////////////////////////////////
//PATCH
const edit_profile = (req,res) => {
    model.db_profile_edit(req.body, ()=> {
        res.json({result :true})
    })
}
module.exports = {
    main,
    signup,
    signin,
    profile,
    post_signup,
    post_signin,
    edit_profile
};