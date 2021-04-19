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
router.post('/', (req, res) => {
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
module.exports = router;