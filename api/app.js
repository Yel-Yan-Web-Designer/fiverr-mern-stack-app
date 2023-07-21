const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./database/connect');
const port = process.env.PORT || 8000;

// 👇️ configure CORS
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
// middleware
app.use(express.json()); 
app.use(cookieParser()); // for cookies

// import routes
const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');
const gigRoute = require('./routes/gig.route');
const orderRoute = require('./routes/order.route');
const conversationRoute = require('./routes/conversation.route');
const messageRoute = require('./routes/message.route');
const reviewRoute = require('./routes/review.route');


// routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users' ,userRoute);
app.use('/api/v1/gigs' , gigRoute);
app.use('/api/v1/orders' ,orderRoute);
app.use('/api/v1/conversations' , conversationRoute);
app.use('/api/v1/messages' , messageRoute);
app.use('/api/v1/reviews' , reviewRoute);

// Error Middleware
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong!";

  return res.status(errStatus).send(errMessage);
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        console.log("Connected to DB")
        app.listen(port, () => console.log(`Server running at PORT ${port}`))
      } catch (error) {
        console.log(error);
      }
}
start();