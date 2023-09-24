const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    date:{
        type:String,
        require:true
    },
    Collaboration: {
        type: String,
        default:''
    },  
    Communication: {
        type: String,
        default:''
    }, 
    Quality: {
        type: String,
        default:''
    },     
    DecisionMaking: {
        type: String,
        default:''
    },     
    Learning: {
        type: String,
        default:''
    },     
    Organisational: {
        type: String,
        default:''
    },     
    Bias: {
        type: String,
        default:''
    }, 
    CommunAnswr: [{
        type: String,
        default:''
       
    }],
    CollabAnswr: [{
        type: String,
        default:''
       
    }],
    QualitAnswr: [{
        type: String,
        default:''
       
    }],
    DecisionAnswr: [{
        type: String,
        default:''
       
    }],
    BiasAnswr: [{
        type: String,
        default:''
       
    }],
    LearningAnswr: [{
        type: String,
        default:''
       
    }],
    OrganizationAnswr: [{
        type: String,
        default:''
       
    }],

})

module.exports = mongoose.model('Personal', userSchema)