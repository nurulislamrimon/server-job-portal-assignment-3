const mongoose = require("mongoose");

function dbConnection() {
    mongoose.connect(process.env.db_local)
        .then(() => console.log("db connected".blue.bold))
        .catch(error => console.log(error.message.red.bold)
        )
}

module.exports = dbConnection;