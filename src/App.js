import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardComponent from './CardComponent';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={CardComponent}></Route>
            </Switch>
        </Router>
    );
}

export default App;