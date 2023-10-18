import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



const collapseData = [
    {
        title: "Fiabilité",
        content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."},
    {
        title: "Respect",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."},
    {
        title: "Service",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Sécurité",
        content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]

export default function Collapse() {

    const [selected, setSelected] = useState(-1)

    const toggle = i => {
        if (selected === i){
            return setSelected(-1)
        }

        setSelected(i);
    }

    return (
        <div className='container'>
            <div className='collapse'>
                {collapseData.map((item, i) => (
                    <div className='item' key={i}>
                        <div className='title' onClick={() => toggle(i)}>
                            <h2>{item.title}</h2>
                            <span>{selected === i ? <FontAwesomeIcon icon={faChevronDown} size="2xl" style={{color: "#ffffff",}} /> : <FontAwesomeIcon icon={faChevronUp} size="2xl" style={{color: "#ffffff",}} />}</span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
)
}
