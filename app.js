const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

/** main express application create */
const app = express();

/** config dotenv for .env file access */
dotenv.config();

/** mongo database connection by mongoose */
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
  console.log("mongodb connection succeed");
 })
 .catch((err)=>{
  console.log(err.message);
 })


/** request data parser */
app.use(express.json()); //this is for json data handle
app.use(express.urlencoded({extended:true})); //this is for form data handle

/** set view engline for html view */
app.set("view engine","ejs");  //here 1st parameter is express property table value

/** set static folder for css js and image */
app.use(express.static(path.join(__dirname,"public")));


