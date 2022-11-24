import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>Hello {user.displayName}, welcome to the bike picker</h1>
        </div>
    );
};

export default Dashboard;