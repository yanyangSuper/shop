/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-07-26 15:05:15
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-19 11:15:53
 * @FilePath: /shop/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* 
    项目入口文件
*/
const fs = require('fs');
const path = require('path');
const http = require('http');
// 引入静态文件
const static = require('./staticServer');
const { charsets } = require('mime');

/* 
    创建服务器
*/
// http.createServer(function(request, response) {
//     response.writeHead(200, {
//         'Content-Type' : 'text/plain; charset=utf8'
//     });
//     console.log(request.url);
//     if (request.url === '/') {
//         response.end('hello main');
//     }
//     if (request.url === "/login") {
//         response.end("登录成功");
//     }
//     static.staticServer(request, response, 'static/img');
// }).listen(8080, '192.168.124.32', ()=> {
//     console.log('running...')
// })

/* 
    静态资源加载模块
*/
// node.js静态资源自己去读-使用fs模块

const express = require('express');
const bodyParser = require('body-parser');
const os = require('os');
const router = require('./router.js');
const network = os.networkInterfaces();
// const ip = network.WLAN[1].address;
const ip = '192.168.10.100'
const app = express();
const port = 8080;

//处理请求参数
//挂载参数处理中间件 
// parse application/x-www-form-urlencoded  处理post请求
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 引用静态加载资源
app.use(express.static('static'));
app.use(express.static('uploads'));

// 跨域处理----可能存在不安全
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 调用路由
app.use(router);

app.listen(port, ip, () => {
    console.log('服务已启动...');
})
