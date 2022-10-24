/** start external imports */
const express = require("express");
/** end external imports */


/** start internal imports */
const {loginForm} = require("../controller/LoginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse")
/** end internal imports */


/** create router and use in app.js file for get globally */
const router = express.Router();

/** Route List */
router.get("/",decorateHtmlResponse("Login"),loginForm); //decorateHtmlResponse("Login") this is for title set and local.html = true


module.exports = router;