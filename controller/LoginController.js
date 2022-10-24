/** start external imports */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");
/** end external imports */

/** start internal imports */
const User = require("../models/People");
/** end internal imports */

/** show login form */
function loginForm(req,res,next){
    res.render("index");//index is view file name
}

/** do login here */
async function login(req,res,next){
    try {
        const user = await User.findOne({
            $or:[{email:req.body.username,mobile:req.body.username}]
        });

        if(user && user._id){
            const isValidPassword = await bcrypt.compare(req.body.password,user.password);

            if(isValidPassword){
                // prepare the user object to generate token
                const userObject = {
                    username: user.name,
                    mobile: user.mobile,
                    email: user.email,
                    role: user.role,
                };

                // generate token
                const token = jwt.sign(userObject, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRY,
                });
  
                // set cookie for browser authentication
                res.cookie(process.env.COOKIE_NAME, token, {
                    maxAge: process.env.JWT_EXPIRY, // expired after this time
                    httpOnly: true, // this token only can use http request
                    signed: true, //this is means encripted thakbe token
                });
        
                // set logged in user local identifier for inbox page a ei info kaje lagate pari
                res.locals.loggedInUser = userObject;
        
                res.render("inbox");
            }else{
                throw createError("Login failed! Please try again."); // createError() package from http-errors pakage
            }
        }
        else{
            throw createError("Login failed! Please try again."); // createError() package from http-errors pakage
        }
    } catch (error) {
        res.render("index", {
            data: {           //data object karon amra jate error hole username filed ta fillup thake 
              username: req.body.username,
            },
            errors: {        // this is error message all error we will send this formate
              common: {
                msg: err.message,
              },
            },
          });
    }
}


module.exports ={
    loginForm,login
}