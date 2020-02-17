import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {

        render() {
            return(
                <div className="welcome">
                    <span className="title">VEJA QUEM CHEGOU!</span>
                    <p className="text">Lorem psum dolor sit amet, consectetur adipsing elit.</p>
                    <Link to={`/login/`} className="button login"> ENTRAR </Link>
                    <Link to={`/signup/`} className="button signup"> CADASTRAR </Link>
                </div>
            )
        }
}
