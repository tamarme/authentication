require('dotenv').config();
const JwtStrategy = require('passport-jwt').Strategy
const User = require('../models/User');

const cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) token = req.cookies['jwt'];
    return token;
};

const options = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.SECRET || 'FcwLw+*QA9jV"a^P=`{4Ze',
}

const verify = (payload, done) => {
    try {
        const user = User.findOne({ _id: payload.sub });
        if (user) return done(null, user);
        else return done(null, false);
    } catch (error) {
        return done(error, false);
    }
}

const strategy = new JwtStrategy(options, verify);

module.exports = strategy;