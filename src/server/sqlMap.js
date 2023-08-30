// sql语句
const sqlMap = {

    user: {
        // 添加用户

        add: 'insert into applications (StudentName, selectedClass, StudentId, selectedLanguage, QQNumber, PhoneNumber, bio) values (?,?,?,?,?,?,?);',
        // 查询用户
        select: 'select * from applications where name like "%"?"%"'
    }
};

module.exports = sqlMap