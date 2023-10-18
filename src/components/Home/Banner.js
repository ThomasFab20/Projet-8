import React from 'react';
import Banner from './BANNER.png';

export default function HomeBanner() {
    return (
        <div className='home_banner'>
            <h2 className='banner_title'>Chez vous, <br className='white_space'/> partout et ailleurs</h2>
            <img src={Banner} alt='bannière accueil' />
        </div>
)
}
