import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from './pages/solutions/list';
import Login from './pages/login';
import FooterBar from './components/FooterBar';



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/solutions" component={List}/>
        </Switch>
        
        <FooterBar/>
    </BrowserRouter>

)

export default Routes;