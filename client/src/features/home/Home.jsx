import React, { useEffect, useState } from 'react';
import User from './User';
import { fetchUsers } from './homeAPI';
import ErrorHandler from '../../shared/error/ErrorHandler';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        (async function () {
            try {
                const response = await fetchUsers();
                setUsers(response);

            } catch (err) {
                setError(err.response?.data?.error);
            }
            setLoading(false);
        }())
    }, []);

    return <div>
        {error && <ErrorHandler error={error} callback={() => setError(null)} />}
        <h1>Users List:</h1>
        {loading ?
            <span>Loading...</span> :
            users.map((value, index) => <User key={index} data={value} />)}
    </div>;
};

export default Home;
