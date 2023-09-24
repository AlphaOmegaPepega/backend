const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    date:{
        require:true,
        type:String,
    },
    UserResearch: {
        type: String,
        default:''
    },  
    Design: {
        type: String,
        default:''
    }, 
    Market: {
        type: String,
        default:''
    }, 
    Synthesising: {
        type: String,
        default:''
    }, 
    UserResearchAnswr: [{
        type: String,
        default:''
       
    }],
    DesignAnswr: [{
        type: String,
        default:''
       
    }],
    MarketAnswr: [{
        type: String,
        default:''
       
    }],
    SynthesisingAnswr: [{
        type: String,
        default:''
       
    }],
   
    
})

module.exports = mongoose.model('Discovery', userSchema)