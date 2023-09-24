const express = require('express')
const router = express.Router()
const questionsController = require('../controllers/design')
//const verifyJWT = require('../middleware/verifyJWT')

//router.use(verifyJWT)

router.route('/')
    .get(questionsController.getAllquestions)
    .post(questionsController.createNewquestions)
    
    .patch(questionsController.updatequestions)
    router.route('/:id')   
    .get(questionsController.getQuestion)
    .delete(questionsController.deletequestions)
module.exports = router