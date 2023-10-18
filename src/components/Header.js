import React from 'react';
import Navbar from './Navbar';
import Logo from '../images/LOGO.png';
import LogoMobile from '../images/LOGO_Mobile.png';

export default function Header() {
    return(
        <div id="header">
            <img src={Logo} alt="logo kasa" className='logo_desktop' />
            <img src={LogoMobile} alt="logo kasa" className='logo_mobile' />
            <Navbar />
        </div>
)
}
