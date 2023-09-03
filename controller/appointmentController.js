const Post = require("../modal/appointmentModal");
const booking = require("../modal/bookingModal");
const getAppointment =async(req, res) => {
  // appointment controller
    const appointment =await Post.find()
    
    const date =req.query.date;
    const alreadyBooked  = await booking.aggregate([{ $match: { 'appointmentDate': date } }]);
    appointment.forEach(items =>{
        const optionBooked = alreadyBooked.filter(book => book.treatment === items.name);
        const bookedSlots = optionBooked.map(book => book.slot);
        const remainingSlots = items.slots.filter(slot => !bookedSlots.includes(slot))
        items.slots = remainingSlots;
    })
    return res.status(200).json(appointment)
  };


  module.exports ={
    getAppointment
   
  }