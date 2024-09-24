const { todoList } = require("../models");

module.exports = async (req, res) => {
  try {
    // getting all todo data and storing it to 'todos'
    const todos = await todoList.findAll();

    // passing the todo data to the view
    res.render("showAllTodo_view.ejs", { todos: todos });
  } catch (error) {
    console.error("error fetching todos");
    res.status(500).send("server error");
  }
};