const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../database");
const helpers = require("./helpers");

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const rows = await pool.query("SELECT * FROM users WHERE username = ?", [
        username,
      ]);
      if (rows.length > 0) {
        const user = rows[0];
        const validPassword = await helpers.matchPassword(
          password,
          user.password
        );
        if (validPassword) {
          done(null, user);
        } else {
          done(null, false);
        }
      } else {
        return done(null, false);
      }
    }
  )
);

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const { lastName, firstName, email } = req.body;
      const newUser = {
        username,
        password,
        lastName,
        firstName,
        email,
      };
      const collisionUser = await pool.query(
        "SELECT COUNT(*) AS count FROM users WHERE username = ?",
        [newUser.username]
      );
      const collisionEmail = await pool.query(
        "SELECT COUNT(*) AS count FROM users WHERE email = ?",
        [newUser.email]
      );
      if (collisionUser[0].count) {
        return done(null, false);
      } else if (collisionEmail[0].count) {
        return done(null, false);
      } else {
        newUser.password = await helpers.encryptPassword(password);
        const result = await pool.query("INSERT INTO users SET ?", [newUser]);
        newUser.id = result.insertId;
        return done(null, newUser);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const rows = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
  done(null, rows[0]);
});
