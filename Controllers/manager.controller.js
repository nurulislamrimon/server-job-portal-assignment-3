const managerServices = require("../Services/manager.services");


exports.getJobsByManager = async (req, res, next) => {
    try {
        const { email } = req.headers.decoded;
        const result = await managerServices.getJobsByManagerService(email)
        res.send({
            status: "success",
            data: result
        })
        console.log(`manager ${email} all jobs responed!`);
    } catch (error) {
        next(error);
    }
}