const { user } = require('../models')
const bcrypt = require('bcryptjs')

const loginForm = (req, res)=>{
  res.render('login_view')
}

const userLogin = async (req, res)=> {
  const {email, password} = req.body

  try {
    const existingUser = await user.findOne({where:{email}})

    if(!existingUser){
      return res.status(400).json({message:'Wrong username or password'})
    }

    const checkPassword = await bcrypt.compare(password, existingUser.password)
    if(!checkPassword){
      return res.status(400).json({message:'Wrong username or password'})
    }

    req.session.user = {
      id: existingUser.id,
      email: existingUser.email,
      firstName: existingUser.firstName
    }

    return res.status(200).json({message: 'Login Successful'})

  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
}

module.exports = {
  loginForm,
  userLogin
}
