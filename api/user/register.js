const app = require(`express`).Router();
const { validationResult } = require(`express-validator`);
const modelSchema = require(`../../mongodb/user.model`);
const bcrypt = require(`bcryptjs`);
const validation = require(`../../validation/register.validation`);
app.get(`/`, (req, res) => {
  res.render(`register.ejs`);
});

app.post(`/handleSignUp`, validation, async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  const error = validationResult(req);
  if (error.isEmpty()) {
    const user = await modelSchema.findOne({ email });
    if (!user) {
      bcrypt.hash(password, 7 , async (err, hash) => {
        await modelSchema.insertMany({
          name,
          email,
          password: hash,
        });
      });
      res.redirect(`/login`);
    } else {
      console.log(`email already exist`);
      res.redirect(`/`);
    }
  } else {
    console.log(error);
    res.redirect(`/`);
  }
});

module.exports = app;
