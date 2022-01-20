const express = require('express');
const connect = require('./config/database');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');
const authRoutes = require('./routes/auth');
const passport = require('passport');
const strategy = require('./config/passport');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
passport.use(strategy);

// routes
app.use('/api/v1', authRoutes);

// middlewares
app.use(notFound);
app.use(errorHandler);

const start = async () => {
    try {
        await connect(process.env.MONGO_URI);
        app.listen(process.env.PORT);
    } catch (error) {
        console.log(error);
    }
}

start();