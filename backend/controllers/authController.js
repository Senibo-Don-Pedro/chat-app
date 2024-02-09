import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js'

export const signup = async (req, res) => {
  try {
    //Inputs from frontend
    const { fullName, username, password, confirmPassword, gender } = req.body

    //check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" })
    }

    //check if user exists
    const user = await User.findOne({ username })

    //if exists throw this error
    if (user) {
      return res.status(400).json({ error: 'User already exists' })
    }

    //create user if not exists

    //Hash password here

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //random profile picture

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    //create user

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
    })

    if (newUser) {
      //Generate JWT token
      await generateTokenAndSetCookie(newUser._id, res)
      await newUser.save()

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      })
    } else {
      res.status(400).json({ error: 'invalid user data' })
    }
  } catch (error) {
    console.log('error', error.message)
    res.status(500).json({ error: 'INTERNAL ERROR' })
  }
}

export const login = async (req, res) => {
  try {
    //get user from database
    const { username, password } = req.body
    //check if user exists or not
    const user = await User.findOne({ username })

    //check if psswords match
    // if password doesnt exist or if it is null, compare with an empty string
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ''
    )

    //return error if any of them fails
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: 'Invalid username or password' })
    }

    generateTokenAndSetCookie(user._id, res)

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    })
  } catch (error) {
    console.log('error in login controller', error.message)
    res.status(500).json({ error: 'INTERNAL ERROR' })
  }
}

export const logout = async (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 })
    res.status(200).json({ message: 'Logged out successfully' })
  } catch (error) {
    console.log('error in logout controller', error.message)
    res.status(500).json({ error: 'INTERNAL ERROR' })
  }
}
