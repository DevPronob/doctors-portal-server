const express =require("express")
const router =express.Router()
const {setUser,getUsers,updateUsers,getAdmin} = require('../controller/userController')
const {
    verifyToken,
    verifyTokenAndAdmin
  } = require("../middleware/verifyToken");
router.post('/', setUser)
router.get('/', getUsers)
router.put('/:id',verifyToken,verifyTokenAndAdmin, updateUsers)
router.get('/admin/:email', getAdmin)
// router.get('/', (req,res) =>{
// res.status(200).json({message:"get goal"})
// })

module.exports = router;