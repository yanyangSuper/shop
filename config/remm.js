
/* 
    统一返回格式
*/
module.exports = function (data, message, code) {
    res.send({
        data: data,
        meta : {
            "msg" : message,
            "status" : code
        }
    })
}