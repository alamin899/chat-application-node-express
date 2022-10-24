const {check,validationResult} = require("express-validator");

const loginValidators = [
    check("username").isLength({min:5}).withMessage("email or phone number is required"),
    check("password").isLength({min:5}).withMessage("password is required"),
];


const loginValidationHandler = function(req,res,next){ //this is middleware
    const errors = validationResult(req);  // er maddome je validation error hoyechay seti pai
    const mappedErrors = errors.mapped();    //  map korbo karon error gula ogusalo format a thake

    if (Object.keys(mappedErrors).length === 0) {
        next();  // error na thake next middleware kaj korbe
      } else {
        res.render("index", {
          data: {
            username: req.body.username, // eti karon username field jeno filled thake error howar poro
          },
          errors: mappedErrors,
        });
      }
}

module.exports = {
    loginValidators,loginValidationHandler
}