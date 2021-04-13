
/* 
    统一返回格式
*/
function ss (data, message, code) {
    res.send({
        data: data,
        meta : {
            "msg" : message,
            "status" : code
        }
    })
}