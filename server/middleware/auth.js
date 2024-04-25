const jwt = require('jsonwebtoken')

exports.verify = (req, res, next) => {
    const { token: bearerToken }  = req.headers
    if(!bearerToken){
        return next();
    }

    const token = bearerToken.split(' ')[1];
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = user
    } catch (error) {
        console.log({error});
        return res.status(400).json({
            message: error.message
        })
    }
    next();
}