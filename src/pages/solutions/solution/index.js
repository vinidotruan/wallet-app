import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import arrow from '../../../assets/icons/seta-esquerda.svg';
import './styles.css';

export default class Solution extends Component {

    state = {
        solution:{
            title:'O que é tesouro direto', 
            resume:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo velit. Integer nec dapibus quam.', id:'a2saDDA222', 
            level:1,  levelName:'INICIANTE I',  completed: 1,  reward:20,  content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisi, tincidunt ut mauris non, faucibus imperdiet sapien. Ut porta magna sit amet lorem tincidunt iaculis. Duis id orci vitae diam porttitor interdum. Nam facilisis ipsum id ipsum sollicitudin imperdiet. Sed mollis mi sit amet dui mollis semper. Suspendisse bibendum interdum mi mollis luctus. Vestibulum pharetra quis quam eu fermentum. Proin eget imperdiet lectus. Vivamus porttitor ullamcorper lectus, a dapibus neque malesuada quis. Morbi commodo, eros scelerisque tristique porta, lectus ante posuere nunc, non luctus dui ligula ut ante. Ut pretium pellentesque massa, eget tincidunt nisi dapibus in. Mauris quis risus elementum, aliquam ipsum a, gravida turpis. Duis iaculis enim nec tellus blandit tempor."
        },
    }
    render() {
        const { solution } = this.state;
        return(
            <article className="solution-detail" key={solution.id}>
                <Link to="/solutions">
                    <img className="arrow" src={arrow}/>
                </Link>
                <span className="title">
                    {solution.title.toUpperCase()}
                    <div className="rewards">
                        <div className="coin"></div>
                        <span className="reward">{solution.reward}</span>
                    </div>
                </span>
                <p className="content">
                    {solution.content}
                </p>
                <button className="button">FINALIZAR AULA</button>
            </article>
        )
    }
}