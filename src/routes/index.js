const express = require("express");
const router = express.Router();

//HOME PAGE

router.get("/", (req, res) => {
  res.send("Home page");
});

//PROFILE

router.get("/user/:username", (req, res) => {
  const db = [
    { username: "Luis", n: 1 },
    { username: "Joe", n: 2 },
    { username: "David", n: 3 },
  ];
  res.send("User profile: ");
});

module.exports = router;
