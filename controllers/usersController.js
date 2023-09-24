const User = require('../models/users')
const jwt=require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const test='clown'

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
    // Get all users from MongoDB
    const users = await User.find().select('-password').lean()

    // If no users 
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found me' })
    }

    res.json(users)
})
const getUser=asyncHandler(async (req, res) => {
    
    const email = req.params.id
   
    const user = await User.findOne({email}).lean().exec()
  
res.json(user)




})
const cookieTest=asyncHandler(async (req, res) => {
    const {email}=req.body
    if(!email){
        res.status(403).json({message:"No data"})
    }
    const user = await User.findOne({ email }).lean().exec()
    const token=jwt.sign(process.env.CLIENT_ID,process.env.JWT_TOKEN_SECRET,{expiresIn:"1h"})
    res.cookie("token",token,{
        httpOnly:true
    })
    res.json(user)
       


})
const cookieAnswer=asyncHandler(async (req, res) => {
    const token=req.cookies.token
    
   
       


})
const createNewUser = async (req, res) => {
    const {email,date} = req.body

    // Confirm data
    if (!email || !date) {
       return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate username
    const duplicate = await User.findOne({ email }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate user' })
    }

   

    const userObject ={email,date}

    // Create and store new user 
    const user = await User.create(userObject)

    if (user) { //created 
        res.status(201).json({ message: `New user with email ${email} created` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
}



// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const {id,username, roles,size,connected} = req.body
   

   
    console.log(id)

    // Does the user exist to update?
    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    

    // Allow updates to the original user 

    user.username = username
    user.roles = roles
    user.size = size
    user.connected=connected
    



    const updatedUser = await user.save()

    res.json({ message: `${updatedUser.username} updated` })
})
const deleteUser=asyncHandler(async(req,res)=>{
    const email=req.params.id

    console.log(email)
    const user = await User.findOne({email}).exec()

    user.deleteOne()
   
    res.json({ message: `deleted` })
})



module.exports = {
    getAllUsers,
    getUser,
    createNewUser,
    getUser,
    updateUser,
    deleteUser,
    cookieTest
}
