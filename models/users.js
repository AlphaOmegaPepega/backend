const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        default:''
       
    },
    connected: [{
        type: String,
        
       
    }],
    username:{
        type:String
    },
    size:{
        type:String
    },
    date:{
        type:String,
        require:true
    },
})

module.exports = mongoose.model('users', userSchema)