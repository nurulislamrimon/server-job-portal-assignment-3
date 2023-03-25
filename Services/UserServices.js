const User = require('../Models/UserModel');

exports.getUsers = async (req, res, next) => {
    try {
        const result = await User.find({})
        res.status(200).send({
            status: "success",
            data: result
        })
        console.log(result);
    } catch (error) {
        next(error)
    }

}