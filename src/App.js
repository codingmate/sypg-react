import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CalendarConverter from './CalendarConverter';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/calendar-converter" element={<CalendarConverter />} />
            </Routes>
        </Router>
    );
}

export default App;
