// App.js
import React from 'react';
import Registration from './components/Registration';
import Homepage from './components/HomePage';
import Individual from './components/Individual';
import LabMember from './components/Labmember';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import "./App.css";
import Myprofile from './components/Myprofile'

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/labmember" element={<LabMember />} />
                    <Route path="/individual" element={<Individual />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
