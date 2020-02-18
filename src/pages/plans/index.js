import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/seta-esquerda.svg';

import './styles.css';

export default class Plans extends Component {


    render() {
        return(
            <article className="plans">
                <Link to="/profile">
                    <img className="arrow" src={arrow}/>
                </Link>
                <span className="actual-plan-title">
                    MEU PLANO ATUAL
                </span>
                <article className="actual-plan">
                    <div className="content">
                        <div className="plan">
                            <span className="title"> PLANO GRÁTIS </span >
                            <span className="activated">ATIVO DESDE 19/04/2000</span>
                        </div>
                        <span className="description">VER DESCRIÇÃO</span>
                    </div>
                </article>
                <span className="another-plans-title">
                    OUTROS PLANOS
                </span>
                <article className="another-plans">
                    <div className="content">
                        <div className="plan">
                            <span className="title"> PLANO I </span >
                            <span className="activated">R$ 0,00</span>
                        </div>
                        <span className="description">VER DESCRIÇÃO</span>
                    </div>
                </article>
                <article className="another-plans">
                    <div className="content">
                        <div className="plan">
                            <span className="title"> PLANO II </span >
                            <span className="activated">R$ 0,00</span>
                        </div>
                        <span className="description">VER DESCRIÇÃO</span>
                    </div>
                </article>
                <article className="another-plans">
                    <div className="content">
                        <div className="plan">
                            <span className="title"> PLANO III </span >
                            <span className="activated">R$ 0,00</span>
                        </div>
                        <span className="description">VER DESCRIÇÃO</span>
                    </div>
                </article>
            </article>
        )
    }
}