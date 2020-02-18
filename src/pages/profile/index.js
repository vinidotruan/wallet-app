import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserPhoto from '../../assets/images/userphoto.png';
import './styles.css';

export default class Profile extends Component {
    state = {
        user: {
            name: 'Ruan Vinícius',
            email: 'contato@ruanvinicius.com'
        }
    }

    render() {
        const { user } = this.state;

        return(
            <article className="profile">
                <div className="user">
                    <img src={ UserPhoto } />
                    <div className="content">
                        <span className="name">{user.name.toUpperCase()}</span>
                        <span className="contact">{user.email}</span>
                    </div>
                </div>

                <Link to="/profile/edit">
                    <button className="button blue edit">EDITAR PERFIL</button>
                </Link>
                <Link to="/plans">
                    <button className="button blue">PLANOS</button>
                </Link>
                <Link to="/logout">
                    <button className="button red">LOGOUT</button>
                </Link>
                <span className="version">VERSÃO BETA 0.0.1</span>
            </article>
        )
    }
}