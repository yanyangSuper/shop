/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-07-26 15:05:16
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-19 11:18:49
 * @FilePath: /shop/router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* 
    路由配置
*/
const express = require('express');
const router = express.Router();
const server = require('./server');
// 上传图片等
var multer  = require('multer');

// 配置项---路径
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./uploads");
    },
    filename: function (req, file, callback) {
    //   console.log(file);
      callback(null, file.originalname);
    }
  });
var upload = multer({storage: storage});

// 上传限制
// var upload = multer({
//     storage: Storage
//   }).fields([{
//     name: 'myfiles',
//     maxCount: 100
//   }, {
//     name: 'uploadName',
//     maxCount: 100
//   }]);

// 路由分发
router.get('/', (req, res) => {
    res.send('ssss');
})
// 登录
router.post('/login', server.login);

// 上传图片
router.post('/photo', upload.single('file'), server.pullPhoto)

// 注册
router.post('/register',server.register);

// 获取商品列表
router.get('/foods', server.getFoods);

// 获取说说
router.get('/topic', server.getComments);
module.exports = router;