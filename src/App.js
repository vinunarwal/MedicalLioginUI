import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Registration from './components/Registration';
import Login from './components/Login';
import Homepage from './components/HomePage';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentPage, setCurrentPage] = useState('login');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleRegister = async (username, password, email) => {
        const response = await axios.post('http://localhost:5000/register', { username, password, email });
        console.log(response.data);
        const { message, token } = response.data;
        setIsLoggedIn(true);
        setCurrentPage('login');
        localStorage.setItem('token', token);
    };

    const handleLogin = async (username, password) => {
        const response = await axios.post('http://localhost:5000/login', { username, password });
        console.log(response.data);
        const { token } = response.data;
        setIsLoggedIn(true);
        localStorage.setItem('token', token);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
        setCurrentPage('login');
    };

    const switchToRegisterPage = () => {
        setCurrentPage('register');
    };

    const switchToLoginPage = () => {
        setCurrentPage('login');
    };

    if (isLoggedIn) {
        return <Homepage handleLogout={handleLogout} />;
    }

    return (
        <div className='flex justify-center items-center my-5'>
            <div className='text-center'>
                {currentPage === 'register' && <Registration switchToLoginPage={switchToLoginPage} handleRegister={handleRegister} />}
                {currentPage === 'login' && <Login switchToRegisterPage={switchToRegisterPage} handleLogin={handleLogin} />}
            </div>
        </div>
    );
}

export default App;
