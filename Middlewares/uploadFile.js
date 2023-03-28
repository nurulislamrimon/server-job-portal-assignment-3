const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: "public/cv/",
    filename: function (req, file, cb) {
        try {
            const fileExt = path.extname(file.originalname);
            const uniqueSuffix = Math.round(Math.random() * 1E9);
            const fileName = file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("-");

            cb(null, fileName + '-' + uniqueSuffix + fileExt)
            console.log(file.originalname);
        } catch (error) {
            cb(error)
        }
    }

})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        try {
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
        } catch (error) {
            cb(error)
        }

    }
})


module.exports = upload;