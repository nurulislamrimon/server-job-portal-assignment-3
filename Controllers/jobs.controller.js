const fs = require("fs");
const path = require('path');
const { postJobs, postJobsService } = require("../Services/jobs.services");
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
        const { name } = await getUserByEmailService(email);
        const job = { ...req.body, manager: { email, name } };
        const result = await postJobsService(job)
        res.send({
            status: "success",
            data: result
        })
        console.log("New job added!");

    } catch (error) {
        next(error);
    }

}