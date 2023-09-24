const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    date:{
        type:String,
    },
    Vision: {
        type: String,
        
    },  
    RoadMapping:{
        type: String,
    },
    Strategy: {
        type: String,
       
    }, 
  
    VisionAnswr:  [{
        type: String,
        default:''
       
    }],
    RoadMappingAnswr: [{
        type: String,
        default:''
       
    }],
    StrategyAnswr: [{
        type: String,
        default:''
       
    }],
   
    
})

module.exports = mongoose.model('Vision', userSchema)