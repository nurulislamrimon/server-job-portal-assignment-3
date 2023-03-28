const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return token = jwt.sign({ email: user.email, role: user.role }, process.env.secret_key, { expiresIn: "1d" });
}

module.exports = generateToken;