import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { logementsData } from './logementsData';

export default function InfosCollapse() {

    let {logementId} = useParams()

    const [selected, setSelected] = useState(null)


    for(let logement of logementsData){
        if(logementId === logement.id){

            let equipments = logement.equipments;

            const i = 1

            const k = 2

            const toggleDescritpion = (i) => {
                if (selected === i){
                    return setSelected(null)
                }
        
                setSelected(i);
            }

            const toggleEquipments = (k) => {
                if (selected === k){
                    return setSelected(null)
                }
        
                setSelected(k);
            }

            return (
                <div className='infos_container'>
                    <div className='collapse'>
                        <div className='logement_description' key={i}>
                            <div className='infos_title' onClick={() => toggleDescritpion(i)}>
                                <h2>Description</h2>
                                <span>{selected === i ? <FontAwesomeIcon icon={faChevronDown} size="2xl" style={{color: "#ffffff",}} /> : <FontAwesomeIcon icon={faChevronUp} size="2xl" style={{color: "#ffffff",}} />}</span>
                            </div>
                            <div className={selected === i ? 'content show' : 'content'}>
                                {logement.description}
                            </div>
                        </div>
                    </div>
                    <div className='collapse'>
                        <div className='logement_equipments' key={k}>
                            <div className='infos_title' onClick={() => toggleEquipments(k)}>
                                <h2>Équipements</h2>
                                <span>{selected === k ? <FontAwesomeIcon icon={faChevronDown} size="2xl" style={{color: "#ffffff",}} /> : <FontAwesomeIcon icon={faChevronUp} size="2xl" style={{color: "#ffffff",}} />}</span>
                            </div>
                            <div className={selected === k ? 'content show' : 'content'}>
                                <div className='equipments'>
                                    {equipments.map((equipment, e) => 
                                        <p key={e}>{equipment}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
