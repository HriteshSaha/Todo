const { todoList } = require('../models')

module.exports = async (req, res) => {

  const {name, workDetails} = req.body

  try{
    const TodoItem = await todoList.create({
    name,
    workDetails
  })

  res.redirect(301, './todo/showAllTodos')  
  
  } catch(error){
    console.error('Error occurred during insertion:', error);

    res.status(500).json({
      message: 'Error creating todo item',
      error: error.message
    });
  }
}