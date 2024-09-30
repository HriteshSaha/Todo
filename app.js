const express = require('express')
const session = require('express-session')
const homepage = require('./routes/homePage_route.js')
const todoForm = require('./routes/todo_route.js')
const showAllTodos = require('./routes/showAllTodos_route.js')
const methodOverride = require('method-override')
const deleteTodo = require('./routes/deleteTodo_route.js')
const updateTodoStatus = require('./routes/updateStatus_route.js')
const registerUser = require('./routes/registerUser_route.js')
const loginRoutrer = require('./routes/login_route.js')

const app = express()
const port  = 3000
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.use(session({
    secret: 'This_is_a_secret_key_@123',
     name: 'abc.io',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false, maxAge: 24 * 60 * 60 * 1000}
}))

app.use('/', homepage)
app.use('/', todoForm)
app.use('/todo', showAllTodos)
app.use('/todo',deleteTodo)
app.use('/todo', updateTodoStatus)

// registration and authentication
app.use('/user', registerUser)
app.use('/user', loginRoutrer)




app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})