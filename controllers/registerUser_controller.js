const bcrypt = require('bcryptjs')
const {user} = require('../models')

function showRegistrationForm(req, res) {
  res.render("registration_view")
}

async function registerUser(req, res) {
  const { firstName, lastName, email, password } = req.body
  try{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    const existUser = await user.findOne({where:{email}})
    if (existUser){
      return res.status(400).json({message: "User with this email already exists"})
    }

    const newUser = await user.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    })

    res.redirect(301, '/todo/showAllTodos')
    // res.status(201).json({message: 'User registered successfully', newUser})
  }catch(error) {
    console.error('error while registration: ', error);
    res.status(500).json({message: 'error during registration', error})
  }
}

module.exports = { showRegistrationForm, registerUser }