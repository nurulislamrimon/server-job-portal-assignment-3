const path = require('path');

exports.getAllCandidate = (req, res, next) => {
    res.send({
        result: "Success"
    })
    console.log("Candidate");

}

exports.postCandidate = (req, res, next) => {
    if (req.file) {
        const photoUrl = path.join(req.get("host"), req.file.path);
        const { name, email, jobId } = req.body;

        res.send({ photoUrl })
        console.log(photoUrl);
    } else {
        const cvUploadError = new Error("Please upload your CV!")
        throw cvUploadError;
    }

    // const {name,}
}