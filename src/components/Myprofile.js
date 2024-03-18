import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Myprofile() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: ''
    });
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [isEditingLastName, setIsEditingLastName] = useState(false);
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Function to fetch user information
    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await axios.get('/api/user/profile'); // Adjust the endpoint as per your backend route
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchUserData();
    }, []);

    // Function to update user name
    const handleUpdateName = async () => {
        try {
            await axios.put('/api/user/profile/name', {
                firstName: newFirstName,
                lastName: newLastName
            });
            // Update user state with new name
            setUser({
                ...user,
                firstName: newFirstName,
                lastName: newLastName
            });
            setIsEditingName(false); // Disable editing mode
            setErrorMessage('');
        } catch (error) {
            console.error('Error updating user name:', error);
            setErrorMessage('Failed to update name. Please try again.');
        }
    };

    // Function to update user email
    const handleUpdateEmail = async () => {
        try {
            await axios.put('/api/user/profile/email', {
                email: newEmail
            });
            // Update user state with new email
            setUser({
                ...user,
                email: newEmail
            });
            setIsEditingEmail(false); // Disable editing mode
            setErrorMessage('');
        } catch (error) {
            console.error('Error updating user email:', error);
            setErrorMessage('Failed to update email. Please try again.');
        }
    };

    // Function to update user last name
    const handleUpdateLastName = async () => {
        try {
            await axios.put('/api/user/profile/lastname', {
                lastName: newLastName
            });
            // Update user state with new last name
            setUser({
                ...user,
                lastName: newLastName
            });
            setIsEditingLastName(false); // Disable editing mode
            setErrorMessage('');
        } catch (error) {
            console.error('Error updating user last name:', error);
            setErrorMessage('Failed to update last name. Please try again.');
        }
    };

    return (
        <div className="bg-gradient-to-b from-blue-400 to-indigo-600 py-8 px-4 rounded-md shadow-md">
            <h2 className="text-3xl font-bold text-white mb-4">User Profile</h2>
            <div className="bg-white bg-opacity-70 rounded-md p-6 mb-6">
                <p className="text-lg font-semibold mb-2">Username: {user.username}
                </p>
                <p className="text-lg font-semibold mb-2">First Name: {' '}
                    {isEditingName ? (
                        <input
                            type="text"
                            value={newFirstName}
                            onChange={(e) => setNewFirstName(e.target.value)}
                            className="border-2 rounded-md px-3 py-1 focus:outline-none focus:border-blue-400"
                        />
                    ) : (
                        <span>{user.firstName}</span>
                    )}
                    {!isEditingName && (
                        <button onClick={() => setIsEditingName(true)} className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md">Edit</button>
                    )}
                    {isEditingName && (
                        <button onClick={handleUpdateName} className="ml-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md">Save</button>
                    )}
                </p>
                <p className="text-lg font-semibold mb-2">Last Name: {' '}
                    {isEditingLastName ? (
                        <input
                            type="text"
                            value={newLastName}
                            onChange={(e) => setNewLastName(e.target.value)}
                            className="border-2 rounded-md px-3 py-1 focus:outline-none focus:border-blue-400"
                        />
                    ) : (
                        <span>{user.lastName}</span>
                    )}
                    {!isEditingLastName && (
                        <button onClick={() => setIsEditingLastName(true)} className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md">Edit</button>
                    )}
                    {isEditingLastName && (
                        <button onClick={handleUpdateLastName} className="ml-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md">Save</button>
                    )}
                </p>
                <p className="text-lg font-semibold mb-2">Email: {' '}
                    {isEditingEmail ? (
                        <input
                            type="email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            className="border-2 rounded-md px-3 py-1 focus:outline-none focus:border-blue-400"
                        />
                    ) : (
                        <span>{user.email}</span>
                    )}
                    {!isEditingEmail && (
                        <button onClick={() => setIsEditingEmail(true)} className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md">Edit</button>
                    )}
                    {isEditingEmail && (
                        <button onClick={handleUpdateEmail} className="ml-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md">Save</button>
                    )}
                </p>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>
        </div>
    );
}

export default Myprofile;
