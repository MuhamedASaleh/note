const app = require(`express`).Router();
const noteModel = require(`../../mongodb/note.model`);
app.get(`/delete`, async (req, res) => {
  const { _id = `632dd541c1e433ced9f4ec89` } = req.body;
  await noteModel.findOneAndDelete({ _id });
  console.log(req.body);
  res.redirect(`/home`);
});

module.exports = app;
