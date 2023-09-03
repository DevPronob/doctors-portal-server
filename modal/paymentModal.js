const mongoose =require('mongoose')

const paymentSchema =mongoose.Schema({
    price:{
        type: String,
        require: true,
    },
    transactionId: {
        type: String,
        required :[true, 'pleas add transactionId']
    },
    email: {
        type: String,
    },
    bookingId: {
        type: String,
        required :[true, 'pleas add bookingId']
    },
   
},{
    timestamps:true
})
module.exports =mongoose.model('Payment',paymentSchema)