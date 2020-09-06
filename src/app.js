const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())

//User router
app.use(userRouter)

//Task router
app.use(taskRouter)

module.exports = app