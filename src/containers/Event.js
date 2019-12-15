import React from 'react';
import './Event.css'

const Event = () => {
    return(
        <div className='eventContainer'>
            <p>Maans s'associe à la Biennale d’art contemporain de Lyon pour vous offrir une expérience unique. Venez découvrir les différentes bulles d'immersion musicale et sensorielles au cœur de le ville et vivez un moment de pur détente au rythme d'ambiances sonores relaxantes... </p>
            <button onClick={() => window.location.href = 'https://maans.eu/essayez-le/'} value="Essayez-le?">Essayez-le</button>
        </div>
    )
}

export default Event