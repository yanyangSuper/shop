/* 
    路由配置
*/
const express = require('express');
const router = express.Router();
const server = require('./server');

// 路由分发
router.post('/', (req, res) => {
    res.send('ssss');
})
// 登录
router.post('/login', server.login);

// 注册
router.post('/register', server.register);

// 获取商品列表
router.get('/foods', server.getFoods);
module.exports = router;