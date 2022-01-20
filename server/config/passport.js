const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
require('dotenv').config();

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET,
    algorithms: ['RS256']
}

const verifyCallback = (payload, done) => {
    try {
        const user = User.findOne({ _id: payload.sub });
        if (user) return done(null, user);
        else return done(null, false);
    } catch (error) {
        return done(error, false);
    }
}

const strategy = new JwtStrategy(options, verifyCallback);

module.exports = strategy;