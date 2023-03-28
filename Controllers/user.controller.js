const userServices = require("../Services/user.services");


exports.getUsersController = async (req, res, next) => {
    try {
        const { email } = req.headers.decoded;
        const result = await userServices.getUserInfoService(email);
        res.status(200).send({
            status: "success",
            data: result
        })
        console.log(`user ${email} info responsed!`);
    } catch (error) {
        next(error);
    }
}

exports.signupUserController = async (req, res, next) => {
    try {
        const user = req.body;
        if (!user.email) {
            throw new Error("Invalid user information!");
        } else {
            if (!await userServices.getUserByEmailService(user?.email)) {
                const result = await userServices.postUserService(user);
                res.status(200).send({
                    status: "Success",
                    data: result
                })
                console.log("New user added!");

            } else {
                throw new Error("User already exist");
            }
        }
    } catch (error) {
        next(error);
    }

}
exports.loginUserController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (email && password) {
            const existUser = await userServices.getUserByEmailService(email);
            if (existUser) {
                const isPasswordCorrect = await userServices.verifyPasswordService(password, existUser.password);
                if (isPasswordCorrect) {
                    const result = userServices.tokenUserService(existUser);
                    res.status(200).send({
                        status: "Success",
                        data: result
                    })
                    console.log('User loged in!');
                } else {
                    throw new Error("Incorrect password!")
                }
            } else {
                throw new Error("Sorry! You are not registered yet!")
            }
        } else {
            throw new Error("Please enter your credential!");
        }
    } catch (error) {
        next(error);
    }

}