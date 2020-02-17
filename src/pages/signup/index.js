import React, { Component } from 'react';
import './styles.css';

import logoFacebook from '../../assets/icons/facebookicon.png';
import logoGoogle from '../../assets/icons/googleicon.png';
import logoLinkedin from '../../assets/icons/linkedinicon.png';

export default class Signup extends Component {

    state = {
       name: '',
       email: '',
       phone: '',
       cpf: '',
       password: '',

    }

    render() {
        return(
            <form className="signup-form" onSubmit={this.handleSignIn}>
                <h1>CADASTRAR CONTA</h1>
                <input
                    type="text"
                    placeholder="NOME"
                    onChange={e => this.setState({ name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="EMAIL"
                    onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                    type="numer"
                    placeholder="FONE"
                    onChange={e => this.setState({ phone: e.target.value })}
                />
                
                <input
                    type="number"
                    placeholder="CPF"
                    onChange={e => this.setState({ cpf: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="SENHA"
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <button type="button"  onClick={() => this.props.history.push('/home')}>CADASTRAR</button>
                <span className="or-register">
                    OU CADASTRE POR
                </span>
                <div className="social-media-signup">
                    <img src={logoGoogle} alt="teste"/>
                    <img src={logoFacebook} alt="teste"/>
                    <img src={logoLinkedin} alt="teste"/>
                </div>
            </form>
        )
    }
}
