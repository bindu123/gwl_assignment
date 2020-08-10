const express = require("express")
const bodyParser = require("body-parser")

const app = express();

const fs = require("fs")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const routes = require("./src/routes/router")(app, fs)

const server = app.listen(8000, () => {
    console.log("listening on port %s", server.address().port)
})