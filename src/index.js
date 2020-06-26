const express = require("express");
const morgan = require("morgan");
const { ppid } = require("process");

// INITIALIZATION - SERVER
const app = express();

//SETTINGS
app.set("port", process.env.PORT || 4000);

//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

//GLOBAL VARIABLES

//ROUTES
app.use(require("./routes"));

//PUBLIC

//STARTIN - SERVER
app.listen(app.get("port"), () => {
  console.log("SERVER ON PORT", app.get("port"));
});
