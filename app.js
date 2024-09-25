const express = require('express')
const homepage = require('./routes/homePage_route.js')
const todoForm = require('./routes/todo_route.js')
const showAllTodos = require('./routes/showAllTodos_route.js')
const methodOverride = require('method-override')
const deleteTodo = require('./routes/deleteTodo_route.js')

const app = express()
const port  = 3000
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))

app.use('/', homepage)
app.use('/', todoForm)
app.use('/todo', showAllTodos)
app.use('/todo',deleteTodo)




app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})