const Questions = require('../models/Discovery')
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
        res.status(201).json({ message: `New Designs result created` })
    } else {
        res.status(400).json({ message: 'Invalid questions data received' })
    }
}



// @desc Update a questions
// @route PATCH /questionss
// @access Private

const updatequestions = asyncHandler(async (req, res) => {
    const {user,UserResearch, Design,Market, Synthesising,UserResearchAnswr,DesignAnswr,MarketAnswr,SynthesisingAnswr} = req.body
   

   
    

    // Does the questions exist to update?
    const questions = await Questions.find({user}).exec()

    if (!questions) {
        return res.status(400).json({ message: 'questions not found' })
    }
    
    const question=questions[questions.length-1]
   
    question.UserResearch=UserResearch ? UserResearch : question.UserResearch
    question.Design=Design ? Design : question.Design
    question.Market=Market ? Market : question.Market
    question.Synthesising= Synthesising ?  Synthesising : question.Synthesising
    question.UserResearchAnswr=UserResearchAnswr ? UserResearchAnswr : question.UserResearchAnswr
    question.DesignAnswr=DesignAnswr ? DesignAnswr : question.DesignAnswr
    question.MarketAnswr=MarketAnswr ? MarketAnswr : question.MarketAnswr
    question.SynthesisingAnswr= SynthesisingAnswr ?  SynthesisingAnswr : question.SynthesisingAnswr
   

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
