const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const barcodeRouter = require('./routes/barcode.router');
const foodRouter = require('./routes/food.router');
const groomerRouter = require('./routes/groomer.router');
const medicationRouter = require('./routes/medication.router');
const petRouter = require('./routes/pet.router');
const userRouter = require('./routes/user.router');
const vetRouter = require('./routes/vet.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/barcode', barcodeRouter);
app.use('/api/food', foodRouter);
app.use('/api/groomer', groomerRouter);
app.use('/api/medication', medicationRouter);
app.use('/api/pet', petRouter);
app.use('/api/user', userRouter);
app.use('/api/vet', vetRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
