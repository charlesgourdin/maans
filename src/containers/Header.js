import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='headerContainer'>
            <button onClick={() => window.location.href = 'https://maans.eu/start-up-innovante/'} value="Qui sommes-nous?">Qui sommes-nous?</button>
            <button onClick={() => window.location.href = 'https://maans.eu/fauteuil-immersion-musicale-senseat-one/'} value="Senseat One">Senseat One</button>
            <button onClick={() => window.location.href = 'https://maans.eu/entreprise-bien-etre-au-travail/'} value="Notre offre">Notre Offre</button>
            <button onClick={() => window.location.href = 'https://maans.eu/actualites/'} value="Nos actualités">Nos actualités</button>
        </div>
    )
}

export default Header