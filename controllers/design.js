const Questions = require('../models/Design')
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
        res.status(201).json({ message: `New Visuals result created` })
    } else {
        res.status(400).json({ message: 'Invalid questions data received' })
    }
}



// @desc Update a questions
// @route PATCH /questionss
// @access Private
const updatequestions = asyncHandler(async (req, res) => {
    const {user,Product, Visual,UXDesign,UXTesting,ProductAnswr,VisualAnswr,UXDesignAnswr,UXTestingAnswr} = req.body
   

   
    

   
    const questions = await Questions.find({user}).exec()

    if (!questions) {
        return res.status(400).json({ message: 'questions not found' })
    }
    const question=questions[questions.length-1]

    question.Product=Product ? Product : question.Product
    question.Visual=Visual ? Visual : question.Visual
    question.UXDesign=UXDesign ? UXDesign : question.UXDesign
    question.UXTesting=UXTesting ? UXTesting : question.UXTesting
    question.ProductAnswr=ProductAnswr ? ProductAnswr : question.ProductAnswr
    question.VisualAnswr=VisualAnswr ? VisualAnswr : question.VisualAnswr
    question.UXDesignAnswr=UXDesignAnswr ? UXDesignAnswr : question.UXDesignAnswr
    question.UXTestingAnswr=UXTestingAnswr ? UXTestingAnswr : question.UXTestingAnswr
   

    // Allow updates to the original questions 

   


    

    const updatedquestions = await question.save()

    res.json({ message: `updated` })
})
const deletequestions=asyncHandler(async(req,res)=>{
    const user = req.params.id
    const questions = await Questions.find({user}).exec()
    questions.map(quest=>{
        quest.deleteOne()
    })
    res.json({ message: `deleted` })
})



module.exports = {
    getAllquestions,
    createNewquestions,
    updatequestions,
    getQuestion,
    deletequestions
}
