const students = require('../model/Model');

exports.main = (req, res) => {
    res.render('index');
};
exports.lists = (req,res) => {
    res.render('lists', {lists : students});
}
exports.getadd = (req,res) => {
    res.render('add')
}
exports.add = (req,res) => {
    const {name,gender,major} = req.body
    console.log(req.body)
    students.push({name,gender,major})
    res.send({result : true})
}
