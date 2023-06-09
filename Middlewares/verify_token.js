const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        if (!bearerToken) {
            const invalidUser = new Error("Unauthorized user!");
            invalidUser.code = 404;
            throw invalidUser;
        } else {
            const token = bearerToken.split(" ")[1];
            const decoded = jwt.verify(token, process.env.secret_key);
            req.headers.decoded = decoded;
            next();
        }
    } catch (error) {
        next(error);
    }
}

module.exports = verifyToken;