const Questions = require('../models/Delivery')
const User = require('../models/users')
const asyncHandler = require('express-async-handler')


// @desc Get all questionss
// @route GET /questionss
// @access Private
const getAllquestions = asyncHandler(async (req, res) => {
    // Get all questionss from MongoDB
    const questionss = await Questions.find().lean()

    // If no questionss 
    if (!questionss?.length) {
        return res.status(400).json({ message: 'No questionss found' })
    }

    res.json(questionss)
})
const getQuestion=asyncHandler(async (req, res) => {
    
    const user = req.params.id
   
    const users = await Questions.find({user}).lean().exec()
  
res.json(users)




})

const createNewquestions = async (req, res) => {
    const {user,date} = req.body

    // Confirm data
    if (!user || !date) {
       return res.status(400).json({ message: 'All fields are required' })
   }

    // Check for duplicate questionsname
   

   

    const questionsObject ={user,date}

    // Create and store new questions 
    const questions = await Questions.create(questionsObject)

    if (questions) { //created 
        res.status(201).json({ message: `New  Products result created` })
    } else {
        res.status(400).json({ message: 'Invalid questions data received' })
    }
}



// @desc Update a questions
// @route PATCH /questionss
// @access Private
const updatequestions = asyncHandler(async (req, res) => {
    const {user,Business, Product,Technology, Agile,BusinessAnswr,ProductAnswr,TechnologyAnswr,AgileAnswr} = req.body
   

   
    

    // Does the questions exist to update?
    const questions = await Questions.find({user}).exec()

    if (!questions) {
        return res.status(400).json({ message: 'questions not found' })
    }
    const question=questions[questions.length-1]
    question.Business=Business ? Business : question.Business
    question.Product=Product ?  Product : question.Product
    question.Technology=Technology ? Technology : question.Technology
    question.Agile= Agile ?  Agile : question.Agile
    question.BusinessAnswr=BusinessAnswr ? BusinessAnswr : question.BusinessAnswr
    question.ProductAnswr= ProductAnswr ?  ProductAnswr : question.ProductAnswr
    question.TechnologyAnswr=TechnologyAnswr ? TechnologyAnswr : question.TechnologyAnswr
    question.AgileAnswr= AgileAnswr ?  AgileAnswr : question.AgileAnswr
   

    // Allow updates to the original questions 

   


    

    const updatedquestions = await question.save()

    res.json({ message: `updated` })
})



module.exports = {
    getAllquestions,
    createNewquestions,
    updatequestions,
    getQuestion
    
}
