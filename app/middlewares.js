const jwt = require('jsonwebtoken');
const User = require('@app/database').User;
exports.auth = function (req, res, next) {
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, key.tokenKey, function (err, payload) {
            if (payload) {
                User.findById(payload.userId).then(
                    (doc)=>{
                        req.user=doc;
                        next()
                    }
                )
            } else {
                res.sendStatus(401);
            }
        })
    }catch(e){
        res.sendStatus(401)
    }
}