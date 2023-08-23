const mysql = require('mysql');

//mysql연결
// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'kdt',
//     password: '',
//     database: 'kdt',
//     port: 3306,
// });


//가상 데이터

const students = [
    {
        id : 1,
        name : 'one',
        gender : 'male',
        major : 'ABC'
    },
    {
        id : 2,
        name : 'two',
        gender : 'female',
        major : 'DEF'
    },
    {
        id : 3,
        name : 'three',
        gender : 'male',
        major : 'GHI'
    },
    {
        id : 4,
        name : 'four',
        gender : 'female',
        major : 'JKL'
    },
    {
        id : 5,
        name : 'five',
        gender : 'male',
        major : 'MNO'
    },
]
module.exports = students