let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
const connectDB = require('./config/db');

// Express Route
const employeeRoute = require('./routes/employeeRoutes')
const userRoute = require('../backend/routes/userRoutes')

// Connecting mongoDB Database
connectDB();


const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(authJwt());
app.use(cors());
app.use('/employees', employeeRoute);
app.use('/users', userRoute)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
// app.use((req, res, next) => {
//   next(createError(404));
// });

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
