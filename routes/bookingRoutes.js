const express =require("express")
const router =express.Router()
const {setBooking,getBooking,getPayBook} = require('../controller/bookingController')
const {
    verifyToken,
  } = require("../middleware/verifyToken");
router.post('/',verifyToken, setBooking)
router.get('/', getBooking)
router.get('/book/:id', getPayBook)
// router.get('/', (req,res) =>{
// res.status(200).json({message:"get goal"})
// })

module.exports = router;