const createError = require("http-errors");

/** 404 not found error handler */
function notFoundHandler(req,res,next){
    next(createError(404,"your request content was not found"));
}


// default error handler
function errorHandler(err, req, res, next) {
    res.locals.error = process.env.NODE_ENV === "development" ? err : { message: err.message };
  
    res.status(err.status || 500);
  
    // res.locals.html ata true thakle html response otherwise json . ata amra kono akta middleware a set kore dibo jokhon kono request asbe route a 
    if (res.locals.html) {
      // html response
      res.render("error", { // this error is views/error.ejs file
        title: "Error page",
      });
    } else {
      // json response
      res.json(res.locals.error);
    }
  }



module.exports ={
    notFoundHandler,
    errorHandler,
}