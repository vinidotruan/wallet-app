import React, { Component } from 'react';
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
                    <div className="forum">
                        <img src={ props?.location?.pathname === '/forum' ? ForumWhite : Forum } />
                    </div>
                    <div className="solution">
                        <img src={ props?.location?.pathname === '/solutions' ? SolutionsWhite : Solutions } />
                    </div>
                    <div className="profile">
                        <img src={ props?.location?.pathname === '/profile' ? ProfileWhite : Profile } />
                    </div>
                </div>
            </footer>

        )
    }
}