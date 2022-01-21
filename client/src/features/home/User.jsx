import React from 'react';

const User = ({ data }) => {
    return <div className='user-container'>
        <p>id: {data._id}</p>
        <h3>fullname: {`${data.firstname} ${data.lastname}`}</h3>
        <p>email: {data.email}</p>
    </div>
};

export default User;
