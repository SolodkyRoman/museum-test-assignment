import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../pages/home';
import Detailed from '../../pages/detailed';

import style from './app.module.css';

const App = () => {
    return (
        <div className={style.container}>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/' component={Detailed} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
