const {DataTypes} = require('sequelize')


const studentModel = (sequelize) => {
    const Student = sequelize.define('student',{
        id:{
            type: DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true,
        },
        userid : {
            type : DataTypes.STRING(31),
            allowNull : false,
        },
        password: {
            type : DataTypes.STRING(255), //나중에 암호화처리할때 길어지므로 늘려줌
            allowNull : false,
        },
        email: DataTypes.STRING(63) // 이렇게 데이터타입 하나만 있으면 생략가능
        
      
        
    });
    return Student;

}

module.exports = studentModel