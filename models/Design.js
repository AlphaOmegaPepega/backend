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
    Product: {
        type: String,
        default:''
    },  
    Visual: {
        type: String,
        default:''
       
    }, 
    UXDesign: {
        type: String,
        default:''
        
    }, 
    UXTesting: {
        type: String,
        default:''
       
    }, 
    ProductAnswr: [{
        type: String,
        default:''
       
    }],
    VisualAnswr:  [{
        type: String,
        default:''
       
    }],
    UXDesignAnswr:  [{
        type: String,
        default:''
       
    }],
    UXTestingAnswr:  [{
        type: String,
        default:''
       
    }],
    
})

module.exports = mongoose.model('Design', userSchema)