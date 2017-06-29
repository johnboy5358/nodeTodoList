const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

mongoose.connect('mongodb://johnswindin:Kaanapal1@ds141232.mlab.com:41232/todo')
// Create mongoDb schema
const todoSchema = new mongoose.Schema({
  item: String
})

// Create Model
const Todo = mongoose.model('Todo', todoSchema)

// test code...
const itemOne = Todo({item: 'Go cycling.'}).save(err => {
  if (err) throw err
  console.log('item saved')
})
// end test code...


let todos = []

module.exports = function (app) {
  
  app.delete('/todo/delete/*', (req, res) => {
    const id = Number(req.url.slice(req.url.lastIndexOf('/')+1))
    todos = todos.filter((v,i) => i !== id )
    res.send(todos)
  })

  app.get(['/', '/todo'], (req, res) => {
    console.log(todos)
    res.render('todo', {todos: todos})
  })

  app.post('/todo', urlencodedParser, (req, res) => {
    todos.push(req.body)
    res.render('todo', {todos: todos})
  })

}