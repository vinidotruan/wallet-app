import React, { Component } from 'react';
import { Form, Container } from "./styles";
import { Link } from 'react-router-dom';

export default class Login extends Component {

    state = {
        user: {
            login: '',
            password: ''
        }
    }


    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSignIn}>
                {/* <img src={Logo} alt="Airbnb logo" /> */}
                {/* {this.state.error && <p>{this.state.error}</p>} */}
                <input
                    type="email"
                    placeholder="Endereço de e-mail"
                    onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <button type="submit">Entrar</button>
                <hr />
                <Link to="/signup">Criar conta grátis</Link>
                </Form>
            </Container>
        );
    }
}
