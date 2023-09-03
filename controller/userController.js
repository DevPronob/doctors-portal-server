const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const User = require("../modal/userModal");
const jwt =require('jsonwebtoken')
const setUser =async(req, res) => {
    console.log(req.body)
    const email =req.body;
    const exist = await User.findOne(email)
    if(exist){
        // const accessToken =jwt.sign({
        //     email:email,
        //     // admil:savedPost.admin
        //   },process.env.JWT_SEC,
        //   {expiresIn:"3d"}
        //   );
        const token =jwt.sign({ email:exist.email,admin:exist.admin }, "shhh", { expiresIn: '3d' })
      return  res.status(400).json({exist,token})
    }
    else{

        const newPost = new User(email);
    try {
      const savedPost = await newPost.save();
      const token =jwt.sign({ email: savedPost.email,admin:savedPost.admin }, "shhh", { expiresIn: '3d' })
     return res.status(200).json({savedPost,token});
    } catch (err) {
      res.status(403).json(err);
      console.log(err)
    }

    }
    
  };


  const getUsers =async(req, res) => {
    const users =await User.find()
    return  res.status(400).json(users)
    
  };

  const updateUsers =async(req, res) => {
    const id =req.params.id;
    console.log(id)
    const updateDoc = await User.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { admin:true},
        // If `new` isn't true, `findOneAndUpdate()` will return the
        // document as it was _before_ it was updated.
        { new: true }
      );

      return  res.status(400).json(updateDoc)
    
  };

  const getAdmin =async(req, res) => {
    const email =req.params.email;
    const user = await User.findOne({email:email})
    res.send({isAdmin:user?.admin})
  };

  module.exports ={
    setUser,
    getUsers,
    updateUsers,
    getAdmin
  }