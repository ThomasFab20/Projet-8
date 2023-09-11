import React from 'react';
import Navbar from './Navbar';
import Logo from '../images/LOGO.png';

export default function Header() {
    return(
        <div id="header">
            <img src={Logo} alt="logo kasa" />
            <Navbar />
        </div>
)
}
