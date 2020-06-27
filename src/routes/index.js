const express = require("express");
const router = express.Router();

//HOME PAGE

router.get("/", (req, res) => {
  res.send("HOME PAGE");
});

module.exports = router;
