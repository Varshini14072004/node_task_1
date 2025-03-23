const express = require('express');
const jobRoute = require('./routes/job.route');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//Middleware 
const app = express();
app.use(express.json());

//routes
app.use("/api/jobs",jobRoute);

//test API
app.listen(3000,() => {
    console.log('server is running on port 3000');
});

app.get('/',(req , res)=>{
    res.send('node response sent');
});

//mongodb connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(() =>{
    console.log('mongodb connected successfully');
})
.catch((err)=>{
    console.log('mongodb connection failed',err);
});