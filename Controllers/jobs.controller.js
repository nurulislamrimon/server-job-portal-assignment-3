const JobsServices = require("../Services/jobs.services");
const { getUserByEmailService } = require("../Services/user.services");

exports.getAllJobsController = async (req, res, next) => {
  try {
    const result = await JobsServices.getAlljobs(req.query);
    res.send({
      status: "success",
      data: result,
    });
    console.log(`${result.length} jobs responsed!`);
  } catch (error) {
    next(error);
  }
};

exports.getSpecificJobController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await JobsServices.getJobById(id);
    res.send({
      status: "success",
      data: result,
    });
    console.log(`Job ${id} is responsed!`);
  } catch (error) {
    next(error);
  }
};

exports.postJobsController = async (req, res, next) => {
  try {
    const { email } = req.headers.decoded;
    const { _id, name } = await getUserByEmailService(email);
    const job = { ...req.body, manager: { id: _id, email, name } };

    const result = await JobsServices.postJobsService(job);
    const addedToUser = await JobsServices.assignedJobToManager(email, result);
    if (addedToUser) {
      res.send({
        status: "success",
        data: result,
      });
      console.log("New job added!");
    } else {
      throw new Error("Assignment Failure!");
    }
  } catch (error) {
    next(error);
  }
};

exports.updateJob = async (req, res, next) => {
  try {
    const jobId = req.params.id;
    const job = await JobsServices.getJobById(jobId);
    const managerEmail = req.headers.decoded;

    if (
      managerEmail.role === "admin" ||
      managerEmail.email === job.manager.email
    ) {
      const result = await JobsServices.updateJobByIdService(jobId, req.body);
      res.send({
        status: "success",
        data: result,
      });
      console.log(`job ${jobId} is updated!`);
    } else {
      throw new Error("Failed to update job!");
    }
  } catch (error) {
    next(error);
  }
};

exports.applyForJobController = async (req, res, next) => {
  try {
    // file url generate
    const host = req.get("host");
    const { path } = { ...req.file };
    let cvUrl;
    if (path) {
      cvUrl = `${req.protocol}://${host}/${path}`;
    }
    // get user info
    const email = req.headers.decoded.email;
    const { name, mobile, _id, appliedJobs } = await getUserByEmailService(
      email
    );
    // get job information
    const jobId = req.params.id;
    const { title, jobType, deadline } = await JobsServices.getJobById(jobId);
    const newApplication = {
      name,
      mobile,
      email,
      cv: cvUrl,
      userId: _id,
      appliedFor: { jobId, title, jobType },
    };

    const isAlreadyApplied = JobsServices.isJobApplicationAlreadyExistService(
      appliedJobs,
      jobId
    );

    if (!isAlreadyApplied) {
      if (new Date(deadline) >= new Date()) {
        const result = await JobsServices.applyForJobService(newApplication);
        res.send({
          status: "success",
          data: result,
        });
        console.log("New job application submitted!");
      } else {
        throw new Error("Sorry, Application date over!");
      }
    } else {
      throw new Error("Sorry, You already have an application for this job!");
    }
  } catch (error) {
    next(error);
  }
};
