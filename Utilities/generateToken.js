const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
    return token = jwt.sign({ email: user.email, role: user.role }, process.env.secret_key, { expiresIn: "1d" });
}