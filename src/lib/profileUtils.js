const utils = {};

utils.profileExists = (res, userinfo) => {
  if (userinfo.length > 0) {
    const user = userinfo[0];
    res.send("User profile: " + user.username);
  } else {
    res.send("User not found");
  }
};

module.exports = utils;
