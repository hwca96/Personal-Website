import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import SemanticSearchDemo from './SemanticSearchDemo';

const WebsiteRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/personal-website" Component={HomePage} />
                <Route path="/personal-website/semantic-search-demo" Component={SemanticSearchDemo} />
            </Routes>
        </Router>
    );
};

export default WebsiteRouter;

