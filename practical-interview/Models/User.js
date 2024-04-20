const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    token: {
        type: String
    }
})

const User = model("User", userSchema)

export default User