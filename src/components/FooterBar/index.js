import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Forum from '../../assets/icons/forum.svg';
import Profile from '../../assets/icons/profile.svg';
import Solutions from '../../assets/icons/solutions.svg';
import ForumWhite from '../../assets/icons/forum-white.svg';
import ProfileWhite from '../../assets/icons/profile-white.svg';
import SolutionsWhite from '../../assets/icons/solutions-white.svg';

export default class FooterBar extends Component {
    render() {
        const {props} = this.props
        return(
            <footer className="main-footer">
                <div className="icon-collection">
                    <Link to="/forum">
                        <div className={(props?.location?.pathname === '/forum' ? 'active' : '')+ ' forum'}>
                            <img src={ props?.location?.pathname === '/forum' ? ForumWhite : Forum } />
                        </div>
                    </Link>
                    <Link to="/solutions">
                        <div className={(props?.location?.pathname === '/solutions' ? 'active' : '')+ ' solution'}>
                            <img src={ props?.location?.pathname === '/solutions' ? SolutionsWhite : Solutions } />
                        </div>
                    </Link>
                    <Link to="/profile">                    
                        <div className={ (props?.location?.pathname === '/profile' ? 'active' : '')+' profile'}>
                            <img src={ props?.location?.pathname === '/profile' ? ProfileWhite : Profile } />
                        </div>
                    </Link>
                </div>
            </footer>

        )
    }
}