import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import pages from './routes';

function App() {
    return (
        <div className="App font-body">
            <Router>
                <Routes>
                    {pages.map((Page, index) => (
                        <Route key={index} path={Page.path} element={<Page.Component />} />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;

/*
// src/App.js
import React from 'react';
import AboutUs from './AboutUs';
import RefundPolicy from './RefundPolicy';
import ShoppingGuide from './ShoppingGuide';

function App() {
    return (
        <div className="App">
            <AboutUs />
        </div>
        <div className="App">
            <RefundPolicy />
        </div>
        <div className="App">
            <ShoppingGuide />
        </div>
    );
}

export default App;
*/
