const app = require(`express`).Router();
const userModel = require(`../../mongodb/user.model`);
const bcrypt = require(`bcryptjs`);
app.get(`/login`, (req, res) => {
  res.render(`login.ejs`);
});

app.post(`/handleSignin`, async (req, res) => {
  const { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (user) {
    const match =await bcrypt.compare(password, user.password);
    if (match) {
      
      res.redirect(`/home`);
    } else {
      console.log(`wrong password`);
      res.redirect(`/login`);
    }
  } else {
    console.log(`such email don't exist you should sign up first`);
    res.redirect(`/`);
  }
});

module.exports = app;
