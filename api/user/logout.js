
const app = require(`express`).Router()

app.get(`/logout`,(req,res)=>{
    res.redirect(`/login`)
})

module.exports = app