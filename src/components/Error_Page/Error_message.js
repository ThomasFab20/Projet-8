import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorMessage() {
    return (
        <div className='error_content'>
            <h2>404</h2>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
)
}
