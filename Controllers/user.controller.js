const { postUser, getUserByEmail, getAllUsers } = require("../Services/user.services");

exports.getUsers = async (req, res, next) => {
    try {
        const result = await getAllUsers();
        res.status(200).send({
            status: "success",
            data: result
        })
        console.log(`${result.length} users are responsed!`);
    } catch (error) {
        next(error);
    }
}

exports.postUser = async (req, res, next) => {
    try {
        const user = req.body;
        if (!user) {
            res.status(400).send({
                status: "failed",
                message: "Invalid user input!"
            })
            console.log("Invalid user input!");
        } else {
            if (!await getUserByEmail(user?.email)) {
                const result = await postUser(user);
                res.status(200).send({
                    status: "Success",
                    data: result
                })
                console.log(result);

            } else {
                throw new Error("User already exist");
            }
        }
    } catch (error) {
        next(error);
    }

}