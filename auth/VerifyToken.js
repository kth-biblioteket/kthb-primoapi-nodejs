let config = require('../configs/config');

function verifyToken(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    if(token != config.apikeyread){
        return res.json({ auth: false, message: 'Failed to authenticate token.' });
    } else {
        next();
    }
}

module.exports = verifyToken;