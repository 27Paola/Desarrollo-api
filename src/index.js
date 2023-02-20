const express = require('express');
const v1SeriesRouter = require("./v1/Routes/SeriesRoutes");
const mongoose = require('mongoose');
//require("dotenv").config();

const app = express();
const port = process.env.Port || 3000;

mongoose.set('strictQuery', true);

app.use(express.json());
app.use("/api/v1/workouts", v1SeriesRouter)

//mongoDB connection
mongoose.connect("mongodb+srv://yineth2paola2:paola123@cluster0.llburrj.mongodb.net/?retryWrites=true&w=majority")
    //.connect(process.env.MONGODB_URI)
    .then(() => console.log(" Connected to MongoDB Atlas😍👌"))
    .catch((error) => console.log(error));

app.listen(port, () => {
    console.log('🚀 Server listening in port ' + port);
});

process.on('uncaughtException', function (err) {
    console.log(err);
  });