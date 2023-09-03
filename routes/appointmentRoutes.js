const express =require("express")
const router =express.Router()
const {getAppointment} = require('../controller/appointmentController')

router.get('/', getAppointment)
// router.get('/', (req,res) =>{
// res.status(200).json({message:"get goal"})
// })

module.exports = router;