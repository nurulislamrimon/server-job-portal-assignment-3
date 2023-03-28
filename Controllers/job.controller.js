const fs = require("fs");
const path = require('path');


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

exports.postJob = async (req, res, next) => {

    try {

        res.send({
            result: "success"
        })
    } catch (error) {
        next(error);
    }

}