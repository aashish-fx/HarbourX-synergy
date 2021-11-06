const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const googleUserSchema = new Schema({
    date:{
        type:String,
        required:true
    },
    googleId:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    email:{
       type:String,
       required:true
    },
    image:{
        type:String
    },
    status:{
        type:String,
        default:"I am new"
    },

});
module.exports = mongoose.model("GoogleUser",googleUserSchema);