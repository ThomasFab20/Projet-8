import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { logementsData } from './logementsData';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

export default function Infos() {

    let {logementId} = useParams()

    for(let logement of logementsData){
        if(logementId === logement.id){

            let tags = logement.tags;

            let rating = logement.rating;

            return (
                <div className='infos'>
                    <div className='infos_left_content'>
                        <div className='title'>
                            <h2>{logement.title}</h2>
                            <p>{logement.location}</p>
                        </div>
                        <div className='tags'>
                            {tags.map((tag, i) => 
                            <p key={i}>{tag}</p>
                            )}
                        </div>
                    </div>
                    <div className='infos_right_content'>
                        <div className='infos_host'>
                            <div className='host_name'>
                                <p>{logement.host.name}</p>
                            </div>
                            <div><img src={logement.host.picture} alt='hôte du logement' className='host_picture'/></div>
                        </div>
                        <div className='rating'>
                            <ReactStars 
                                count={5}
                                size={24}
                                color='#E3E3E3'
                                emptyIcon={<FontAwesomeIcon icon={faStar} />}
                                activeColor='#FF6060'
                                filledIcon={<FontAwesomeIcon icon={faStar} />}
                                value={Number(rating)}
                                classNames='rating_stars_desktop'
                                edit={false}
                            />
                            <ReactStars 
                                count={5}
                                size={13}
                                color='#E3E3E3'
                                emptyIcon={<FontAwesomeIcon icon={faStar} />}
                                activeColor='#FF6060'
                                filledIcon={<FontAwesomeIcon icon={faStar} />}
                                value={Number(rating)}
                                classNames='rating_stars_mobile'
                                edit={false}
                            />
                        </div>
                    </div>
                </div>
        )
        }
    }
    
}
