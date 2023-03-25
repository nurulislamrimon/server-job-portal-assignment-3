const mongoose = require("mongoose");

function dbConnection() {
    mongoose.connect(process.env.db_remote)
        .then(() => console.log("db connected"))
        .catch(error => console.log(error)
        )
}

module.exports = dbConnection;