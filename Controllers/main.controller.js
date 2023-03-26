exports.greetings = (req, res, next) => {
    res.status(200).send({
        status: "Success",
        Message: "Welcome to the Job Portal"
    });
    console.log("Home route responsing!");
}