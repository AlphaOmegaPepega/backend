const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notesController')
//const verifyJWT = require('../middleware/verifyJWT')

//router.use(verifyJWT)

router.route('/')
    .get(notesController.getAllNotes)
    .post(notesController.createNewNote)
    .patch(notesController.updateNote)
    router.route('/:id')   
    .get(notesController.getNote)
module.exports = router