/* 
    静态资源读取
*/
const fs = require('fs');
const path = require('path');
const mine = require('./mime.json');
exports.staticServer = (req, res, root) => {
    fs.readFile(path.join(root, req.url), (err, fileContent) => {
        if (err) {
            // 没有找到文件
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.end('未找到');
        } else {
            let dtype = 'text/html';
            // 获取请求文件的后缀
            let ext = path.extname(req.url);
            // 如果请求的文件后缀合理，就获取到标准响应格式
            if (mine[ext]) {
                dtype = mine[ext];
            };
            if (dtype.startsWith('text')) {
                dtype += '; charset=utf8';
            };
            res.writeHead(200, {
                'Content-Type': dtype
            });
            res.end(fileContent);
        }
    })
}