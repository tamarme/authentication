const { validPassword, genPassword, issueJWT } = require('../utils');
const User = require('../models/User');

const home = async (req, res) => {
    const users = await User.find({}, { hash: 0, salt: 0 });
    res.json({
        success: true,
        users
    });
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
        const error = new Error("User doesn't exist.");
        error.code = 401;
        throw error;
    }

    const { hash, salt } = user;
    const isValid = validPassword(password, hash, salt);
    if (isValid) {
        const { token, expires } = issueJWT(user);
        res.cookie('jwt', token, {
            maxAge: Number(expires),
            httpOnly: true
        });
        res.status(200).json({
            success: true,
            user: {
                firstname: user.firstname,
                lastname: user.lastname,
                email
            }
        });
    } else {
        const error = new Error('Password is incorrect.');
        error.code = 401;
        throw error;
    }
}

const register = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const { hash, salt } = genPassword(password);

    const user = await User.create({
        firstname,
        lastname,
        email,
        hash,
        salt
    });
    const { token, expires } = issueJWT(user);
    res.cookie('jwt', token, {
        maxAge: Number(expires),
        httpOnly: true
    });
    res.status(201).json({
        success: true,
        user: {
            firstname,
            lastname,
            email
        }
    });
}

module.exports = {
    home,
    login,
    register
}
