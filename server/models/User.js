const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating Scheme;

const UserScheme = new Schema({
    email: {
        type: String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    }
});

let User = mongoose.model("user", UserScheme);

module.exports = User;