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
app.use(passport.initialize());
passport.use(strategy);
// routes
// app.post('/api/v1/register', (req, res) => res.json({ mda: 'huh' }))
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