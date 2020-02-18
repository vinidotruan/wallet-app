import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import UserPhoto from '../../../assets/images/userphoto.png';
import Arrow from '../../../assets/icons/seta-esquerda.svg';

export default class Edit extends Component {
    state = {
        user: {
            name: 'Ruan Vinícius',
            phone: '',
            email: ''
        }
    }

    render() {
        const { user } = this.state;
        return (
            <article className="profile edit">
                <Link to="/profile">
                    <img className="arrow" src={Arrow}/>
                </Link>
                <div className="user">
                    <img src={ UserPhoto } />
                </div>
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
                <button className="button blue save">SALVAR ALTERAÇÕES</button>
            </article>
        )
    }
}