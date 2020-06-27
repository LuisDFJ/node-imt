const express = require("express");
const router = express.Router();

const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("../lib/auth");

//SIGN UP
router.all("/signUp", isNotLoggedIn);

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
router.all("/signIn", isNotLoggedIn);

router.get("/signIn", (req, res) => {
  res.send("SIGN IN FORM");
});

router.post("/signIn", (req, res, next) => {
  passport.authenticate("local.signin", {
    successRedirect: "/",
    failureRedirect: "/signIn",
  })(req, res, next);
});

router.get("/");

module.exports = router;
