/* 
    服务
*/
// 引进token文件
const JWT = require('./config/token.js');
const db = require('./db.js');
const restram = require('./config/remm.js');

// 登录
exports.login = (req, res) => {
    console.log('------------登录接口已启动....--------');
    // 完善登录判断是否存在token
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
                data: {
                    token
                },
                meta: {
                    message: '登录成功',
                    code: 200
                }
            });
            // restram({}, '登录成功', 200);
        } else {
            res.send({
                data: '用户或密码错误',
                status: 200
            });
        }
    });

}
//注册
exports.register = (req, res, next) => {
    console.log(req.body);
    const info = {
        name: req.body.name,
        password: req.body.password
    };
    const data = {
        name: info.name,
        password: info.password
    };
    let sql = 'insert into users set ?';
    db.base(sql, data, result => {
        console.log(result);
        if (result.affectedRows === 1) {
            res.send({
                meta: 200,
                msg: '注册成功'
            })
        }
        
    })
}
// 获取所有产品
exports.getFoods = (req, res) => {
    const sql = 'select * from users';
    data = {};
    db.base(sql, data, result => {
        console.log(2);
        console.log(result);
        console.log(result[0]);
        console.log(result[1].id);
    });
    res.send('产品列表');
}

/**
 * 获取某类产品
 */
exports.getCateFoods = (req, res) => {
    console.log(req.body);
}

// 获取某个产品
exports.getOneFoods = (req, res) => {
    const id = req.body.proid;
    const sql = 'select * from users where proid=?';
    db.base(sql, id, result => {
        console.log(2);
        console.log(result);
    });
    res.send('商品详情');
}

// 新品列表
exports.getnewFoods = (req, res) => {
    const info = req.body;
}

// 上传图片
exports.pullPhoto = (req, res) => {
    res.send('他来了他来了');
    console.log(req.file);
    const url = '192.168.124.32:8080' + '/' + req.file.filename;
    console.log(url);
}
