const User = require("../Models/user.model");
const jwt = require("jsonwebtoken");


exports.getAllUsers = async () => {

    const result = await User.find({})
    return result;
}

exports.getUserByEmail = async (email) => {
    const result = await User.findOne({ email: email });
    return result;
}

exports.postUser = async (newUser) => {
    const token = jwt.sign({ email: newUser.email }, process.env.secret_key, { expiresIn: "1d" });
    const user = await User.create(newUser);
    return { user, token };
}