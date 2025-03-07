const express = require("express");
const router = require("./routes/create.routes");
const app = express();
const morgon = require('morgan')
const cors = require('cors')


app.use(morgon('dev'))
app.use(cors())
app.use(
  express.json({
    limit: "10mb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

app.use("/v1/api/project", router);

module.exports = app;
