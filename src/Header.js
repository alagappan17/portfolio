import React from 'react'
import './Styles.css';
import { useContext } from 'react';
import { ProfileContext } from './ProfileContext';

const Header = () => {
  const { activeProfile } = useContext(ProfileContext)
  return (
    /* Using Key to because react only changes inner text on state change while giving a random key will trick it into thinking that it is a new component */
    <div className='headerDiv' key={Math.random()}> 
        <div className= "headerLogo fadeInDown">
            <img alt='DevLogo' src={activeProfile === "Developer" ? './images/SkidMaskFinal.png' : './images/SkidBubbleFinal.png'} />
        </div>
        <div className='headerText fadeInDown'>
            <h1>{activeProfile === "Developer" ? "alagappan.dev" : "skidrrow.art"}</h1>
        </div>
    </div>
  )
}

export default Header