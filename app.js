const express = require("express")
const app = express()
const router = process.env.PORT||3000
app.listen(router,console.log("Hello World"))