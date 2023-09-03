const mongoose =require('mongoose')

const appointmentSchema =mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    price:{
        type: String,
        require: true,
    },
    slots:[String]
},{
    timestamps:true
})
module.exports =mongoose.model('Post',appointmentSchema)