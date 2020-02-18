import React, { Component } from 'react';

import api from '../../services/api';

import logoFacebook from '../../assets/icons/facebookicon.png';
import logoGoogle from '../../assets/icons/googleicon.png';
import logoLinkedin from '../../assets/icons/linkedinicon.png';

import './styles.css';

export default class Login extends Component {

    state = {
        user: {
            email: '',
            password: ''
        }
    }

    async handleSignIn(e) {
        e.preventDefault();

        const email = this.state.user.email;
        const password = this.state.user.password;
        try {
            await api.post('/register', { email, password });
        } catch (exception) {

        }
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleSignIn}>
                <h1>LOGIN</h1>
                <input
                    type="email"
                    placeholder="EMAIL"
                    onChange={e => this.setState({ useremail: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="SENHA"
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <span className="forward-password">ESQUECI MINHA SENHA</span>
                <button type="submit">ENTRAR</button>
                <span className="or-access">
                    OU ACESSE POR
                </span>
                <div className="social-media-login">
                    <img src={logoGoogle} alt="teste" />
                    <img src={logoFacebook} alt="teste" />
                    <img src={logoLinkedin} alt="teste" />
                </div>
            </form>
        );
    }
}
