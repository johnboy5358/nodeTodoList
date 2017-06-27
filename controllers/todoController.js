const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })
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