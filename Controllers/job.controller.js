
exports.getJobs = async (req, res, next) => {
    try {



        res.send({ result: "success" })
        console.log("job response");
    } catch (error) {
        next(error);
    }

}