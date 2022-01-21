import React, { useEffect, useState } from 'react';
import User from './User';
import { fetchUsers } from './homeAPI';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async function () {
            const response = await fetchUsers();
            setUsers(response);
            setLoading(false);
        }())
    }, []);

    return <div>
        <h1>Users List:</h1>
        {loading ?
            <span>Loading...</span> :
            users.map((value, index) => <User key={index} data={value} />)}
    </div>;
};

export default Home;
