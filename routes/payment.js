const express =require("express")
const router =express.Router()
const Payment = require("../modal/paymentModal");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const booking = require("../modal/bookingModal");
router.post("/", async(req, res) => {
    const payments = new Payment(req.body);
    const savedPayment = await payments.save();
    res.status(200).send(savedPayment);
    const id = payments.bookingId
    console.log(payments.transactionId )
    const filter =  { _id:new ObjectId(id) }

    const update = {  
        paid: true,
        transactionId: payments.transactionId 
    };
    const finalData = await booking.findOneAndUpdate(filter, update, {
        new: true
      });
console.log(finalData)



  });


module.exports = router;