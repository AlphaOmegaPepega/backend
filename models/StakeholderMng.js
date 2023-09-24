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
    Engagement: {
        type: String,
        
    },  
    Leadership: {
        type: String,
       
    }, 
    Management: {
        type: String,
       
    }, 
    EngagementAnswr :  [{
        type: String,
        default:''
       
    }],
    LeadershipAnswr:  [{
        type: String,
        default:''
       
    }],
    ManagementAnswr:  [{
        type: String,
        default:''
       
    }],
    
})

module.exports = mongoose.model('Stackholder', userSchema)