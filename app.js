const todoController = require('./controllers/todoController')
const express = require('express')

const app = express()


// set pug as view engine
app.set('view engine', 'pug')
// serve static files from the public dir.
app.use(express.static('public'))

// fire controller
todoController(app)

// listen on port 3000
app.listen(3000)
console.log("server started ... listening on port 3000")