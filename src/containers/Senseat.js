import React from 'react';
import fauteuil from '../assets/fauteuil-relief.png';
import logo from '../assets/logo-maans-blanc-slider.png';
import './Senseat.css';
import Event from './Event'

const Senseat = () => {
    return (
        <div className='senseatContainer'>
            <div className='fauteuil'>
                <div className='senseatTitle'>
                    <h2>SENSEAT</h2>
                    <div className='byLogo'>
                        <p>BY </p>
                        <img src={logo} alt='logo' />
                    </div>
                </div>

                <img className='senseatImg' src={fauteuil} alt='fauteuil' />
            </div>
            <Event/>
        </div>
    )
}

export default Senseat;