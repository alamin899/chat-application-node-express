const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    mobile:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    avater:{
        type:String
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
},
{
    timestamps:true  //mongoose.Schema() method second parameter timestamps true means created_at and updated_at automatic set
}
);

const People = mongoose.model("People",peopleSchema);

module.exports = People;