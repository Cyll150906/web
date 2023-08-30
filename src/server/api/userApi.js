//api路由
//userApi.js —— 测试用 API 示例

var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
const {query} = require("express");
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1', msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
// 增加用户接口
router.post('/addUser', (req, res) => {

    const sql = $sql.user.add;
    conn.query('SELECT COUNT(*) AS count FROM applications WHERE StudentName = ? AND StudentId = ?', [req.query.StudentName, req.query.StudentId], function (err, result) {
        if (err) {
            console.log(err);
            // 处理错误情况
        } else {
            const existingCount = result[0].count;

            if (existingCount > 0) {
                // 姓名或学号已存在，不进行重复添加
                console.error('Name or StudentId already exists')
                res.json({ message: 'Name or StudentId already exists' });
            } else {
                // 姓名和学号不存在，执行插入操作
                conn.query(sql, [req.query.StudentName, req.query.selectedClass, req.query.StudentId, req.query.selectedLanguage, req.query.QQNumber, req.query.PhoneNumber, req.query.bio], function (err, result) {
                    if (err) {
                        console.log(err);
                        // 处理错误情况
                    } else {
                        jsonWrite(res, result);
                    }
                });
            }
        }
    });
});

router.get('/query', (req, res) => {
    conn.query('select * from user', function (err, row) {
        if (err) {
            console.log(err)
        }
        console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

module.exports = router;

