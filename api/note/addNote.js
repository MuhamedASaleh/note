
const app = require(`express`).Router()
const noteModel = require(`../../mongodb/note.model`)
app.post(`/addNote`,async (req,res)=>{
    const {title,desc,userId=`632df844c90592dd2c74229f`} = req.body
    await noteModel.insertMany({
        title,
        desc,
        userId
    })

    res.redirect(`/home`)
})

module.exports = app

