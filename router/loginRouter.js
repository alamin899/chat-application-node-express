/** start external imports */
const express = require("express");
/** end external imports */


/** start internal imports */
const {loginForm} = require("../controller/LoginController");
/** end internal imports */


/** create router */
const router = express.Router();

/** Route List */
router.get("/",loginForm);


module.exports = router;