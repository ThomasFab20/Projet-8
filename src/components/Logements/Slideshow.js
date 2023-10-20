import LeftArrow from './Images/arrow_left.png';
import RightArrow from './Images/arrow_right.png';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { logementsData } from './logementsData';




export default function Slideshow() {

    const [currentIndex, setSelected] = useState(0)

    const navigate = useNavigate();

    let {logementId} = useParams();

    useEffect(() => {
        let logementsIds = []

        for(let logement of logementsData){
            logementsIds.push(logement.id)
        }
        if(logementsIds.includes(logementId)){
            return
        }
        else{
            navigate('/error')
        }
        }
    );



    for(let logement of logementsData){

        let pictures = logement.pictures

        if(logementId === logement.id){

            const next = () => {
                const isLastSlide = currentIndex === pictures.length - 1;

                const newIndex = isLastSlide ? 0 : currentIndex + 1;

                setSelected(newIndex)
            };

            const previous = () => {

                const isFirstSlide = currentIndex === 0

                const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex -1

                setSelected(newIndex)
            };

            return (
                <div className='slideshow'>
                    <div className={pictures.length <= 1 ? 'arrows off' : 'arrows'}>
                        <img src={LeftArrow} className='left_arrow' onClick={() => previous()} alt='flèche précédente'/>
                        <img src={RightArrow} className='right_arrow' onClick={() => next()} alt='flèche suivante'/>
                    </div>
                    {pictures.map((logement, i) => (
                        <div className={currentIndex === i ? 'slides active' : 'slides'} key={i}>
                            <div className='slide'>
                                <img src={logement} alt='aperçu du logement' className='slide_img'/>
                                <p className={pictures.length <= 1 ? 'pictures_list off' : 'pictures_list'}>{currentIndex + 1}/{pictures.length}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    }
    
}
