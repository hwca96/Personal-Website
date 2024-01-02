import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import SemanticSearchDemo from './SemanticSearchDemo';

const WebsiteRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" Component={HomePage} />
                <Route exact path="/semantic-search" Component={SemanticSearchDemo} />
            </Routes>
        </Router>
    );
};

export default WebsiteRouter;

