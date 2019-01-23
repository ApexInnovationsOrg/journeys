import React, { Component } from 'react';
import logo from '../ApexLogo500.svg';

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <img src={logo} className="logo" alt="logo" />
            </header>
        );
    }
}

export default HeaderComponent;