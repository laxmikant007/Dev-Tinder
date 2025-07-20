import mongoose from "mongoose";

const  UserSchema = new  mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        unique : true,
        lowercase : true,
        required : true,
        trim : true
    },
    phone : {
        type : Number,
        unique : true,
        required : true,
        minlength : 9
    },
    password : {
        type : String,
        required : true
    }
})

export default mongoose.model('user', UserSchema);
