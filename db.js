/* 
    数据库连接部分
*/
const mysql = require('mysql');
const config = require('./config/jwt_config');
exports.base = function(sql, data, callback) {
    // 数据库连接配置
    const connection = mysql.createConnection(config.dbConfig);
    // 连接数据库
    connection.connect();
    // 查询操作
    connection.query(sql, data, (err, results, fields) => {
        if (err) throw err;
        callback(results);
    });
    //关闭数据库
	connection.end();
}
