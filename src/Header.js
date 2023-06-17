import React from 'react'
import './Styles.css';
import { useContext } from 'react';
import { ProfileContext } from './ProfileContext';

const Header = () => {
  const { activeProfile } = useContext(ProfileContext)
  return (
    <div className='headerDiv'>
        <div className='headerLogo'>
            <img alt='DevLogo' src={activeProfile === "Developer" ? './images/SkidMaskFinal.png' : './images/SkidBubbleFinal.png'} />
        </div>
        <div className='headerText'>
            <h1>{activeProfile === "Developer" ? "alagappan.dev" : "skidrrow.art"}</h1>
        </div>
    </div>
  )
}

export default Header