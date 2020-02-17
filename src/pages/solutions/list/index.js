import React, { Component } from 'react';
import './styles.css';
import lupa from '../../../assets/icons/lupa.svg';

export default class List extends Component {

    state = {
        list: [],
        user: {
            level:1,
            levelName: 'INICIANTE I',
            points: 30
        }
    }

    componentDidMount() {
        this.loadList();
    }

    loadList = () => {
        this.setState({ list: [
            {title:'O que é tesouro direto', resume:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo velit. Integer nec dapibus quam.', id:'a2saDDA222', level:1, levelName:'INICIANTE I', completed: 1, reward:20},
            {title:'Por que investir em tesouro direto', resume:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo velit. Integer nec dapibus quam.', id:'a2sASDASDA', level:2, levelName:'INICIANTE II', completed: 0, reward:20},
            {title:'O que é tesouro IPCA?', resume:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo velit. Integer nec dapibus quam.', id:'a2sA24321H', level:3, levelName:'INICIANTE III', completed: 0, reward:20},
            {title:'O que é um título?', resume:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo velit. Integer nec dapibus quam.', id:'a2saDcA222', level:1, levelName:'INICIANTE I', completed: 0, reward:20},
            {title:'O que são ativos de rendimentos fixos e rendimentos variáveis?', resume:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo velit. Integer nec dapibus quam.', id:'a2sAgsdDA', level:2, levelName:'INICIANTE II', completed: 0, reward:20},
            {title:'Qual é a melhor idade para começar a investir?', resume:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo velit. Integer nec dapibus quam.', id:'a2sA2sx1H', level:3, levelName:'INICIANTE III', completed: 0, reward:20},
            {title:'Qual é o valor mínimo necessário para investir?', resume:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo velit. Integer nec dapibus quam.', id:'a2sa6y222', level:2, levelName:'INICIANTE II', completed: 0, reward:20},
            {title:'O que avaliar antes de escolher o tipo de investimento?', resume:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo velit. Integer nec dapibus quam.', id:'a2sA9oASDA', level:1, levelName:'INICIANTE I', completed: 0, reward:20},
            {title:'Quanto da minha renda devo investir?', resume:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo velit. Integer nec dapibus quam.', id:'a2sA20p1H', level:2, levelName:'INICIANTE II', completed: 0, reward:20},
            {title:'Quanto custa para comprar uma ação?', resume:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo velit. Integer nec dapibus quam.', id:'a2sA2lm21H', level:3, levelName:'INICIANTE III', completed: 0, reward:20},
            {title:'O que significa “risco”? O mercado de ações é arriscado?', resume:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo velit. Integer nec dapibus quam.', id:'a2s3e4321H', level:2, levelName:'INICIANTE II', completed: 0, reward:20},
            {title:'O que significa “risco”? O mercado de ações é arriscado?', resume:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo velit. Integer nec dapibus quam.', id:'a2sA26t21H', level:3, levelName:'INICIANTE III', completed: 0, reward:20},
            {title:'O que acontece se eu não quiser mais investir e quiser meu dinheiro de volta?', resume:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo velit. Integer nec dapibus quam.', id:'a23e24321H', level:1, levelName:'INICIANTE I', completed: 0, reward:20},
        ] });
    }

    render() {
        const { list, user } = this.state;

        list.sort((a,b) => a.level - b.level)

        let group = list.reduce((r, a) => {
            r[a.level] = [...r[a.level] || [], a];
            return r;
        }, []);
        return(            
            <div className="list">
                <div className="user">
                    <div className="points-wrapper">
                        <div className="content">
                            <div className="coin"></div>
                            <div className="points">{ user.points }</div>
                        </div>
                    </div>
                    <div className="configuration"></div>
                </div>
                <span className="title"> SOLUÇÕES</span>
                { group.map((solutions, key) => (
                    <div key={key}>
                        <div className={(user.level !== key? 'blocked ': '')+"level-wrapper"} >
                            <div className="solution-level">
                                {solutions[1].levelName}
                            </div>
                        </div>

                        {solutions.map(solution =>
                        <article key={solution.id} className={(user.level !== key)? 'blocked': ''}>
                            <div className={(solution.completed? 'completed ': 'incomplete ')+"content"}>
                                <span className="title"> {solution.title.toUpperCase()} </span >
                                <p>{solution.resume}</p>
                                <div className="rewards">
                                    <div className="coin"></div>
                                    <span className="reward">{solution.reward}</span>
                                </div>
                            </div>
                        </article>
                        )}
                    </div>    
                ))}
            </div>
        )
    }

}