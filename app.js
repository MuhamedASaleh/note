const express = require(`express`);
const app = express();
const port = 3000;
const path = require(`path`);
const mongoose = require(`mongoose`);
app.use(express.static(path.join(__dirname, `public`)));
app.use(express.urlencoded({ extended: false }));
app.use(require(`./api/user/home`));
app.use(require(`./api/user/login`));
app.use(require(`./api/user/logout`));
app.use(require(`./api/user/register`));
app.use(require(`./api/note/addNote`));
app.use(require(`./api/note/deleteNote`));
app.use(require(`./api/note/updateNote`));
mongoose
  .connect(`mongodb://localhost:27017/project1`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connected`);
  })
  .catch(() => {
    console.log(`not connected`);
  });
app.get(`*`, (req, res) => {
  res.send(`404 page not found`);
});
app.listen(process.env.PORT || port, () => {
  console.log(`port 3000 listening`);
});
