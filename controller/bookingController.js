const booking = require("../modal/bookingModal");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const setBooking =async(req, res) => {

    const newBooking = new booking(req.body);

    
    
    try {
        const alreadyBooked = await booking.find({email:newBooking.email,appointmentDate:newBooking.appointmentDate, treatment:newBooking. treatment});
        if(alreadyBooked.length>1){
           console.log("already book this treatment")
        }
     else{
        const savedPost = await newBooking.save();
        res.status(200).send(savedPost);
     }
      
    } catch (err) {
      res.status(401).json(err);
      console.log(err)
    }
    
  };
const getBooking =async(req,res) =>{
    const email =req.query.email
    console.log(email)
     const bookings =await booking.find({email:email})
     return res.status(200).json(bookings)
}
const getPayBook =async(req,res) =>{
    const id =req.params.id
    console.log(id)
     const bookingsPay =await booking.find({_id: new ObjectId(id)})
     return res.status(200).json(bookingsPay)
}

  module.exports ={
    setBooking,
    getBooking,
    getPayBook
  }