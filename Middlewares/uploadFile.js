const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: "cv/",
    filename: function (req, file, cb) {
        const fileExt = path.extname(file.originalname);
        const uniqueSuffix = Math.round(Math.random() * 1E9);
        const fileName = file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("-");

        cb(null, fileName + '-' + uniqueSuffix + fileExt)
        console.log(file.originalname);
    }

})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg" ||
            file.mimetype === "application/pdf"
        ) {
            cb(null, true)
        } else {
            cb(new Error("File type must be PNG,JPG,JPEG,PDF"))
        }

    }
})


module.exports = upload;