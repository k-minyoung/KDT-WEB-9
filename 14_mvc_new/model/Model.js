const mysql = require('mysql');

//mysql연결
// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'kdt',
//     password: '',
//     database: 'kdt',
//     port: 3306,
// });

//임시데이터
const comments = [
    {
        id : 1,
        userid : 'one',
        date: '2023-08-05',
        comment : '안녕1'
    },
    {
        id : 2,
        userid : 'two',
        date: '2023-08-06',
        comment : '안녕2'
    },
    {
        id : 3,
        userid : 'three',
        date: '2023-08-07',
        comment : '안녕3'
    },
    {
        id : 4,
        userid : 'four',
        date: '2023-08-08',
        comment : '안녕4'
    },
];
module.exports = comments;