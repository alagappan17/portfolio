import React from 'react'
import './Styles.css';

const Header = () => {
  return (
    <div className='headerDiv'>
        <div className='headerLogo'>
            <img alt='DevLogo' src='./images/SkidMaskFinal.png' />
        </div>
        <div className='headerText'>
            <h1>alagappan.dev</h1>
        </div>
    </div>
  )
}

export default Header