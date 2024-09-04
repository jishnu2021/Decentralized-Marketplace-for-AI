const router = require("express").Router();
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const { ownerLogin, ownerRegister } = require("../controller/Owner-controller");
const {
  tenantRegister,
  tenantLogin,
} = require("../controller/User-controller");

const {
  Submitform,
  Getprofileimage,
} = require("../controller/Setting-controller");

// Use absolute path or correct relative path from the root of the server project
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // Ensure the directory exists and adjust path accordingly
      cb(null, path.join(__dirname, "../../clientside/src/photos/"));
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),
}).single("image");

router.post("/ownerregister", ownerRegister);
router.post("/ownerLogin", ownerLogin);
router.post("/userregister", tenantRegister);
router.post("/userlogin", tenantLogin);
router.post("/submit-form", upload, Submitform);
router.get("/getimage/:email", Getprofileimage);

module.exports = router;
