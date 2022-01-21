require('dotenv').config();
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
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