import React, { useState } from 'react';
import axios from 'axios';
import logo from "../images/logo (1).png";
import mail from "../images/mail_icon.png";
import lock from "../images/lock_icon.png";
import { Link } from 'react-router-dom';

function Individual() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="flex justify-center items-center h-screen indvidual_bg  ">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md ">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-semibold"><span className='text-orange-400'>Individual</span><br/>Registration Page</h1>
                </div>
                <form>
                    <div className="mb-4 relative">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
                            required
                        />
                        <img src={logo} alt='not found' className="absolute left-3 top-3 w-4 h-4"/>
                    </div>
                    <div className="mb-4 relative">
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
                            required
                        />
                        <img src={mail} alt='not found' className="absolute left-3 top-3 w-4 h-4"/>
                    </div>
                    <div className="mb-4 relative">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
                            required
                        />
                        <img src={lock} alt='not found' className="absolute left-3 top-3 w-4 h-4"/>
                    </div>
                    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 shadow-md">Register</button>
                </form>
                <p className="mt-3 text-center">Already have an account?<br/> 
                <Link to = "/login" className="text-blue-500">Login here</Link></p>
            </div>
        </div>
    );
}

export default Individual;
