const express = require('express')
const router = express.Router()
const questionsController = require('../controllers/Vision')
//const verifyJWT = require('../middleware/verifyJWT')

//router.use(verifyJWT)

router.route('/')
    .get(questionsController.getAllquestions)
    .post(questionsController.createNewquestions)
    
    .patch(questionsController.updatequestions)
    router.route('/:id')   
    .get(questionsController.getQuestion)
module.exports = router