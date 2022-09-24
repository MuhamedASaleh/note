
const app = require(`express`).Router()
const noteModel = require(`../../mongodb/note.model`)

app.get(`/home`, (req,res)=> {
    // const allNote = await noteModel.find({})
    // res.json(allNote)
    res.render(`home.ejs`)
})




module.exports = app