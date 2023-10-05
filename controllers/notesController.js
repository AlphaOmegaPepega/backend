const Notes = require('../models/notes')
const asyncHandler = require('express-async-handler')


const getAllNotes = asyncHandler(async (req, res) => {
    // Get all questionss from MongoDB
    const notes = await Notes.find().lean()

    // If no questionss 
    if (!notes?.length) {
        return res.status(400).json({ message: 'No notes found' })
    }

    res.json(notes)
})


const getNote=asyncHandler(async (req, res) => {
    
    const user = req.params.id
   
    const notes = await Notes.find({user}).lean().exec()
  
res.json(notes)




})


const createNewNote = async (req, res) => {
    const {user,notes} = req.body

    // Confirm data
    if (!user || !notes) {
       return res.status(400).json({ message: 'All fields are required' })
    }

       const notesObject ={user,date}

    // Create and store new questions 
    const newNotes = await Notes.create(notesObject)

    if (newNotes) { //created 
        res.status(201).json({ message: `New Notes created` })
    } else {
        res.status(400).json({ message: 'Invalid data received' })
    }
   
}
const updateNote = asyncHandler(async (req, res) => {
const {user,notes}=req.body
const currentNotes = await Notes.find({user}).exec()
currentNotes.notes=notes
const updatedNotes= await currentNotes.save()

    res.json({ message: `updated` })

})
module.exports = {
   getAllNotes,
   createNewNote,
   updateNote,
   getNote
}