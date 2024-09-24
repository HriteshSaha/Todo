const express = require('express')
const homepage = require('./routes/homePage_route.js')
const todoForm = require('./routes/todo_route.js')
const showAllTodos = require('./routes/showAllTodos_route.js')

const app = express()
const port  = 3000
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homepage)
app.use('/', todoForm)
app.use('/todo', showAllTodos)




app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})