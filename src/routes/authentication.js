const express = require("express");
const router = express.Router();

const passport = require("passport");

//SIGN UP

router.get("/signUp", (req, res) => {
  res.send("SIGN UP FORM");
});

router.post("/signUp", (req, res, next) => {
  passport.authenticate("local.signup", {
    successRedirect: "/",
    failureRedirect: "/signup",
  })(req, res, next);
  console.log("UserID: ", req.body);
});

//SIGN UP

router.get("/signIn", (req, res) => {
  res.send("SIGN IN FORM");
});

module.exports = router;
