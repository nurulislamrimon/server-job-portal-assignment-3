const bcrypt = require('bcrypt');
const User = require("../Models/user.model");
const generateToken = require("../Utilities/generateToken");


exports.getUserInfoService = async (email) => {
    const result = await User.findOne({ email: email }).select("-password");
    return result;
}

exports.getUserByEmailService = async (email) => {
    const result = await User.findOne({ email: email });
    return result;
}

exports.postUserService = async (newUser) => {
    const { password } = newUser;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await User.create({ ...newUser, password: hashedPassword, role: "candidate" });
    const token = generateToken(result);
    const { password: pass, ...user } = result.toObject()
    return { user, token };
}

exports.verifyPasswordService = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword)
}

exports.tokenUserService = (existUser) => {
    const { password, ...user } = existUser.toObject();
    const token = generateToken(user);
    return { user, token };

}