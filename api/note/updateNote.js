const app = require(`express`).Router();

const noteModel = require(`../../mongodb/note.model`);

app.post(`/update`, async (req, res) => {
  const { _id = `632dd541c1e433ced9f4ec89`, title="alii", desc="alii" } = req.body;
  await noteModel.findByIdAndUpdate({ _id }, { title , desc });
//   console.log(req.body);
  res.redirect(`/home`);
});

module.exports = app;
