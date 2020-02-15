import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from './pages/solutions/list';
import Login from './pages/login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/solutions" component={List}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;