const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    PersonalNotes: [{
        type: String,
        
       
    }],
    DeliveryNotes: [{
        type: String,
        
       
    }],
    DesignNotes: [{
        type: String,
        
       
    }],
    DiscoveryNotes: [{
        type: String,
        
       
    }],
    IndustryKnwlgNotes: [{
        type: String,
        
       
    }],
    StackholderNotes: [{
        type: String,
        
       
    }],
    VisionNotes: [{
        type: String,
        
       
    }],
  

})

module.exports = mongoose.model('notes', notesSchema)