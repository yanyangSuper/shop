/* 
    项目入口文件
*/
console.log(1);
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
const { Router } = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');
const app = express();
const port = 8080;

//处理请求参数
//挂载参数处理中间件 
// parse application/x-www-form-urlencoded  处理post请求
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 引用静态加载资源
app.use(express.static('static'));

// 调用路由
app.use(router);

app.listen(port, '192.168.124.32', () => {
    console.log('服务已启动...');
})