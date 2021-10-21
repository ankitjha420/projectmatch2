import React from 'react';
import HomePage from "./components/HomePage.js"
import { Switch, Route } from "react-router-dom"
import FeedPage from './components/FeedPage.js';
import LoginPage from './components/LoginPage.js';

function App() {
    return(
    <div>

        

        <Switch>
            <Route exact path = "/"><HomePage /></Route>
            <Route path = "/feed"><FeedPage /></Route>
            <Route path = "/login"><LoginPage /></Route>
        </Switch>

    </div>)
}

export default App