// route doesn't exist
exports.routeNotFound = (req, res) => {
    res.status(404).send({
        status: "failed",
        message: "Route doesn't exist!"
    });
    console.log("Route doesn't exist!".red.bold);
}

// handle all errors
exports.errorHandler = (err, req, res, next) => {
    if (err.message) {
        res.status(400).send({
            status: "failed",
            message: err.message
        })
        console.log(err.message.red.bold);

    } else {
        res.status(400).send({
            status: "failed",
            message: "Internal server error!"
        })
        console.log("Internal server error!".red.bold);
    }
    next();
}