import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     username: {
        type: String,
        required: true,
        unique: true,
        minLeangth: 5,
     },
     email: {
        type: String,
        required: true,
        unique: true,
        minLeangth: 5,
        validate: {
             validator: function (emailValue) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
             },
             message: 'invalid email format'
        }
     },
     password: {
        type: String,
        required: true,
        minLeangth: 5
    }
}, {timestamps: true});

const user = mongoose.model("user", userSchema);

export default user;