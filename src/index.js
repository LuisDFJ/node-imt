const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const MYSQLStore = require("express-mysql-session");
const path = require("path");
const passport = require("passport");
const { ppid } = require("process");

const { database } = require("./keys");

// INITIALIZATION - SERVER
const app = express();
require("./lib/passport");

//SETTINGS
app.set("port", process.env.PORT || 4000);

//MIDDLEWARE
app.use(
  session({
    secret: "dbsession",
    resave: false,
    saveUninitialized: false,
    store: new MYSQLStore(database),
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

//GLOBAL VARIABLES

//ROUTES
app.use(require("./routes"));
app.use(require("./routes/authentication"));
app.use("/user", require("./routes/user"));

//PUBLIC
app.use(express.static(path.join(__dirname, "public")));

//STARTIN - SERVER
app.listen(app.get("port"), () => {
  console.log("SERVER ON PORT", app.get("port"));
});
