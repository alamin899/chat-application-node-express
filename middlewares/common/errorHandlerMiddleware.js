const createError = require("http-errors");

/** 404 not found error handler */
function notFoundHandler(req,res,next){
    next(createError(404,"your request content was not found"));
}

/** default error handler */
function errorHandler(err,req,res,next){
    res.render("error",{   // this error is views/error.ejs file
        title:"error page"
    }) 
}


module.exports ={
    notFoundHandler,
    errorHandler,
}