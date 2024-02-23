import React from 'react';

function Homepage({ handleLogout }) {
    return (
        <div className="flex justify-center items-center my-5">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Welcome to the Homepage !</h1>
                <div className="p-5">
                    <button onClick={handleLogout} className="bg-red-200 px-5 py-2 rounded text-lg mt-4">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
