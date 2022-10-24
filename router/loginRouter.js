/** start external imports */
const express = require("express");
/** end external imports */


/** start internal imports */
const {loginForm,login,logout} = require("../controller/LoginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {loginValidators,loginValidationHandler} = require("../middlewares/login/loginValidator");
const {redirectLoggedIn} = require("../middlewares/common/checkLogin");
/** end internal imports */

const page_title = "Login";

/** create router and use in app.js file for get globally */
const router = express.Router();

/** Route List
 * redirectLoggedIn middleware if already logged in then it will redirect to inbox route(dashboard route)
 */
router.get("/",decorateHtmlResponse(page_title),redirectLoggedIn,loginForm); //decorateHtmlResponse("Login") this is for title set and local.html = true

/** Process login route */
router.post("/",decorateHtmlResponse(page_title),loginValidators,loginValidationHandler,login);


/** logout router */ 
router.delete("/", logout);

module.exports = router;