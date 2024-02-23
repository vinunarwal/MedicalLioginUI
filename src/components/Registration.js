import React, { useState } from 'react';
import axios from 'axios';

function Registration({ switchToLoginPage, handleRegister }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleRegister(username, password, email);
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.message === 'Username already exists') {
                setErrorMessage('Username already exists. Please choose a different one.');
            } else {
                console.error(error.response.data);
            }
        }
    };

    return (
        <>
            <h1 className='text-2xl font-bold'>Registration Page</h1>
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
                    className='border px-2 py-1 ml-4'
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='border px-2 py-1  ml-4'
                />
                {errorMessage && <p className="text-red-500 pb-5">{errorMessage}</p>}
                <button type="submit" className='bg-blue-200 px-5 py-2 rounded text-lg'>
                    Register
                </button>
            </form>
            <p className="mt-3">Already have an account? <button onClick={switchToLoginPage} className="text-blue-500">Login here</button></p>
        </>
    );
}

export default Registration;
