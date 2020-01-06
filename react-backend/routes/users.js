const express = require("express"),
  bcrypt = require("bcryptjs"),
  router = express.Router();

const UsersModel = require("../models/usersModel");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("Login").status(200);
});

router.get("/signup", async (req, res, next) => {
  const signUp = await UsersModel.save();
  res.json(signUp).status(200);
})
module.exports = router;
