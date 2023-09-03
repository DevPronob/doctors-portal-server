const mongoose =require('mongoose')

const bookingSchema =mongoose.Schema({
    appointmentDate:{
        type: String,
        require: true,
    },
    treatment: {
        type: String,
        required :[true, 'pleas add treatment']
    },
    patient: {
        type: String,
    },
    slot: {
        type: String,
        required :[true, 'pleas add slot']
    },
    email: {
        type: String,
        required :[true, 'pleas add email']
    },
    phone: {
        type: String,
        required :[true, 'pleas add phone']
    },
    price: {
        type: String,
        required :[true, 'pleas add price']
    },
    paid:{
        type: Boolean,
    },
    transactionId:{
        transactionId: String,
    },
},{
    timestamps:true
})
module.exports =mongoose.model('booking',bookingSchema)