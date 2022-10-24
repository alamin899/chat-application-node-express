/** start external imports */
const express = require("express");
/** end external imports */


/** start internal imports */
const {loginForm} = require("../controller/LoginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {doLoginValidators,doLoginValidationHandler} = require("../middlewares/login/loginValidators");
/** end internal imports */

const page_title = "Login";

/** create router and use in app.js file for get globally */
const router = express.Router();

/** Route List */
router.get("/",decorateHtmlResponse(page_title),loginForm); //decorateHtmlResponse("Login") this is for title set and local.html = true

/** Process login route */
router.post("/",decorateHtmlResponse(page_title),doLoginValidators,doLoginValidationHandler,login);

module.exports = router;