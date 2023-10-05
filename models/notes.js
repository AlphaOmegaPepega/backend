const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    notes: [{
        type: String,
        
       
    }],
    titles: [{
        type: String,
        
       
    }],

})

module.exports = mongoose.model('notes', notesSchema)