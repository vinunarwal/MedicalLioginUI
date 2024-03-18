import React, { useState } from 'react';
import axios from 'axios';
import logo from '../images/logo (1).png';
import mail from '../images/mail_icon.png';
import lock from '../images/lock_icon.png';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    return (
        <>
            <div className='flex justify-center items-center h-screen loginbg'>
                <div className='p-8 rounded-lg shadow-md  bg-transparent'>
                    <div className='text-center'>
                        <img className='w-28 mx-auto mb-4' src={logo} alt='Logo' />
                        <h2 className='text-xl font-semibold mb-4'>Login</h2>
                    </div>
                    <form>
                        <div className='mb-4'>
                            <div className='flex items-center border rounded-md overflow-hidden'>
                                <img className='h-8 p-2 bg-gray-200' src={mail} alt='Email Icon' />
                                <input
                                    type='email'
                                    placeholder='Email ID'
                                    className='w-full px-3 py-2 focus:outline-none'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className='flex items-center border rounded-md overflow-hidden'>
                                <img className='h-8 p-2 bg-gray-200' src={lock} alt='Password Icon' />
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='w-full px-3 py-2 focus:outline-none'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='mb-6 text-sm text-gray-600'>
                            <a href='#' className='hover:underline'>Forgot password?</a>
                        </div>
                        {errorMessage && <div className='text-red-500 mb-4'>{errorMessage}</div>}
                        <div>
                            <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300'>Login</button>
                            <p className="mt-3 text-center">Don't have an account?<br />
                            <Link to="/registration">
                            <button className="text-blue-700">Register here</button></Link></p>
                        </div>
                    </form>
                </div>
            </div >
        </>
    );
}

export default Login;
 