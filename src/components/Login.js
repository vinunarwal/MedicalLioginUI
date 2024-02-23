import React, { useState } from 'react';
import axios from 'axios';

function Login({ switchToRegisterPage, handleLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleLogin(username, password);
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.message === 'Invalid username or password') {
                setErrorMessage('Incorrect username or password.');
            } else {
                console.error(error.response.data);
            }
        }
    };

    return (
        <>
            <h1 className='text-2xl font-bold'>Login Page</h1>
            <form onSubmit={handleSubmit} className='p-5'>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='border px-2 py-1'
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='border px-2 py-1 ml-5'
                />
                {errorMessage && <p className="text-red-500 pb-5">{errorMessage}</p>}
                <button type="submit" className='bg-blue-200 px-5 py-2 rounded text-lg'>
                    Login
                </button>
            </form>
            <p className="mt-3">Don't have an account? <button onClick={switchToRegisterPage} className="text-blue-500">Register here</button></p>
        </>
    );
}

export default Login;
