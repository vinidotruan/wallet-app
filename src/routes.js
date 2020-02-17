import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from './pages/solutions/list';
import Login from './pages/login';
import Signup from './pages/signup';
import Welcome from './pages/welcome';
import FooterBar from './components/FooterBar';



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Welcome }/>
            <Route path="/login" component={ Login }/>
            <Route path="/signup" component={ Signup }/>
            <Route path="/solutions" component={ List }/>
            <Route path="/home" component={ List }/>
        </Switch>
        <FooterBar/>
    </BrowserRouter>

)

export default Routes;