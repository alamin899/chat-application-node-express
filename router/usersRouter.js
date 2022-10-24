// external imports
const express = require("express");
const { check } = require("express-validator");

/** start internal imports */
const {getUsers,addUser,removeUser} = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {addUserValidators,addUserValidationHandler} = require("../middlewares/users/userValidators");
/** end internal imports */

const router = express.Router();

/** users list route */
router.get("/", decorateHtmlResponse("Users"), getUsers);

/** add user route */
router.post("/",avatarUpload,addUserValidators,addUserValidationHandler,addUser);

/** remove user router */
router.delete("/:id", removeUser);

module.exports = router;