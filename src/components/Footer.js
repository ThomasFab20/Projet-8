import React from 'react';
import Logo from './LOGO_FOOTER.png';

export default function Footer() {
    return (
    <div className='footer'>
        <img src={Logo} alt='logo kaza blanc' />
        <p>© 2020 Kasa. All <br className='white_space'/> rights reserved</p>
    </div>
)
}
