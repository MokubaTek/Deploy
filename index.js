const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send('<h1>Hi There</h1>')
})
app.listen(port, ()=> console.log('litening on port $(port)'))
