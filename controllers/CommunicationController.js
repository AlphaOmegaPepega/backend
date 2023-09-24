const Questions = require('../models/Personal')
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
        return res.status(400).json({ message: 'No questionss founds' })
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
        res.status(201).json({ message: `New Communications result created` })
    } else {
        res.status(400).json({ message: 'Invalid questions data received' })
    }
}



// @desc Update a questions
// @route PATCH /questionss
// @access Private
const updatequestions = asyncHandler(async (req, res) => {
    const {user,Collaboration,Communication,Quality,DecisionMaking,Learning,Organisational,Bias,CommunAnswr,CollabAnswr,QualitAnswr,DecisionAnswr,BiasAnswr,LearningAnswr,OrganizationAnswr} = req.body
   

   
    

    // Does the questions exist to update?
    const questions = await Questions.find({user}).exec()

    if (!questions) {
        return res.status(400).json({ message: 'questions not found' })
    }
    const question=questions[questions.length-1]
    question.Collaboration=Collaboration ? Collaboration : question.Collaboration
    question.Communication=Communication ? Communication : question.Communication
    question.Quality=Quality ? Quality : question.Quality
    question.DecisionMaking=DecisionMaking ? DecisionMaking : question.DecisionMaking
    question.Learning= Learning ? Learning : question.Learning
    question.Organisational=Organisational ? Organisational :  question.Organisational
    question.Bias=Bias ? Bias : question.Bias
    question.CommunAnswr=CommunAnswr? CommunAnswr:question.CommunAnswr
    question.CollabAnswr=CollabAnswr? CollabAnswr:question.CollabAnswr
    question.QualitAnswr=QualitAnswr? QualitAnswr:question.QualitAnswr
    question.DecisionAnswr=DecisionAnswr? DecisionAnswr:question.DecisionAnswr
    question.BiasAnswr=BiasAnswr? BiasAnswr:question.BiasAnswr
    question.LearningAnswr=LearningAnswr? LearningAnswr:question.LearningAnswr
    question.OrganizationAnswr=OrganizationAnswr? OrganizationAnswr:question.OrganizationAnswr
    // Allow updates to the original questions 

   


    

    const updatedquestions = await question.save()

    res.json({ message: `updated` })
})

const deletequestions=asyncHandler(async(req,res)=>{
    
    const user = req.params.id
    console.log(user)
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
