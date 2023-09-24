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
    Business: {
        type: String,
        
    },  
    Product: {
        type: String,
       
    }, 
    Technology: {
        type:String,
        
    }, 
    Agile: {
        type: String,
       
    }, 
    BusinessAnswr: [{
        type: String,
        default:''
       
    }],
    ProductAnswr: [{
        type: String,
        default:''
       
    }],
    TechnologyAnswr:  [{
        type: String,
        default:''
       
    }],
    AgileAnswr:  [{
        type: String,
        default:''
       
    }],
    
})

module.exports = mongoose.model('Delivery', userSchema)