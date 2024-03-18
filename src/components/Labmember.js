import React, { useState } from 'react';
import bg2 from "../images/iconr2.png"
import { Link } from 'react-router-dom';

function LabMember() {
    const [labName, setLabName] = useState('');
    const [labAddress, setLabAddress] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    return (
        <div className='labmember_bg'>
            <div className='container flex justify-center items-center h-screen'>
                <div className="bg-indigo-50 p-8 rounded-md shadow-md w-96">
                    <div className='btt'>
                        <div className='bg_imgs relative'>
                            {/* <img className=' absolute opacity-35' src={bg}alt='bg1'/> */}
                            <img className=' absolute opacity-35 h-96' src={bg2} alt='bg1' />
                        </div>
                        <span className='text-red-400 block text-2xl font-bold flex justify-center'>Lab Member</span>
                        <h2 className="text-2xl font-bold mb-4 flex justify-center items-center"> Registration</h2>
                        <form className='space-y-4 relative z-10'>
                            <input
                                type="text"
                                placeholder="Lab Name"
                                value={labName}
                                onChange={(e) => setLabName(e.target.value)}
                                className='border rounded-md px-3 py-2 w-full outline-blue-400'
                            />
                            <input
                                type="text"
                                placeholder="Lab Address"
                                value={labAddress}
                                onChange={(e) => setLabAddress(e.target.value)}
                                className='border rounded-md px-3 py-2 w-full outline-blue-400'
                            />
                            <input
                                type="text"
                                placeholder="Username"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='border rounded-md px-3 py-2 w-full outline-blue-400'
                            />
                            <input
                                type='password'
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='border rounded-md px-3 py-2 w-full outline-blue-400'
                            />
                            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                            <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-md w-full'>
                                Register
                            </button>
                        </form>
                        <p className="mt-4 text-center">Already have an account? </p>
                         <Link to ="/login" className="text-blue-500 font-medium flex justify-center text-center">Login here</Link>
                         
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LabMember;
