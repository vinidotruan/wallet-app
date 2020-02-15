import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default class List extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        this.loadList();
    }


    loadList = () => {
        this.setState({ list: [
            {title:'O que é tesouro direto', resume:'Lorem Ipsum', id:'a2saDDA222', level:1},
            {title:'Por que investir em tesouro direto', resume:'Lorem Ipsum', id:'a2sASDASDA', level:2},
            {title:'O que é tesouro IPCA?', resume:'Lorem Ipsum', id:'a2sA24321H', level:3},
            {title:'O que é um título?', resume:'Lorem Ipsum', id:'a2saDcA222', level:1},
            {title:'O que são ativos de rendimentos fixos e rendimentos variáveis?', resume:'Lorem Ipsum', id:'a2sAgsdDA', level:2},
            {title:'Qual é a melhor idade para começar a investir?', resume:'Lorem Ipsum', id:'a2sA2sx1H', level:3},
            {title:'Qual é o valor mínimo necessário para investir?', resume:'Lorem Ipsum', id:'a2sa6y222', level:2},
            {title:'O que avaliar antes de escolher o tipo de investimento?', resume:'Lorem Ipsum', id:'a2sA9oASDA', level:1},
            {title:'Quanto da minha renda devo investir?', resume:'Lorem Ipsum', id:'a2sA20p1H', level:2},
            {title:'Quanto custa para comprar uma ação?', resume:'Lorem Ipsum', id:'a2sA2lm21H', level:3},
            {title:'O que significa “risco”? O mercado de ações é arriscado?', resume:'Lorem Ipsum', id:'a2s3e4321H', level:2},
            {title:'O que significa “risco”? O mercado de ações é arriscado?', resume:'Lorem Ipsum', id:'a2sA26t21H', level:3},
            {title:'O que acontece se eu não quiser mais investir e quiser meu dinheiro de volta?', resume:'Lorem Ipsum', id:'a23e24321H', level:1},
        ] });
    }

    render() {
        const { list } = this.state;

        list.sort((a,b) => a.level - b.level)

        let group = list.reduce((r, a) => {
            r[a.level] = [...r[a.level] || [], a];
            return r;
        }, []);

        return(
            <div className="list">
                { group.map((solutions, key) => (
                    <div key={key}>
                        <div className="level-wrapper">
                            <div className="white-line"></div>
                            <div className="solution-level">Nível{key}</div>
                            <div className="white-line"></div>
                        </div>

                        {solutions.map(solution =>
                        <article key={solution.id}>
                            <strong> {solution.title} </strong>
                            <p> {solution.resume}</p>
                            <Link to={`/solutions/${solution.id}`}> Acessar </Link>
                        </article>
                        )}
                    </div>    
                ))}
            </div>
        )
    }

}