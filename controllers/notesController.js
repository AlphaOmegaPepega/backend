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
    const {user} = req.body

    // Confirm data
    if (!user) {
       return res.status(400).json({ message: 'All fields are required' })
    }

       const notesObject ={user}

    // Create and store new questions 
    const newNotes = await Notes.create(notesObject)

    if (newNotes) { //created 
        res.status(201).json({ message: `New Notes created` })
    } else {
        res.status(400).json({ message: 'Invalid data received' })
    }
   
}
const updateNote = asyncHandler(async (req, res) => {
const {user,PersonalNotes,DeliveryNotes,DesignNotes,DiscoveryNotes,IndustryKnwlgNotes,StackholderNotes,VisionNotes}=req.body
const currentNotes = await Notes.find({user}).exec()
const currentNote=currentNotes[currentNotes.length-1]
currentNote.PersonalNotes=PersonalNotes ? PersonalNotes : currentNote.PersonalNotes
currentNote.DeliveryNotes=DeliveryNotes ? DeliveryNotes : currentNote.DeliveryNotes
currentNote.DesignNotes=DesignNotes ? DesignNotes : currentNote.DesignNotes
currentNote.DiscoveryNotes= DiscoveryNotes ?  DiscoveryNotes : currentNote.DiscoveryNotes
currentNote.Synthesising= IndustryKnwlgNotes ?  IndustryKnwlgNotes : currentNote.IndustryKnwlgNotes
currentNote.StackholderNotes= StackholderNotes ?  StackholderNotes : currentNote.StackholderNotes
currentNote.VisionNotes= VisionNotes ?  VisionNotes : currentNote.VisionNotes


const updatedNotes= await currentNotes.save()

    res.json({ message: `updated` })

})
const deleteNote=asyncHandler(async(req,res)=>{
    const user = req.params.id
    const note = await Notes.find({user}).exec()
    note.map(quest=>{
        quest.deleteOne()
    })
    res.json({ message: `deleted` })
})
module.exports = {
   getAllNotes,
   createNewNote,
   updateNote,
   getNote,
   deleteNote
}