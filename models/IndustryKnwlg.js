const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    date:{
        type:String
    },
    General: {
        type: String,
        
    },  
    Specific: {
        type: String,
       
    }, 
    GeneralAnswr :  [{
        type: String,
        default:''
       
    }],
    SpecificAnswr:  [{
        type: String,
        default:''
       
    }],
  
    
    
})

module.exports = mongoose.model('Knowledge', userSchema)