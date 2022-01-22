const express = require('express');
require('express-async-errors');
const connect = require('./config/database');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');
const authRoutes = require('./routes/auth');
const passport = require('passport');
const strategy = require('./config/passport');
const cookieParser = require('cookie-parser');

const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
passport.use(strategy);
// routes
app.use('/api/v1', authRoutes);

// middlewares
app.use(notFound);
app.use(errorHandler);

const connection = 'mongodb+srv://admin:admin123@cluster0.w0dvv.mongodb.net/AUTH_MERN?retryWrites=true&w=majority';

const start = async () => {
    try {
        await connect(process.env.MONGO_URI || connection);
        app.listen(process.env.PORT || 3001);
    } catch (error) {
        console.log(error);
    }
}

start();