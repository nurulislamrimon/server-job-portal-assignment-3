
exports.getJobs = async (req, res, next) => {
    try {
        res.send({ result: "success" })
        console.log("job response");
    } catch (error) {
        next(error);
    }
}

exports.postJob = async (req, res, next) => {

    try {
        console.log(req.file)

        // console.log('DONE');
        res.send({
            result: "success"
        })
    } catch (error) {
        next(error);
    }

}