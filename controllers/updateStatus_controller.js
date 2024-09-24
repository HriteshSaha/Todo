const { todoList } = require('../models');

module.exports = async (req, res) => {
  const todoId = req.params.id;
  const isDone = req.body.isDone === 'true'; // Convert the checkbox value to boolean

  try {
    await todoList.update(
      { isDone }, // Update the isDone status
      { where: { id: todoId } } // Specify the condition
    );

    res.redirect('/showAllTodos'); // Redirect after the update
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error while updating status');
  }
};
