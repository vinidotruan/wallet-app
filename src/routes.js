import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from './pages/solutions/list';
import Solution from './pages/solutions/solution';
import Login from './pages/login';
import Signup from './pages/signup';
import Welcome from './pages/welcome';
import FooterBar from './components/FooterBar';

const Routes = () => (
    <div>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Welcome }/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" render={(props) =>
                <div>
                    <Signup /> 
                    <FooterBar props/>
                </div>
                 }/>
            <Route path="/solutions/:id" render={(props) =>
                <div>
                    <Solution /> 
                    <FooterBar location={props}/>
                </div>
                 }/>
            <Route path="/solutions" render={(props) =>
                <div>
                    <List /> 
                    <FooterBar props={props}/>
                </div>
                 }/>
            <Route path="/home" render={(props) =>
                <div>
                    <List /> 
                    <FooterBar location={props}/>
                </div>
                 }/>
        </Switch>
    </BrowserRouter>

    </div>
)

export default Routes;

