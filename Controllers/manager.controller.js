const { getJobById } = require("../Services/jobs.services");
const managerServices = require("../Services/manager.services");

exports.getJobsByManagerController = async (req, res, next) => {
  try {
    const { email } = req.headers.decoded;
    const result = await managerServices.getJobsByManagerService(email);
    res.send({
      status: "success",
      data: result,
    });
    console.log(`manager ${email} all jobs responed!`);
  } catch (error) {
    next(error);
  }
};

exports.getAJobByManagerController = async (req, res, next) => {
  try {
    const userEmail = req.headers.decoded.email;
    const jobId = req.params.id;
    const job = await getJobById(jobId);

    if (userEmail === job.manager.email) {
      res.send({
        status: "success",
        data: job,
      });
      console.log(`Job ${jobId} is responsed!`);
    } else {
      throw new Error("Sorry, You are not authorized for this action!");
    }
  } catch (error) {
    next(error);
  }
};
