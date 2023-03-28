const fs = require("fs");
const path = require('path');
const JobsServices = require("../Services/jobs.services");
const { getUserByEmailService } = require("../Services/user.services");


exports.getJobs = async (req, res, next) => {
    try {
        const fileName = "hon's-3rd-year-result-369613564.pdf"
        const route = './test.txt';
        // const fileReadStream = fs.createReadStream('./test.txt');

        // fileReadStream.on("data", (err, chunk) => {
        //     if (err) {
        //         next(err)
        //     } else {
        //         console.log(chunk);

        //     }
        // })
        // res.send({ result: route })
        res.redirect("http://localhost:5000/public\\cv\\hon's-3rd-year-result-17559775.pdf");

        // console.log(route);
        // res.send({ result: "success" })
        // console.log("job response");
    } catch (error) {
        next(error);
    }
}

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
                data: result
            })
            console.log("New job added!");
        } else {
            throw new Error("Assignment Failure!")
        }
    } catch (error) {
        next(error);
    }
}

exports.updateJob = async (req, res, next) => {
    try {
        const jobId = req.params.id;
        const job = await JobsServices.getJobById(jobId);
        const managerEmail = req.headers.decoded;

        if (managerEmail.role === "admin" || managerEmail.email === job.manager.email) {
            const result = await JobsServices.updateJobByIdService(jobId, req.body);
            res.send({
                status: "success",
                data: result
            })
            console.log(`job ${jobId} is updated!`);
        } else {
            throw new Error("Failed to update job!")
        }

    } catch (error) {
        next(error)
    }
}