import React, { useState } from 'react';
import { register } from './registerAPI';

const Register = () => {

    const [user, setUser] = useState({
        firstname: null,
        lastname: null,
        email: null,
        password: null
    });

    const handleChange = event => setUser({ ...user, [event.target.name]: event.target.value });

    const handleClick = async () => {
        const response = await register(user);
        console.log(response);
    }

    return <div>
        <h1>Register</h1>
        <div className='container'>
            <input
                type='firstname'
                name='firstname'
                placeholder='firstname'
                onChange={handleChange}
            />
            <input
                type='lastname'
                name='lastname'
                placeholder='lastname'
                onChange={handleChange}
            />
            <input
                type='email'
                name='email'
                placeholder='email'
                required
                onChange={handleChange}
            />
            <input
                type='password'
                name='password'
                placeholder='password'
                required
                onChange={handleChange}
            />

            <button type='submit' onClick={handleClick}>Register</button>
        </div>
    </div>
};

export default Register;
