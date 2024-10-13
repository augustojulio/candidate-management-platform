import React from "react";
import { useNavigate } from "react-router-dom";
import logout from '../services/auth';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <button onClick={handleLogout} className="logout-button">
            Logout
        </button>
    );
};

export default LogoutButton;