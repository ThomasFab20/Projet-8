import React from 'react';
import { Link } from 'react-router-dom';
import { logementsData } from '../Logements/logementsData';

export default function Gallery() {

    return (
    <div className='gallery'>
        <div className='logements'>
            {logementsData.map(logement => {
                return (
                    <Link to={`/Logements/${logement.id}`} key={logement.id}>
                        <figure>
                            <img src={logement.pictures[0]} className='card_img' alt='Aperçu du logement' />
                            <figcaption className='logement_title'>
                                {logement.title}
                            </figcaption>
                        </figure>
                    </Link>
            )})}
        </div>
    </div>
)
}

