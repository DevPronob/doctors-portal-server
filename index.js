const express =require("express");
const app =express()
app.use(express.json());
const cors = require('cors');
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const connectDB =require('./database/db')

app.use('/api/appointment', require('./routes/appointmentRoutes'))
app.use('/api/booking', require('./routes/bookingRoutes'))
app.use('/api/user', require('./routes/userRoutes'))
app.use("/create-payment-intent",require('./routes/stripeRoutes') );

app.use("/payments",require('./routes/payment') );

app.listen(5000,() =>{
    console.log("Server is running")
})
connectDB()

// pronobroy

// 4ZNnixHcWuNbycjX