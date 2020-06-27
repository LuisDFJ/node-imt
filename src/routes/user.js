const express = require("express");
const router = express.Router();
const utils = require("../lib/profileUtils");

//DATABASE POOL
const pool = require("../database");

//PROFILES

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  const userinfo = await pool.query("SELECT * FROM users WHERE username = ?", [
    username,
  ]);
  utils.profileExists(res, userinfo);
});

module.exports = router;
