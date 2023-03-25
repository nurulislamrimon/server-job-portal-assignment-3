const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: String,
    name: {
        type: String,
        required: true,
    }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;