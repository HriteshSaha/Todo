const { todoList } = require('../models')

module.exports = async (req, res) => {
  try {
  const todoId = req.params.id

  const deletedCount = await todoList.destroy({
    where: { id: todoId }
  });

  if (deletedCount === 0) {
    return res.status(404).send('Todo not found');
  }

  res.redirect('/todo/showAllTodos')
  } catch (error) {
    console.error(error)
    res.status(500).send('server error while deleting')
  }
} 