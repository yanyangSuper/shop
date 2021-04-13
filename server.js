/* 
    服务
*/
// 引进token文件
const JWT = require('./config/token.js');
const db = require('./db.js');

// 登录
exports.login = (req, res) => {
    console.log('------------登录接口已启动....--------');
    const info = {
        name: req.body.name,
        password: req.body.password
    }
    // 数据库查询
    const data = [info.name, info.password];
    const sql = 'select * from users where name=? and password=?';
    db.base(sql, data, (result) => {
        if (result.length !== 0) {
            const token = JWT.generate(info);
            res.send({
                data: '登录成功',
                status: 200
            });
        } else {
            res.send({
                data: '用户或密码错误',
                status: 200
            });
        }
    });

}
//注册
exports.register = (req, res) => {
    res.send("已注册");
}
// 获取产品
exports.getFoods = (req, res) => {
    res.send('产品列表');
}
