/* 
    生成token，解析token
*/
// 生成token
const jwt = require('jsonwebtoken');
const secret = require('./jwt_config.js');


exports.generate = function (data) {
    const token = jwt.sign(data, secret.secret, {expiresIn: 60 * 60 * 10});
    return token;
},
exports.analysis = function (token) {
    const rsl = jwt.verify(token, secret.secret);
    return rsl;
}