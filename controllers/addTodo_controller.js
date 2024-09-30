const { todoList } = require('../models')

module.exports = async (req, res) => {

  const {name, workDetails} = req.body

  if (!req.session.user || !req.session.user.id) {
    return res.status(401).json({ message: 'User not authenticated' });
  }

  try{
    const TodoItem = await todoList.create({
    name,
    workDetails,
    userId: req.session.user.id
  })

  res.redirect(301, '/todo/showAllTodos')  
  
  } catch(error){
    console.error('Error occurred during insertion:', error);

    res.status(500).json({
      message: 'Error creating todo item',
      error: error.message
    });
  }
}