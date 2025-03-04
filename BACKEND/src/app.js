const express = require('express')
const router = require('./routes/create.routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/v1/api/project', router)

module.exports = app